import { useState, useEffect } from "react";
import Imgix from "react-imgix";

export default function Image({ metadata }) {
  const [loaded, setLoaded] = useState(false);
  const { dimensions, url, alt } = metadata;

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {loaded ? (
        <Imgix
          src={url}
          width={dimensions.width}
          height={dimensions.height}
          imgixParams={{ auto: "format", usm: 10 }}
          htmlAttributes={{ alt: `${alt}`, loading: "lazy", decoding: "async" }}
        />
      ) : (
        <Imgix
          src={url}
          width={dimensions.width}
          height={dimensions.height}
          imgixParams={{ auto: "format", q: 1, blur: 500 }}
          htmlAttributes={{ alt: `${alt}`, loading: "lazy", decoding: "async" }}
        />
      )}
    </>
  );
}
