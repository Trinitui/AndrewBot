
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

resource "null_resource" "example" {
    triggers = {
        value = "A example resource that does nothing!"
    }
}

provider "aws" {
  version = "2.33.0"
  region = aws_region
}

provider "random" {
  version = "2.2"
}