terraform {
  backend "remote" {
    organization = "Trinitui"
    workspaces {
      name = "AndrewBot"
    }
  }
}
