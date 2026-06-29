"use client";

import {
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
  AWS: <Cloud size={18} />,
  Terraform: <SiTerraform size={18} />,
  Docker: <SiDocker size={18} />,
  Kubernetes: <SiKubernetes size={18} />,
  Helm: <SiHelm size={18} />,
  Git: <SiGit size={18} />,
  "GitHub Actions": <SiGithubactions size={18} />,
  DevSecOps: <Shield size={18} />,
  Jenkins: <SiJenkins size={18} />,
  Prometheus: <SiPrometheus size={18} />,
  Grafana: <SiGrafana size={18} />,
  Python: <SiPython size={18} />,
  Linux: <SiLinux size={18} />,
  IAM: <Shield size={18} />,
  VPC: <Network size={18} />,
  EC2: <Server size={18} />,
  S3: <HardDrive size={18} />,
  RDS: <Database size={18} />,
  "AWS KMS": <KeyRound size={18} />,
};

type Props = {
  name: string;
};

export function TechnologyIcon({ name }: Props) {
  return (
    <span className="text-cyan-500">
      {icons[name] ?? <Cloud size={18} />}
    </span>
  );
}

export default function TechnologyIconDefault({ name }: Props) {
  return (
    <span className="text-cyan-500">
      {icons[name] ?? <Cloud size={18} />}
    </span>
  );
}