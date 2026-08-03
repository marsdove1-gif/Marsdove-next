import Image from "@/components/media/Image";

type Props = {
  src: string;
  alt: string;
};

export default function ProductImage({
  src,
  alt,
}: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      width={500}
      height={500}
      className="aspect-square w-full object-cover"
    />
  );
}