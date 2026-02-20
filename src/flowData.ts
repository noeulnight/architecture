import { createElement, type ReactNode } from "react";
import type { Edge, Node } from "@xyflow/react";
import { DashboardIcon } from "./components/DashboardIcon";

type IconExtension = "svg" | "png";

type GroupItem = {
  label: string;
  icon: ReactNode;
};

type ResourceData = {
  content: string;
  icon: ReactNode;
};

type GroupData = {
  label: string;
  icon: ReactNode;
  items?: GroupItem[];
  columns?: number;
};

export type ArchitectureNode = Node<ResourceData | GroupData>;
export type ArchitectureEdge = Edge;

function resourceIcon(icon: string, extension: IconExtension = "svg") {
  return createElement(DashboardIcon, {
    icon,
    extension,
    className: "h-16 w-16",
  });
}

function externalResourceIcon(src: string, alt: string) {
  return createElement("img", {
    src,
    alt,
    className: "h-16 w-16",
  });
}

function groupIcon(icon: string, extension: IconExtension = "svg") {
  return createElement(DashboardIcon, {
    icon,
    extension,
    className: "h-6 w-6",
  });
}

const iconMap: Record<string, ReactNode> = {
  redis: resourceIcon("redis"),
  postgres: resourceIcon("postgresql"),
  mysql: resourceIcon("mysql"),
  mongo: resourceIcon("mongodb"),
  bridge: resourceIcon("proton-mail"),
  "spotify-web": resourceIcon("spotify"),
  "spotify-server": resourceIcon("spotify"),
  "spotify-canvas": resourceIcon("spotify"),
  prometheus: resourceIcon("prometheus"),
  grafana: resourceIcon("grafana"),
  kiali: externalResourceIcon(
    "https://raw.githubusercontent.com/kiali/kiali/refs/heads/master/frontend/src/assets/img/kiali/icon-lightbkg.svg",
    "kiali",
  ),
  "kube-visualizer": resourceIcon("kubernetes"),
  coder: resourceIcon("coder"),
  roundcube: resourceIcon("roundcube"),
  root: resourceIcon("vite"),
  wakapi: resourceIcon("wakapi"),
  authentik: resourceIcon("authentik"),
  user: externalResourceIcon(
    "https://cdn.jsdelivr.net/npm/@tabler/icons@3.34.1/icons/outline/user-circle.svg",
    "user",
  ),
  argocd: resourceIcon("argo-cd"),
  github: resourceIcon("github"),
  n8n: resourceIcon("n8n"),
  slash: resourceIcon("slash"),
  technitium: resourceIcon("technitium", "png"),
  badges: resourceIcon("kubernetes"),
  "istio-base": resourceIcon("istio"),
  istiod: resourceIcon("istio"),
  "istio-cni": resourceIcon("istio"),
  ztunnel: resourceIcon("istio"),
  "istio-ingress": resourceIcon("istio"),
  "public-gateway": resourceIcon("istio"),
  tailscale: resourceIcon("tailscale"),
  "cert-manager": resourceIcon("cert-manager"),
  coredns: resourceIcon("coredns"),
  kubernetes: resourceIcon("kubernetes"),
};

const groupIconMap: Record<string, ReactNode> = {
  kubernetes: groupIcon("kubernetes"),
  tailscale: groupIcon("tailscale"),
  istio: groupIcon("istio"),
  prometheus: groupIcon("prometheus"),
  authentik: groupIcon("authentik"),
};

