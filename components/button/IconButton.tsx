import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<typeof Button>;

export default function IconButton({
  className,
  size = "icon",
  ...props
}: Props) {
  return (
    <Button
      size={size}
      className={cn(className)}
      {...props}
    />
  );
}