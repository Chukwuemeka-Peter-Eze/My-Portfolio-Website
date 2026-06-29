export const projects = [
  {
    title: "AWS Secure Multi-Tier Infrastructure",
    description:
      "Designed and deployed a secure AWS architecture with VPC, EC2, IAM, Security Groups, private/public subnets, Route 53, Load Balancer, Auto Scaling, and S3 following cloud security best practices.",
    image: "/projects/aws-multi-tier.png",
    technologies: ["AWS", "VPC", "EC2", "IAM", "S3", "Route 53", "ALB"],
    github: "https://github.com/Chukwuemeka-Peter-Eze/Aws-ec2-web-deployment",
    architecture: "/projects/aws-multi-tier.png",
  },
  {
    title: "Infrastructure as Code with Terraform",
    description:
      "Provisioned reusable AWS infrastructure using Terraform modules, remote state management with S3 backend, DynamoDB locking, variables, and Infrastructure as Code best practices.",
    image: "/projects/terraform.png",
    technologies: ["Terraform", "AWS", "Git", "S3", "DynamoDB"],
    github: "https://github.com/Chukwuemeka-Peter-Eze/Terraform-aws-infrastructure",
    architecture: "/projects/terraform.png",
  },
  {
    title: "Kubernetes Container Platform",
    description:
      "Containerized applications with Docker and deployed them to Kubernetes while managing deployments, services, scaling, persistent storage, and networking with Helm charts.",
    image: "/projects/kubernetes.png",
    technologies: ["Docker", "Kubernetes", "Helm", "AWS EKS"],
    github: "https://github.com/Chukwuemeka-Peter-Eze/tKubernetes-mongodb-deployment",
    architecture: "/projects/kubernetes.png",
  },
  {
    title: "CI/CD Automation Pipeline",
    description:
      "Built automated CI/CD pipelines using Jenkins and GitHub Actions for continuous integration, Docker image building, artifact management with Nexus, and automated deployment to AWS EC2 and EKS.",
    image: "/projects/cicd.png",
    technologies: ["Jenkins", "GitHub Actions", "Docker", "Maven", "Nexus"],
    github: "https://github.com/Chukwuemeka-Peter-Eze/Jenkins-cicd-pipeline",
    architecture: "/projects/cicd.png",
  },
  {
    title: "DevSecOps Pipeline",
    description:
      "Integrated secrets management, security scanning, IAM least-privilege controls, and secure deployment workflows into automated CI/CD pipelines with Docker and Kubernetes.",
    image: "/projects/devsecops.png",
    technologies: ["DevSecOps", "IAM", "KMS", "Docker", "Jenkins"],
    github: "https://github.com/Chukwuemeka-Peter-Eze/Eks-complete-cicd-pipeline",
    architecture: "/projects/devsecops.png",
  },
  {
    title: "Monitoring & Observability Platform",
    description:
      "Implemented infrastructure monitoring using Prometheus Operator on Kubernetes with Helm, Grafana dashboards, AlertManager with email receivers, and custom application metrics collection.",
    image: "/projects/monitoring.png",
    technologies: ["Prometheus", "Grafana", "Kubernetes", "Helm", "AlertManager"],
    github: "https://github.com/Chukwuemeka-Peter-Eze/Prometheus-monitoring-stack",
    architecture: "/projects/monitoring.png",
  },
];