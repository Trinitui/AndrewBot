data "archive_file" "api_dist_zip" {
  type        = "zip"
  source_dir = "${path.cwd}/../AndrewBot"
  output_path = "AndrewBot.zip"
}

resource "aws_s3_bucket" "dist_bucket" {
  bucket = "andrewbot-elb-dist"
  acl    = "private"
}

resource "aws_s3_bucket_object" "dist_item" {
  key    = "dist-${uuid()}"
  bucket = aws_s3_bucket.dist_bucket.id
  source = data.archive_file.api_dist_zip.output_path
}

resource "aws_elastic_beanstalk_application_version" "default" {
  name        = "andrewbot-prod-${uuid()}"
  application = module.elastic_beanstalk_application.elastic_beanstalk_application_name
  description = "application version created by terraform"
  bucket      = aws_s3_bucket.dist_bucket.id
  key         = aws_s3_bucket_object.dist_item.id
}
