import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@sanity/image-url";
import { useState, useEffect } from "react";

const builder = imageUrlBuilder(client);

const urlFor = (source) => {
  return builder.image(source);
};

export default function SanityImage({ src, alt, w, h, layout }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(loaded);
  }, []);

  return (
    <Image
      src={
        loaded
          ? urlFor(src).width(w).height(h).url()
          : urlFor(src).width(w).height(h).blur(50)
      }
      alt={alt}
      width={w}
      height={h}
      layout={layout}
    />
  );
}
