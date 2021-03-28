module.exports = function (data) {
  console.log(data.site);
  let pageTitle = data.site.name;
  let socialImage = data.site.url + data.site.social;
  let currentUrl = data.site.url + data.page.url;

  if (data.title) {
    pageTitle = data.title + "  |  " + data.site.name;
  }

  return `
        <title>${pageTitle}</title>
        <link rel="canonical" href="${currentUrl}"/>
        <meta property="og:site_name" content="${currentUrl}"/>
        <meta property="og:title" content="${data.title || data.site.name}"/>
        <meta content="website" property="og:type"/>
        <meta property="og:url" content="${currentUrl}"/>
        <meta content="summary_large_image" name="twitter:card"/>
        <meta property="og:image" content="${data.socialImage || socialImage}"/>
        <meta name="twitter:image" content="${
          data.socialImage || socialImage
        }"/>
        <meta content="Page image for ${
          data.site.name
        }" property="og:image:alt"/>
        <meta content="Page image for ${
          data.site.name
        }" name="twitter:image:alt"/>
        <meta name="description" content="${
          data.description || data.site.description
        }"/>
        <meta name="twitter:description" content="${
          data.description || data.site.description
        }"/>
        <meta property="og:description" content="${
          data.description || data.site.description
        }"/>
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180"/>
        <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png"/>
        <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png"/>
        <link href="/site.webmanifest" rel="manifest"/>
        <link color="#000000" href="/safari-pinned-tab.svg" rel="mask-icon"/>
        <meta content="#000000" name="msapplication-TileColor"/>
        <meta content="#ffffff" name="theme-color"/>
        `;
};
