export const projects = [
  {
    id: 1,

    title: "AWS Secure Multi-Tier Infrastructure",

    description:
      "Designed and implemented a secure, highly available AWS multi-tier architecture following cloud security and well-architected best practices. The environment utilizes public and private subnets, IAM least-privilege access controls, security groups, load balancing, and scalable compute resources to support production-style workloads while maintaining security, resiliency, and operational efficiency.",

    technologies: [
      "AWS",
      "EC2",
      "VPC",
      "IAM",
      "S3",
      "RDS",
      "Security Groups",
      "Route53",
      "Auto Scaling",
      "Elastic Load Balancer"
    ],

    github:
      "https://github.com/Chukwuemeka-Peter-Eze",

    architectureDiagram:
      "/projects/aws-multi-tier-architecture.png",

    highlights: [
      "Implemented secure VPC network segmentation",
      "Designed public and private subnet architecture",
      "Applied IAM least-privilege security controls",
      "Configured highly available load-balanced services",
      "Implemented scalable AWS infrastructure patterns"
    ]
  },

  {
    id: 2,

    title: "Infrastructure as Code with Terraform",

    description:
      "Provisioned and managed AWS infrastructure using Terraform modules and reusable Infrastructure as Code practices. The solution enables repeatable, version-controlled deployments across multiple environments while reducing manual provisioning effort and improving infrastructure consistency.",

    technologies: [
      "Terraform",
      "AWS",
      "Git",
      "GitHub",
      "Infrastructure as Code",
      "Cloud Automation"
    ],

    github:
      "https://github.com/Chukwuemeka-Peter-Eze",

    architectureDiagram:
      "/projects/terraform-architecture.png",

    highlights: [
      "Built reusable Terraform modules",
      "Automated infrastructure provisioning",
      "Implemented version-controlled deployments",
      "Reduced manual configuration tasks",
      "Enabled multi-environment infrastructure management"
    ]
  },

  {
    id: 3,

    title: "Kubernetes Container Platform",

    description:
      "Built a containerized application platform using Docker and Kubernetes. The environment supports application deployment, service discovery, scaling, workload orchestration, and resilient operations using modern cloud-native architecture principles.",

    technologies: [
      "Docker",
      "Kubernetes",
      "Amazon EKS",
      "Helm",
      "Linux",
      "Containers"
    ],

    github:
      "https://github.com/Chukwuemeka-Peter-Eze",

    architectureDiagram:
      "/projects/kubernetes-platform.png",

    highlights: [
      "Containerized workloads using Docker",
      "Deployed applications on Kubernetes clusters",
      "Implemented service networking and scaling",
      "Managed workloads using Kubernetes resources",
      "Applied cloud-native deployment practices"
    ]
  },

  {
    id: 4,

    title: "CI/CD Automation Pipeline",

    description:
      "Designed automated software delivery pipelines using GitHub Actions and Jenkins. The solution streamlines build, test, and deployment workflows while improving deployment reliability, consistency, and engineering productivity.",

    technologies: [
      "GitHub Actions",
      "Jenkins",
      "Git",
      "Docker",
      "CI/CD",
      "DevOps"
    ],

    github:
      "https://github.com/Chukwuemeka-Peter-Eze",

    architectureDiagram:
      "/projects/cicd-pipeline.png",

    highlights: [
      "Automated build and deployment workflows",
      "Implemented continuous integration practices",
      "Improved deployment consistency",
      "Integrated source control automation",
      "Reduced manual release processes"
    ]
  },

  {
    id: 5,

    title: "DevSecOps Pipeline Implementation",

    description:
      "Integrated security controls into automated delivery pipelines by implementing secure secrets management, least-privilege access controls, and security-focused deployment workflows. The project demonstrates how security can be embedded throughout the software delivery lifecycle.",

    technologies: [
      "DevSecOps",
      "GitHub Actions",
      "AWS IAM",
      "AWS KMS",
      "AWS Secrets Manager",
      "Security Automation"
    ],

    github:
      "https://github.com/Chukwuemeka-Peter-Eze",

    architectureDiagram:
      "/projects/devsecops-pipeline.png",

    highlights: [
      "Integrated security into CI/CD workflows",
      "Implemented secrets management practices",
      "Applied least-privilege access principles",
      "Automated security-focused deployment controls",
      "Strengthened software delivery security posture"
    ]
  },

  {
    id: 6,

    title: "Monitoring & Observability Platform",

    description:
      "Built an observability and monitoring platform using CloudWatch, Prometheus, Grafana, and centralized logging solutions. The platform provides operational visibility, proactive alerting, infrastructure monitoring, and reliability insights for cloud-native environments.",

    technologies: [
      "CloudWatch",
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "Monitoring",
      "Observability"
    ],

    github:
      "https://github.com/Chukwuemeka-Peter-Eze",

    architectureDiagram:
      "/projects/observability-platform.png",

    highlights: [
      "Implemented centralized monitoring",
      "Built infrastructure dashboards",
      "Configured proactive alerting systems",
      "Improved operational visibility",
      "Enhanced reliability and troubleshooting capabilities"
    ]
  }
];