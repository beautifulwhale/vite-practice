export interface Icon {
  name: string;
  prefix?: string;
  color?: string;
}

export default function SvgIcon({
  name,
  prefix = "icon",
  color = "#333",
  ...props
}: Icon) {
  const symbolId = `#${prefix}-${name}`;

  return (
    <svg
      {...props}
      aria-hidden="true"
      style={{ width: "100px", height: "100px" }}
    >
      <use href={symbolId} fill={color} />
    </svg>
  );
}
