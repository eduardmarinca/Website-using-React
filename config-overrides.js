const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@menu-inline-toplevel-item-height": "22px",
      "@menu-item-height": "24px",
      "@menu-bg": "#323232",
      "@menu-item-color": "rgba(255, 255, 255, 0.6)",
      "@menu-highlight-color": "white",
      "@menu-item-active-danger-bg": "red",
      "@menu-item-active-bg": "#323232",
      "@menu-item-font-size": ".7rem",
      "@menu-item-active-border-width": "2px",
      "@border-width-base": "0",
      "@layout-sider-background": "#323232",
      "@layout-body-background": "#323232",
      "@menu-dark-submenu-bg": "white",
      "@menu-dark-bg": "white",
      "@menu-dark-color": "rgba(28, 33, 38, 0.6)",
      "@menu-dark-highlight-color": "#323232",
      "@menu-dark-item-active-bg": "gray",
      "@tabs-card-height": "20px",
      "@tabs-card-horizontal-padding": "5px 15px",
      "@tabs-bar-margin": "36px 0 0 200px",
      "@border-radius-base": "6px",
      "@tabs-active-color": "white",
      "@tabs-highlight-color": "#323232",
      "@tabs-card-head-background": "rgba(255, 255, 255, 0.45)",
      "@tabs-title-font-size": "0.6rem",
      "@tabs-hover-color": "white",
      "@tabs-card-gutter": "5px",
      "@tabs-ink-bar-color": "white",
      "@tabs-card-active-color": "#323232"
    },
  })
);
