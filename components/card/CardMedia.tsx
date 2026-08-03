import { cn } from "@/lib/utils";

type CardMediaProps =
  React.ImgHTMLAttributes<HTMLImageElement>;

export default function CardMedia({
  className,
  alt = "",
  ...props
}: CardMediaProps) {
  return (
    <img
      alt={alt}
      className={cn(
        "aspect-square w-full object-cover",
        className
      )}
      {...props}
    />
  );
}