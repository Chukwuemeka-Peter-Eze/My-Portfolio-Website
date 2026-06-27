import {
  SiAmazonwebservices,
  SiTerraform,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiJenkins,
  SiPrometheus,
  SiGrafana,
  SiPython,
  SiLinux,
  SiGit,
  SiHelm,
} from "react-icons/si";

import {
  Cloud,
  Shield,
  Network,
  Database,
  Server,
  HardDrive,
  KeyRound,
} from "lucide-react";

import { ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  AWS: <SiAmazonwebservices />,
  Terraform: <SiTerraform />,
  Docker: <SiDocker />,
  Kubernetes: <SiKubernetes />,
  Helm: <SiHelm />,
  Git: <SiGit />,
  "GitHub Actions": <SiGithubactions />,
  Jenkins: <SiJenkins />,
  Prometheus: <SiPrometheus />,
  Grafana: <SiGrafana />,
  Python: <SiPython />,
  Linux: <SiLinux />,

  IAM: <Shield size={20} />,
  VPC: <Network size={20} />,
  EC2: <Server size={20} />,
  S3: <HardDrive size={20} />,
  RDS: <Database size={20} />,
  "AWS KMS": <KeyRound size={20} />,
};

type Props = {
  name: string;
};

export default function TechnologyIcon({ name }: Props) {
  return (
    <span className="text-2xl text-cyan-500">
      {icons[name] ?? <Cloud size={20} />}
    </span>
  );
}