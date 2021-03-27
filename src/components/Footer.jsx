import Image from "../components/Image";
import Link from "next/link";
import Button from "./Button";
import SocialLinks from "./SocialLinks";

export default function Footer({ data }) {
  const {
    footer_logo,
    footer_button_label,
    copyright,
    footer_page_links,
    footer_social,
  } = data;

  return (
    <footer>
      <div className="wrapper">
        <div className="footer-left">
          <aside>
            <Image metadata={footer_logo} />
            <SocialLinks data={footer_social} />
          </aside>
          <aside>
            <ul>
              {footer_page_links.map((link) => (
                <li key={link.footer_page_route}>
                  <Link href={`/${link.footer_page_route}`}>
                    <a>{link.footer_page_link}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <div className="footer-right">
          <Button content={footer_button_label} style="btn_white" arrow />
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
