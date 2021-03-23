import { BsArrowRight } from "react-icons/bs";

export default function Button({ content, style, arrow }) {
  const invite = (e) => {
    e.preventDefault();
    alert("You have requested an invite");
  };

  return (
    <button className={style} onClick={invite}>
      {content}
      {arrow ? <BsArrowRight /> : ""}
    </button>
  );
}
