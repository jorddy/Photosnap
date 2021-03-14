import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

export default function Social({ content }) {
  const facebook = content[0].platform_link.url;
  const youtube = content[1].platform_link.url;
  const twitter = content[2].platform_link.url;
  const pinterest = content[3].platform_link.url;
  const instagram = content[4].platform_link.url;

  return (
    <ul>
      <li>
        <a href={facebook} target="_blank" rel="nofollow norefferer">
          <FaFacebookSquare className="icon_white" />
        </a>
      </li>
      <li>
        <a href={youtube} target="_blank" rel="nofollow norefferer">
          <FaYoutube className="icon_white" />
        </a>
      </li>
      <li>
        <a href={twitter} target="_blank" rel="nofollow norefferer">
          <FaTwitter className="icon_white" />
        </a>
      </li>
      <li>
        <a href={pinterest} target="_blank" rel="nofollow norefferer">
          <FaPinterest className="icon_white" />
        </a>
      </li>
      <li>
        <a href={instagram} target="_blank" rel="nofollow norefferer">
          <FaInstagram className="icon_white" />
        </a>
      </li>
    </ul>
  );
}
