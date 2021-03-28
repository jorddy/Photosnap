const social = require("./social.11ty");

module.exports = function (data) {
  return `
    <footer>
    <div classname="wrapper">
        <div classname="footer-left">
            <aside>
                ${this.image(
                  data.site.footer.logo,
                  data.site.footer.logo_alt,
                  "100vw"
                )}
                ${social(data)}
            </aside>
            <aside>
                <ul>
                ${data.links.map(
                  (link) => `
                <li>
                    <a href="${link.route}">${link.title}</a>
                </li>
                `
                )}
                </ul>
            </aside>
        </div>
        <div classname="footer-right">
            <button class="btn_white">
                ${data.site.footer.button_label}
                SVG ARROW GOES HERE
            </button>
            <p>${data.site.footer.copyright}</p>
        </div>
    </div>
    </footer>
    `;
};
