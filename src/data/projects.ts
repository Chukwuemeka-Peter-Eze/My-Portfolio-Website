import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    featured: true,
    category: "AWS",
    difficulty: "Advanced",

    title: "AWS Secure Multi-Tier Infrastructure",

    description:
      "Designed and deployed a highly available AWS infrastructure with public/private networking, load balancing, auto scaling, IAM security controls, and production-ready networking following AWS Well-Architected Framework principles.",

    image: "/projects/aws-multi-tier.png",

    architecture: "/projects/aws-multi-tier.png",

    github:
      "https://github.com/Chukwuemeka-Peter-Eze/Aws-ec2-web-deployment",

    technologies: [
      "AWS",
      "EC2",
      "VPC",
      "IAM",
      "Route53",
      "ALB",
      "Auto Scaling",
      "S3",
    ],

    highlights: [
      "Designed secure public/private subnet architecture across multiple Availability Zones.",
      "Implemented least-privilege IAM roles and Security Groups.",
      "Configured Application Load Balancer with Auto Scaling.",
      "Built scalable cloud infrastructure following AWS best practices.",
      "Applied production-grade networking and security architecture.",
    ],

    metrics: [
      "AWS Well-Architected",
      "Production Ready",
      "High Availability",
      "Scalable Infrastructure",
    ],
  },

  {
    featured: true,
    category: "Terraform",
    difficulty: "Advanced",

    title: "Terraform Infrastructure as Code Platform",

    description:
      "Provisioned reusable AWS infrastructure using modular Terraform code with remote state management, reusable modules, version-controlled deployments, and Infrastructure as Code best practices.",

    image: "/projects/terraform.png",

    architecture: "/projects/terraform.png",

    github:
      "https://github.com/Chukwuemeka-Peter-Eze/Terraform-aws-infrastructure",

    technologies: [
      "Terraform",
      "AWS",
      "S3 Backend",
      "DynamoDB",
      "Git",
      "IaC",
    ],

    highlights: [
      "Provisioned AWS infrastructure entirely using Infrastructure as Code.",
      "Implemented reusable Terraform modules.",
      "Configured remote state management with S3 backend.",
      "Enabled state locking using DynamoDB.",
      "Improved deployment consistency through version-controlled infrastructure.",
    ],

    metrics: [
      "Infrastructure as Code",
      "Reusable Modules",
      "Production Ready",
      "Version Controlled",
    ],
  },

  {
    featured: true,
    category: "Kubernetes",
    difficulty: "Enterprise",

    title: "Amazon EKS Kubernetes Platform",

    description:
      "Built a production-style Kubernetes environment on Amazon EKS featuring scalable container orchestration, Helm deployments, networking, persistent storage, and cloud-native workloads.",

    image: "/projects/kubernetes.png",

    architecture: "/projects/kubernetes.png",

    github:
      "https://github.com/Chukwuemeka-Peter-Eze/Aws-eks-cluster",

    technologies: [
      "Amazon EKS",
      "Docker",
      "Kubernetes",
      "Helm",
      "AWS",
    ],

    highlights: [
      "Provisioned production-ready Kubernetes clusters on Amazon EKS.",
      "Managed deployments using Kubernetes manifests and Helm.",
      "Implemented service discovery and networking.",
      "Configured scalable container workloads.",
      "Applied Kubernetes production deployment practices.",
    ],

    metrics: [
      "Cloud Native",
      "Production Ready",
      "Container Orchestration",
      "Scalable Platform",
    ],
  },

  {
    featured: true,
    category: "CI/CD",
    difficulty: "Enterprise",

    title: "Enterprise CI/CD Platform",

    description:
      "Implemented complete CI/CD automation pipelines using Jenkins, GitHub Actions, Docker, Nexus Repository, Kubernetes, and AWS deployment workflows.",

    image: "/projects/cicd.png",

    architecture: "/projects/cicd.png",

    github:
      "https://github.com/Chukwuemeka-Peter-Eze/Eks-complete-cicd-pipeline",

    technologies: [
      "Jenkins",
      "GitHub Actions",
      "Docker",
      "Nexus",
      "Kubernetes",
      "AWS",
    ],

    highlights: [
      "Automated software delivery pipelines.",
      "Integrated GitHub Actions with Jenkins.",
      "Built Docker images automatically.",
      "Deployed workloads to Amazon EKS.",
      "Reduced manual deployment effort through CI/CD automation.",
    ],

    metrics: [
      "CI/CD Automation",
      "Production Pipeline",
      "Continuous Delivery",
      "Enterprise DevOps",
    ],
  },

  {
    featured: true,
    category: "Automation",
    difficulty: "Advanced",

    title: "Python AWS Automation Platform",

    description:
      "Developed automation scripts using Python and Boto3 to automate AWS infrastructure management, operational tasks, monitoring, and cloud administration.",

    image: "/projects/python.png",

    architecture: "/projects/python.png",

    github:
      "https://github.com/Chukwuemeka-Peter-Eze/Python-aws-boto3-automation",

    technologies: [
      "Python",
      "Boto3",
      "AWS CLI",
      "CloudWatch",
      "Automation",
    ],

    highlights: [
      "Automated AWS administrative tasks using Boto3.",
      "Reduced repetitive cloud operations.",
      "Improved operational efficiency.",
      "Integrated Python scripting with AWS APIs.",
      "Created reusable cloud automation workflows.",
    ],

    metrics: [
      "Automation",
      "AWS SDK",
      "Operational Efficiency",
      "Production Scripts",
    ],
  },

  {
    featured: true,
    category: "Monitoring",
    difficulty: "Enterprise",

    title: "Monitoring & Observability Platform",

    description:
      "Designed an enterprise monitoring platform using Prometheus, Grafana, AlertManager, Helm, and Kubernetes to provide infrastructure visibility and proactive alerting.",

    image: "/projects/monitoring.png",

    architecture: "/projects/monitoring.png",

    github:
      "https://github.com/Chukwuemeka-Peter-Eze/Prometheus-monitoring-stack",

    technologies: [
      "Prometheus",
      "Grafana",
      "AlertManager",
      "Helm",
      "Kubernetes",
    ],

    highlights: [
      "Built enterprise monitoring dashboards.",
      "Collected infrastructure and application metrics.",
      "Configured automated alerting.",
      "Implemented Kubernetes monitoring.",
      "Improved infrastructure observability and reliability.",
    ],

    metrics: [
      "Enterprise Monitoring",
      "Observability",
      "Real-Time Alerting",
      "Production Ready",
    ],
  },
];