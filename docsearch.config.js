// eslint-disable-next-line no-undef
require("dotenv").config();

const config = {
  // eslint-disable-next-line no-undef
  index_name: process.env.INDEX_NAME,
  start_urls: ["https://hometown-prompt.olets.dev/"],
  stop_urls: [],
  selectors: {
    lvl0: {
      selector: ".sidebar-heading.active",
      global: true,
      default_value: "Documentation",
    },
    lvl1: ".theme-default-content h1",
    lvl2: ".theme-default-content h2",
    lvl3: ".theme-default-content h3",
    lvl4: ".theme-default-content h4",
    lvl5: ".theme-default-content h5",
    text: ".theme-default-content p, .theme-default-content li",
    lang: {
      selector: "/html/@lang",
      type: "xpath",
      global: true,
    },
  },
  custom_settings: {
    attributesForFaceting: ["lang"],
  },
};

console.log(JSON.stringify(config));
