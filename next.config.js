// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa");
const isProd = process.env.NODE_ENV === "production";

module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: !isProd,
  },
  images: {
    loader: "cloudinary",
    path: "cloudinary://912718569476114:G144Qg_0V_mxQokPSIOQpWmoN54@defnibbpl",
    domains: ["res.cloudinary.com/"],
  },
});
