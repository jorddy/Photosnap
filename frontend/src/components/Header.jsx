import { siteLinks } from "../utils/links";
import SanityImage from "../components/SanityImage";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <header className="navbar">
      <div className="wrapper">
        <ul>
          {siteLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.url}>
                <a>link.name</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
