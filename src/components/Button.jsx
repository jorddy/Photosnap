import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export default function Button({ content, link, style, arrow }) {
  return (
    <button className={style}>
      <Link href={link}>
        <a>{content}</a>
      </Link>
      {arrow ? <BsArrowRight /> : ""}
    </button>
  );
}
