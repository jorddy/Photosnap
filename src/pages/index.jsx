import Imgix from "react-imgix";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Hello world</h1>
      <Imgix
        src={`https://images.prismic.io/photosnap/33413a67-c14a-48db-b404-12e557daf032_apple-touch-icon.png?auto=compress,format`}
        alt="title"
        width={300}
        height={300}
      />
      <Image
        src={`https://images.prismic.io/photosnap/33413a67-c14a-48db-b404-12e557daf032_apple-touch-icon.png?auto=compress,format`}
        alt="title"
        width={300}
        height={300}
      />
    </>
  );
}
