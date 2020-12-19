terraform {
  required_version = "= 0.13.5"
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "= 2.70"
    }
    local = {
      source = "hashicorp/local"
      version = "= 1.4"
    }
    null = {
      source = "hashicorp/null"
      version = "= 2.1"
    }
    template = {
      source = "hashicorp/template"
      version = "= 2.2"
    }
  }
}
