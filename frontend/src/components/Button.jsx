import { BsArrowRight } from "react-icons/bs";

export default function Button({ content, link, style, arrow }) {
  return (
    <button className={style}>
      <a href={link}>{content}</a>
      {arrow ? <BsArrowRight /> : ""}
    </button>
  );
}
