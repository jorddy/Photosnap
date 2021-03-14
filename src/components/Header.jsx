import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { gql, useQuery } from "@apollo/client";

export default function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const { loading, error, data } = useQuery(gql`
    query getMainNavigationData {
      allSettingss {
        edges {
          node {
            navigation_logo
            page_links {
              page_name
            }
            button_label
            button_link {
              ... on Pricing {
                meta_title
              }
            }
          }
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const {
    navigation_logo,
    page_links,
    button_label,
    button_link,
  } = data.allSettingss.edges[0].node;

  return (
    <header className="navbar">
      <div className="wrapper">
        <Image
          src={navigation_logo.url}
          alt={navigation_logo.alt}
          width={200}
          height={20}
        />
        <ul>
          {page_links &&
            page_links.map(({ page_name }) => (
              <li key={page_name}>
                <Link href={`/${page_name.toLowerCase()}`}>
                  <a>{page_name}</a>
                </Link>
              </li>
            ))}
        </ul>
        <Button
          content={button_label}
          link={`/${button_link.meta_title.toLowerCase()}`}
          style="btn_main"
        />
        <button onClick={handleClick} className="btn_main">
          {click ? <IoCloseOutline /> : <IoMenuOutline />}
        </button>
      </div>
    </header>
  );
}
