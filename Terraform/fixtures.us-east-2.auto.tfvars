region = "us-east-2"
availability_zones = ["us-east-2a", "us-east-2b"]
namespace = "AndrewBot"
stage = "prod"
name = "elastic-beanstalk-env"
description = "Test elastic-beanstalk-environment"
tier = "WebServer"
environment_type = "LoadBalanced"
loadbalancer_type = "application"
availability_zone_selector = "Any 2"
instance_type = "t3.micro"
autoscale_min = 1
autoscale_max = 2
wait_for_ready_timeout = "20m"
force_destroy = true
rolling_update_enabled = true
rolling_update_type = "Health"
updating_min_in_service = 0
updating_max_batch = 1
healthcheck_url = "/"
application_port = 80
root_volume_size = 8
root_volume_type = "gp2"
autoscale_measure_name = "CPUUtilization"
autoscale_statistic = "Average"
autoscale_unit = "Percent"
autoscale_lower_bound = 20
autoscale_lower_increment = -1
autoscale_upper_bound = 80
autoscale_upper_increment = 1
elb_scheme = "public"
// https://docs.aws.amazon.com/elasticbeanstalk/latest/platforms/platforms-supported.html
// https://docs.aws.amazon.com/elasticbeanstalk/latest/platforms/platforms-supported.html#platforms-supported.docker
solution_stack_name = "64bit Amazon Linux 2018.03 v4.17.0 running Node.js"
version_label = ""
//dns_zone_id = "Z3SO0TKDDQ0RGG"
// https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options-general.html
additional_settings = [
  {
    namespace = "aws:elasticbeanstalk:environment:process:default"
    name      = "StickinessEnabled"
    value     = "false"
  },
  {
    namespace = "aws:elasticbeanstalk:managedactions"
    name      = "ManagedActionsEnabled"
    value     = "false"
  }
]
env_vars = {
}
