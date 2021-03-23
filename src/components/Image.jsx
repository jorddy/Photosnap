import Image from "next/image";

export default function NextImage({ metadata }) {
  const { dimensions, url, alt } = metadata;

  const src = url.replace("?auto=compress,format", "");

  return (
    <Image
      src={src}
      alt={alt}
      width={dimensions.width}
      height={dimensions.height}
    />
  );
}
