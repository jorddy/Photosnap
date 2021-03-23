import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import Image from "../components/Image";
import Button from "./Button";

export default function Header({ data }) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const { items, primary } = data;
  const { logo, button_label } = primary;

  return (
    <header className="navbar">
      <div className="wrapper">
        <Image metadata={logo} />
        <ul>
          {items.map(({ page_link }, index) => (
            <li key={index}>
              <Link href={`/${page_link}`}>
                <a>{page_link.charAt(0).toUpperCase() + page_link.slice(1)}</a>
              </Link>
            </li>
          ))}
        </ul>
        <Button content={button_label} style="btn_main" />
        <button onClick={handleClick} className="btn_clear">
          {click ? <IoCloseOutline /> : <IoMenuOutline />}
        </button>
      </div>
    </header>
  );
}
