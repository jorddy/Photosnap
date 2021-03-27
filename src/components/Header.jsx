import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import Image from "../components/Image";
import Button from "./Button";

export default function Header({ data }) {
  const [click, setClick] = useState(false);

  console.log(data);

  const handleClick = () => {
    setClick(!click);
  };

  const { header_logo, header_page_links, header_button_label } = data;

  return (
    <header className="navbar">
      <div className="wrapper">
        <Image metadata={header_logo} />
        <ul>
          {header_page_links.map((link) => (
            <li key={link.header_page_route}>
              <Link href={`/${link.header_page_route}`}>
                <a>{link.header_page_link}</a>
              </Link>
            </li>
          ))}
        </ul>
        <Button content={header_button_label} style="btn_main" />
        <button onClick={handleClick} className="btn_clear">
          {click ? <IoCloseOutline /> : <IoMenuOutline />}
        </button>
      </div>
    </header>
  );
}
