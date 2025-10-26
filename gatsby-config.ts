import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `Emilia`,
    siteTitleAlt: `Emilia - Gatsby Starter Portfolio`,
    siteHeadline: `Emilia - Gatsby Theme from @lekoarts`,
    siteUrl: `https://inrc230010.github.io`, 
    siteDescription: `Minimalistic portfolio/photography site with masonry grid, page transitions and big images. Themeable with Theme UI. Includes Light/Dark mode.`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    author: `@lucaspizzaia`,
  },

  
  pathPrefix: "/github-pages-cicd-LucasPizzaia",

  trailingSlash: `always`,

  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emilia - Portfolio`,
        short_name: `Emilia`,
        description: `Minimalistic portfolio/photography site with masonry grid, page transitions and big images.`,
        start_url: `/github-pages-cicd-LucasPizzaia/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-catch-links`,
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {
        saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
        saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
        open: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

module.exports = config 
