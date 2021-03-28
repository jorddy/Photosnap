const meta = require("../components/meta.11ty");
const header = require("../components/header.11ty");
const footer = require("../components/footer.11ty");

module.exports = class {
  render(data) {
    return `
    <!DOCTYPE html>
    <html lang="en-gb">
        <head>
            <meta charset="UTF-8"/>
            <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
            <link rel="preload" as="style" href="/css/main.css" />
            <link rel="preload" as="font" href="/fonts/roboto-400.woff2" type="font/woff2">
            <link rel="preload" as="font" href="/fonts/roboto-700.woff2" type="font/woff2">
            <link rel="stylesheet" href="/css/main.css" />
            ${meta(data)}
        </head>
        <body>
            ${header(data)}
            <main id="main-content" tabindex="-1">
                ${data.content}
            </main>
            ${footer(data)}
            <script src="/js/main.js" type="module" async></script>
        </body>
    </html>
    `;
  }
};
