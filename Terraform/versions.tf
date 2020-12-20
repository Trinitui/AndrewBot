terraform {
  required_version = "= 0.13.5"
  required_providers {
    archive = {
      source = "hashicorp/archive"
      version = "= 2.0"
    }
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
