import Badge from "./Badge";

const tech = [
  "AWS",
  "Terraform",
  "Docker",
  "Kubernetes",
  "Linux",
  "GitHub Actions",
  "Python",
  "DevSecOps",
];

export default function TechStack() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {tech.map((item) => (
        <Badge key={item}>{item}</Badge>
      ))}
    </div>
  );
}