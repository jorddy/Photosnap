module.exports = class {
  data() {
    return {
      layout: "base.11ty.js",
    };
  }

  render(data) {
    return `
      <h1>${data.heading}</h1>
      `;
  }
};
