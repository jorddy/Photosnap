import Image from "../components/Image";
import Link from "next/link";
import Button from "./Button";
import Social from "./Social";

export default function Footer({ data }) {
  const { items, primary } = data;
  const { logo, button_label, copyright } = primary;

  return (
    <footer>
      <div className="wrapper">
        <div className="footer-left">
          <aside>
            <Image metadata={logo} />
            <Social data={items} />
          </aside>
          <aside>
            <ul>
              {items
                .map(({ page_link }, index) => (
                  <li key={index}>
                    <Link href={`/${page_link}`}>
                      <a>{page_link}</a>
                    </Link>
                  </li>
                ))
                .slice(0, 4)}
            </ul>
          </aside>
        </div>
        <div className="footer-right">
          <Button content={button_label} style="btn_white" arrow />
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
