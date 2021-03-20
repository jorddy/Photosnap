import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Social from "./Social";

export default function Footer({ data }) {
  const {
    footer_logo,
    social_links,
    page_links,
    copyright_text,
    button_text,
    button_link,
  } = data;

  return (
    <footer>
      <div className="wrapper">
        <div className="footer-left">
          <aside>
            <Image
              src={footer_logo.url}
              alt={footer_logo.alt}
              width={200}
              height={20}
            />
            <Social data={social_links} />
          </aside>
          <aside>
            <ul>
              {page_links &&
                page_links.map(({ page_name }) => (
                  <li key={page_name}>
                    <Link href={`/${page_name.toLowerCase()}`}>
                      <a>{page_name}</a>
                    </Link>
                  </li>
                ))}
            </ul>
          </aside>
        </div>
        <div className="footer-right">
          <Button
            content={button_text}
            link={`/${button_link.slug}`}
            style="btn_white"
            arrow
          />
          <p>{copyright_text}</p>
        </div>
      </div>
    </footer>
  );
}
