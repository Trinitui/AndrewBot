# create a zip of your deployment with terraform
data "archive_file" "api_dist_zip" {
  type        = "zip"
  source_file = "${path.cwd}/../AndrewBot"
  output_path = "${path.cwd}.zip"
}

resource "aws_s3_bucket" "dist_bucket" {
  bucket = "${var.namespace}-elb-dist"
  acl    = "private"
}

resource "aws_s3_bucket_object" "dist_item" {
  key    = "${var.environment}/dist-${uuid()}"
  bucket = aws_s3_bucket.dist_bucket.id
  source = data.archive_file.api_dist_zip.output_path
}

module "elastic-beanstalk-application" {
  source  = "cloudposse/elastic-beanstalk-application/aws"
  version = "0.7.1"
  name        = "AndrewBotapp"
  # insert the 1 required variable here
}
module "elastic_beanstalk_application" {
  source      = "cloudposse/elastic-beanstalk-application/aws"
  version     = "0.7.1"
  namespace   = "andrewbot"
  stage       = "prod"
  name        = "andrewbotapp"
  description = "Test elastic_beanstalk_application"
}

module "elastic_beanstalk_environment" {
  source                             = "cloudposse/elastic-beanstalk-environment/aws"
  version                            = "0.31.0"
  namespace                          = "andrewbot"
  stage                              = "prod"
  name                               = "app"
  description                        = "Test elastic_beanstalk_environment"
  region                             = var.aws_region
  availability_zone_selector         = "Any 2"
  elastic_beanstalk_application_name = module.elastic_beanstalk_application.elastic_beanstalk_application_name
  application_subnets = ""
  vpc_id = ""

  instance_type           = "t3.small"
  autoscale_min           = 1
  autoscale_max           = 2
  updating_min_in_service = 0
  updating_max_batch      = 1

  loadbalancer_type       = "application"

  // https://docs.aws.amazon.com/elasticbeanstalk/latest/platforms/platforms-supported.html
  // https://docs.aws.amazon.com/elasticbeanstalk/latest/platforms/platforms-supported.html#platforms-supported.docker
  solution_stack_name = "64bit Amazon Linux 2018.03 v2.12.17 running Docker 18.06.1-ce"
}

resource "aws_elastic_beanstalk_application_version" "default" {
  name        = "andrewbot-prod-${uuid()}"
  application = module.elastic_beanstalk_application.app_name
  description = "application version created by terraform"
  bucket      = aws_s3_bucket.dist_bucket.id
  key         = aws_s3_bucket_object.dist_item.id
}
