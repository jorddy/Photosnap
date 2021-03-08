import Image from "next/image";

const loader = ({ src }) => {
  return `https://cdn.sanity.io/${src}`;
};

export default function UnsplashImage({ src, alt, width, height }) {
  return (
    <Image loader={loader} src={src} width={width} height={height} alt={alt} />
  );
}
