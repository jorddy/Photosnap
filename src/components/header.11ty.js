module.exports = function (data) {
  return `
    <header classname="navbar">
        <div classname="wrapper">
            ${this.image(
              data.site.header.logo,
              data.site.header.logo_alt,
              "100vw"
            )}
            <ul>
                ${data.links.slice(0, 3).map(
                  (link) => `
                <li>
                    <a href="${link.route}">${link.title}</a>
                </li>
                `
                )}
            </ul>
            <button class="btn_main">${data.site.header.button_label}</button>
            <button class="btn_clear" id="mob-menu-btn">
                FIGURE OUT A WAY TO RENDER THE MENU SVGS
            </button>
        </div>
    </header>
    `;
};
