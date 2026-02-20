import { useCallback, useState } from "react";
import {
  applyEdgeChanges,
  applyNodeChanges,
  type OnEdgesChange,
  type OnNodesChange,
  ReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import GroupNode from "./components/GroupNode";
import ResourceNode from "./components/ResourceNode";
import {
  initialEdges,
  initialNodes,
  type ArchitectureEdge,
  type ArchitectureNode,
} from "./flowData";

const nodeTypes = {
  resource: ResourceNode,
  group: GroupNode,
};

const defaultEdgeOptions = {
  type: "step",
  style: { stroke: "#94a3b8", strokeWidth: 1.1 },
};

export default function App() {
  const [nodes, setNodes] = useState<ArchitectureNode[]>(initialNodes);
  const [edges, setEdges] = useState<ArchitectureEdge[]>(initialEdges);

  const onNodesChange = useCallback<OnNodesChange<ArchitectureNode>>(
    (changes) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback<OnEdgesChange<ArchitectureEdge>>(
    (changes) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <nav className="absolute left-1/2 top-5 z-20 flex -translate-x-1/2 items-center rounded-full border border-gray-200 bg-white/90 p-2 shadow-sm backdrop-blur transition-all duration-200 hover:shadow-md">
        <span className="rounded-full px-4 py-2 text-sm font-medium text-gray-700">
          Homelab
        </span>
        <a
          href="https://github.com/noeulnight/homelab"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
        >
          Github
        </a>
      </nav>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        colorMode="light"
        snapToGrid
        snapGrid={[1, 1]}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        proOptions={{ hideAttribution: true }}
      />
    </div>
  );
}
