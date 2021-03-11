import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";

export default function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const { data } = useQuery(gql`
    query getMainNavigation {
      allSettingss {
        edges {
          node {
            navigation_logo
            page_links {
              ... on SettingsPage_links {
                page_name
                page_link {
                  __typename
                }
              }
            }
            button_label
            button_link {
              __typename
            }
          }
        }
      }
    }
  `);

  const navArray = data.allSettingss.edges;
  const nav = data.allSettingss.edges[0].node;

  return (
    <header className="navbar">
      <div className="wrapper">
        <ul>
          {navArray.map((nav) => (
            <li key={nav.page_links.page_name}>
              <Link href={nav.page_links.page_link.__typename.toLowerCase()}>
                <a>{nav.page_links.page_link.__typename}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