const groupNodes: ArchitectureNode[] = [
  {
    id: "group-kubernetes",
    data: { label: "Kubernetes", icon: groupIconMap.kubernetes },
    position: { x: 20, y: 350 },
    style: { width: 1304, height: 860 },
    type: "group",
  },
  {
    id: "group-tailscale",
    data: {
      label: "Tailscale",
      icon: groupIconMap.tailscale,
      columns: 4,
      items: [
        { label: "mac mini", icon: iconMap.tailscale },
        { label: "macbook", icon: iconMap.tailscale },
        { label: "desktop", icon: iconMap.tailscale },
        { label: "raspberrypi", icon: iconMap.tailscale },
      ],
    },
    position: { x: 380, y: 70 },
    style: { width: 476, height: 176 },
    type: "group",
  },
  {
    id: "group-istio",
    data: {
      label: "Istio",
      icon: groupIconMap.istio,
      columns: 2,
      items: [
        { label: "istio-base", icon: iconMap["istio-base"] },
        { label: "istiod", icon: iconMap.istiod },
        { label: "istio-cni", icon: iconMap["istio-cni"] },
        { label: "ztunnel", icon: iconMap.ztunnel },
        { label: "istio-ingress", icon: iconMap["istio-ingress"] },
      ],
    },
    position: { x: 48, y: 180 },
    style: { width: 320, height: 430 },
    type: "group",
    parentId: "group-kubernetes",
  },
  {
    id: "group-ingress-policy",
    data: {
      label: "Ingress Access Policy",
      icon: groupIconMap.authentik,
      columns: 2,
      items: [
        { label: "authn policy", icon: iconMap.authentik },
        { label: "outpost-bridge", icon: iconMap.bridge },
        { label: "outpost-technitium", icon: iconMap.technitium },
        { label: "outpost-n8n", icon: iconMap.n8n },
      ],
    },
    position: { x: 418, y: 180 },
    style: { width: 280, height: 304 },
    type: "group",
    parentId: "group-kubernetes",
  },
  {
    id: "group-monitoring",
    data: {
      label: "Monitoring",
      icon: groupIconMap.prometheus,
      columns: 2,
      items: [
        { label: "prometheus", icon: iconMap.prometheus },
        { label: "grafana", icon: iconMap.grafana },
      ],
    },
    position: { x: 418, y: 510 },
    style: { width: 280, height: 210 },
    type: "group",
    parentId: "group-kubernetes",
  },
  {
    id: "group-applications",
    data: {
      label: "Applications",
      icon: groupIconMap.kubernetes,
      columns: 4,
      items: [
        { label: "redis", icon: iconMap.redis },
        { label: "postgres", icon: iconMap.postgres },
        { label: "mysql", icon: iconMap.mysql },
        { label: "mongo", icon: iconMap.mongo },
        { label: "bridge", icon: iconMap.bridge },
        { label: "spotify-web", icon: iconMap["spotify-web"] },
        { label: "spotify-server", icon: iconMap["spotify-server"] },
        { label: "spotify-canvas", icon: iconMap["spotify-canvas"] },
        { label: "kiali", icon: iconMap.kiali },
        { label: "kube-visualizer", icon: iconMap["kube-visualizer"] },
        { label: "coder", icon: iconMap.coder },
        { label: "roundcube", icon: iconMap.roundcube },
        { label: "root", icon: iconMap.root },
        { label: "wakapi", icon: iconMap.wakapi },
        { label: "authentik", icon: iconMap.authentik },
        { label: "n8n", icon: iconMap.n8n },
        { label: "slash", icon: iconMap.slash },
        { label: "technitium", icon: iconMap.technitium },
        { label: "badges", icon: iconMap.badges },
      ],
    },
    position: { x: 748, y: 180 },
    style: { width: 520, height: 620 },
    type: "group",
    parentId: "group-kubernetes",
  },
];

const standaloneNodes: ArchitectureNode[] = [
  {
    id: "external-user",
    type: "resource",
    position: { x: 190, y: 120 },
    data: { content: "external user", icon: iconMap.user },
  },
  {
    id: "github",
    type: "resource",
    position: { x: 55, y: 120 },
    data: { content: "noeulnight/homelab", icon: iconMap.github },
  },
  {
    id: "argocd",
    type: "resource",
    position: { x: 35, y: 70 },
    data: { content: "ArgoCD", icon: iconMap.argocd },
    parentId: "group-kubernetes",
  },
  {
    id: "istio-public-gateway",
    type: "resource",
    position: { x: 170, y: 70 },
    parentId: "group-kubernetes",
    data: { content: "public-gateway", icon: iconMap["public-gateway"] },
  },
  {
    id: "k8s-tailscale-operator",
    type: "resource",
    position: { x: 300, y: 70 },
    parentId: "group-kubernetes",
    data: { content: "tailscale-operator", icon: iconMap.tailscale },
  },
  {
    id: "k8s-coredns",
    type: "resource",
    position: { x: 430, y: 70 },
    parentId: "group-kubernetes",
    data: { content: "coredns", icon: iconMap.coredns },
  },
  {
    id: "k8s-sealed-secrets",
    type: "resource",
    position: { x: 560, y: 70 },
    parentId: "group-kubernetes",
    data: { content: "sealed-secrets", icon: iconMap.kubernetes },
  },
  {
    id: "istio-cert-manager",
    type: "resource",
    position: { x: 690, y: 70 },
    parentId: "group-kubernetes",
    data: {
      content: "cert-manager (letsencrypt)",
      icon: iconMap["cert-manager"],
    },
  },
];

export const initialNodes: ArchitectureNode[] = [...groupNodes, ...standaloneNodes];

export const initialEdges: ArchitectureEdge[] = [
  {
    id: "github-argocd",
    source: "github",
    target: "argocd",
  },
  {
    id: "tailscalegroup-tailscale-operator",
    source: "group-tailscale",
    target: "k8s-tailscale-operator",
  },
  {
    id: "external-user-public-gateway",
    source: "external-user",
    target: "istio-public-gateway",
  },
];
