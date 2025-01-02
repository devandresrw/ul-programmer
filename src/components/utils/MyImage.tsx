import Image from "next/image";

interface MyImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  styles: string;
}

export default function MyImage({
  src,
  alt,
  height,
  width,
  styles
}: MyImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      className={styles}
      priority
    />
  );
}