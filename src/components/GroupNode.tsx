import { memo } from "react";
import type { ReactNode } from "react";
import { Handle, Position } from "@xyflow/react";

type GroupItem = {
  label: string;
  icon: ReactNode;
};

type GroupNodeData = {
  label: string;
  icon: ReactNode;
  items?: GroupItem[];
  columns?: number;
};

function GroupNode({ data }: { data: GroupNodeData }) {
  return (
    <div className="h-full w-full overflow-hidden rounded-xl border border-gray-200 bg-white/80 p-4 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        {data.icon}
        <span className="text-xs font-semibold text-gray-700">{data.label}</span>
      </div>

      {data.items && data.items.length > 0 ? (
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: `repeat(${data.columns ?? 2}, minmax(0, 1fr))`,
          }}
        >
          {data.items.map((item) => (
            <div
              key={item.label}
              className="flex min-h-24 min-w-0 flex-col items-center gap-1 text-center"
            >
              {item.icon}
              <p className="h-8 overflow-hidden text-xs leading-4 text-gray-700">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      ) : null}

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

export default memo(GroupNode);
