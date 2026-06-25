const skills = {
  Cloud: [
    "AWS",
    "EC2",
    "S3",
    "IAM",
    "VPC",
    "RDS"
  ],

  Containers: [
    "Docker",
    "Kubernetes",
    "Amazon EKS",
    "Helm"
  ],

  IaC: [
    "Terraform",
    "CloudFormation"
  ],

  DevOps: [
    "GitHub Actions",
    "Jenkins",
    "Git",
    "Linux"
  ],

  Security: [
    "IAM",
    "RBAC",
    "AWS KMS",
    "Secrets Manager"
  ],

  Monitoring: [
    "CloudWatch",
    "Prometheus",
    "Grafana",
    "ELK"
  ]
};

export default function Skills() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">
        Technical Expertise
      </h2>

      {Object.entries(skills).map(
        ([category, items]) => (
          <div key={category} className="mb-8">

            <h3 className="font-semibold text-xl">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3 mt-4">
              {items.map((item) => (
                <span
                  key={item}
                  className="border px-4 py-2 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>
        )
      )}
    </section>
  );
}