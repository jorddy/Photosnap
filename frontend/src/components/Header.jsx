import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Button from "./Button";

export default function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const navArray = data.allSettingss.edges;
  const nav = data.allSettingss.edges[0].node;

  return (
    <header className="navbar">
      <div className="wrapper">
        <Image
          src={}
          alt={}
          width={200}
          height={20}
        />
        <ul>
          {.map(() => (
            <li key={}>
              <Link href={`/${}`}>
                <a>{}</a>
              </Link>
            </li>
          ))}
        </ul>
        <Button
          content={}
          link={`/${}`}
          style="btn_main"
        />
        <button onClick={handleClick} className="btn_clear">
          {click ? <IoCloseOutline /> : <IoMenuOutline />}
        </button>
      </div>
    </header>
  );
}
