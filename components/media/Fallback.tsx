import { ImageIcon } from "lucide-react";

export default function Fallback() {
  return (
    <div className="flex aspect-square items-center justify-center rounded-xl border bg-muted">
      <ImageIcon className="h-10 w-10 text-muted-foreground" />
    </div>
  );
}