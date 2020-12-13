
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