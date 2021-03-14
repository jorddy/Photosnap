import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Social from "./Social";
import { gql, useQuery } from "@apollo/client";

export default function Footer() {
  const { loading, error, data } = useQuery(gql`
    query getFooterData {
      allFooters {
        edges {
          node {
            footer_logo
            social_links {
              ... on FooterSocial_links {
                platform_link {
                  ... on _ExternalLink {
                    url
                  }
                }
              }
            }
            page_links {
              ... on FooterPage_links {
                page_name
              }
            }
            button_text
            button_link {
              ... on Pricing {
                meta_title
              }
            }
            copyright_text
          }
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const {
    footer_logo,
    social_links,
    page_links,
    copyright_text,
    button_text,
    button_link,
  } = data.allFooters.edges[0].node;

  return (
    <footer>
      <div className="wrapper">
        <div className="footer-left">
          <aside>
            <Image
              src={footer_logo.url}
              alt={footer_logo.alt}
              width={200}
              height={20}
            />
            <Social content={social_links} />
          </aside>
          <aside>
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
          </aside>
        </div>
        <div className="footer-right">
          <Button
            content={button_text}
            link={`/${button_link.meta_title.toLowerCase()}`}
            style="btn_white"
            arrow
          />
          <p>{copyright_text}</p>
        </div>
      </div>
    </footer>
  );
}
