interface DashboardIconProps {
  icon: string;
  className: string;
  extension?: "svg" | "png";
}

export function DashboardIcon({
  icon,
  className,
  extension = "svg",
}: DashboardIconProps) {
  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/${extension}/${icon}.${extension}`}
      alt={icon}
      className={`${className} object-contain`}
    />
  );
}
