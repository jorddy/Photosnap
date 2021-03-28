module.exports = function (data) {
  return `
    <ul>
        ${data.social.map(
          (social) => `
        <li>
            <a href="${social.url}" target="_blank" rel="nofollow norefferer">
                ${this.image(social.icon, social.alt, "100vw")}
            </a>
        </li>
        `
        )}
    `;
};
