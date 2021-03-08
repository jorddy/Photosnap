import Imgix, { Picture, Source } from "react-imgix";
import SanityImage from "../components/SanityImage";

export default function Home() {
  const src = "https://assets.imgix.net/examples/pione.jpg";

  return (
    <>
      <h1>Hello world</h1>
      {/* Normal img tag with srcset */}
      {/* <Imgix src={src} sizes="100vw" /> */}
      {/* Responsive image using picture tag for minimum widths */}
      {/* <Picture>
        <Source
          src={src}
          width={400}
          htmlAttributes={{ media: "(min-width: 768px)" }}
        />
        <Source
          src={src}
          width={200}
          htmlAttributes={{ media: "(min-width: 480px)" }}
        />
        <Imgix src={src} imgixParams={{ w: 100 }} />
      </Picture> */}
      <SanityImage
        src="images/zp7mbokg/production/G3i4emG6B8JnTmGoN0UjgAp8-300x450.jpg"
        width={600}
        height={800}
        alt="This is an alt tag"
      />
    </>
  );
}
