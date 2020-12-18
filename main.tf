
variable "aws_region" {
  type    = string
  default = "ohio"
}

     
terraform {
    backend "remote" {
        organization = "Trinitui"

    workspaces {
        name = "AndrewBot"
        }
    }
}

provider "aws" {
  #version = "2.33.0"
    region = aws_region
    access_key = TF_VAR_AWS_ACCESS_KEY_ID
    secret_key = TF_VAR_AWS_SECRET_ACCESS_KEY
}

# create a zip of your deployment with terraform
data "archive_file" "api_dist_zip" {
  type        = "zip"
  source_file = "${path.root}"
  output_path = "${path.root}.zip"
}

resource "aws_s3_bucket" "dist_bucket" {
  bucket = "${var.namespace}-elb-dist"
  acl    = "private"
}
resource "aws_s3_bucket_object" "dist_item" {
  key    = "${var.environment}/dist-${uuid()}"
  bucket = "${aws_s3_bucket.dist_bucket.id}"
  source = "${var.dist_zip}"
}

module "elastic_beanstalk_application" {
    source      = "git::https://github.com/Trinitui/AndrewBot.git"
    namespace   = "AndrewBot"
    stage       = "prod"
    name        = "app"
    description = "Test elastic_beanstalk_application"
}

module "elastic_beanstalk_environment" {
    source                             = "git::https://github.com/Trinitui/AndrewBot.git"
    namespace                          = "AndrewBot"
    stage                              = "prod"
    name                               = "app"
    description                        = "Test elastic_beanstalk_environment"
    region                             = aws_region
    availability_zone_selector         = "Any 2"
    elastic_beanstalk_application_name = module.elastic_beanstalk_application.elastic_beanstalk_application_name

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
  name        = "AndrewBot-prod-${uuid()}"
  application = "${module.elastic_beanstalk_application.app_name}"
  description = "application version created by terraform"
  bucket      = "${aws_s3_bucket.dist_bucket.id}"
  key         = "${aws_s3_bucket_object.dist_item.id}"
}


output "app_version" {
  value = "${aws_elastic_beanstalk_application_version.default.name}"
}
output "env_name" {
  value = "${module.elastic_beanstalk_environment.name}"
}
