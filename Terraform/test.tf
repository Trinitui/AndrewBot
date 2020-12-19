module "vpc" {
  source  = "cloudposse/vpc/aws"
  version = "0.18.1"
  # insert the 11 required variables here
}

module "dynamic-subnets" {
  source  = "cloudposse/dynamic-subnets/aws"
  version = "0.33.0"
  # insert the 13 required variables here
}

module "elastic-beanstalk-application" {
  source  = "cloudposse/elastic-beanstalk-application/aws"
  version = "0.8.0"
  # insert the 9 required variables here
}

module "elastic-beanstalk-environment" {
  source  = "cloudposse/elastic-beanstalk-environment/aws"
  version = "0.31.0"
  # insert the 7 required variables here
}
