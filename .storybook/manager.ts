import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: "Lunad Edge",
    brandUrl: "https://mywebsite.com",
    brandImage: "../public/logo.svg",
  },
});