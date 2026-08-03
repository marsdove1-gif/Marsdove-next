import { cn } from "@/lib/utils";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

export default function Heading({
  level = 1,
  className,
  children,
  ...props
}: HeadingProps) {

  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  return (
    <Tag
      className={cn(
        "font-bold tracking-tight",
        {
          1: "text-4xl lg:text-5xl",
          2: "text-3xl",
          3: "text-2xl",
          4: "text-xl",
          5: "text-lg",
          6: "text-base",
        }[level],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}