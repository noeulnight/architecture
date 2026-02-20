import { memo } from "react";
import type { ReactNode } from "react";
import { Handle, Position } from "@xyflow/react";

type ResourceNodeData = {
  content: string | ReactNode;
  icon: ReactNode;
};

function ResourceNode({
  data,
}: {
  data: ResourceNodeData;
}) {
  return (
    <div className="w-32 h-28 px-2 py-1">
      <div className="flex h-full flex-col items-center justify-start gap-1">
        {data.icon}
        {typeof data.content === "string" ? (
          <p className="h-10 overflow-hidden text-center text-xs leading-4 text-gray-700">
            {data.content}
          </p>
        ) : (
          data.content
        )}
      </div>

      <Handle
        type="target"
        position={Position.Top}
        className="bg-transparent! border-none!"
      />
      <Handle
        type="target"
        position={Position.Left}
        className="bg-transparent! border-none!"
      />
      <Handle
        type="target"
        position={Position.Right}
        className="bg-transparent! border-none!"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="bg-transparent! border-none!"
      />
    </div>
  );
}

export default memo(ResourceNode);
