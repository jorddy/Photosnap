import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

export default function Social({ data }) {
  const facebook = data[0].social_link.url;
  const youtube = data[1].social_link.url;
  const twitter = data[2].social_link.url;
  const pinterest = data[3].social_link.url;
  const instagram = data[4].social_link.url;

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
