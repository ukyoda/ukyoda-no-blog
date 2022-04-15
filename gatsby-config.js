require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    process.env.CONTENTFUL_DELIVERY_TOKEN,
}

// If you want to use the preview API please define
// CONTENTFUL_HOST and CONTENTFUL_PREVIEW_ACCESS_TOKEN in your
// environment config.
//
// CONTENTFUL_HOST should map to `preview.contentful.com`
// CONTENTFUL_PREVIEW_ACCESS_TOKEN should map to your
// Content Preview API token
//
// For more information around the Preview API check out the documentation at
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
//
// To change back to the normal CDA, remove the CONTENTFUL_HOST variable from your environment.
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}
const siteUrl = 'https://blog.ukyoda.com'

module.exports = {
  siteMetadata: {
    title: "ukyoda's blog",
    description:
      'このブログはukyodaのブログサイトです。技術的なこととか、生活的なこととか、そういったことを書いていきます。',
    siteUrl,
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '~': 'src',
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-linaria',
    'gatsby-plugin-typegen',
    'gatsby-plugin-postcss',
    'gatsby-plugin-dts-css-modules',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
            allContentfulMyPost {
              nodes {
                updatedAt
                slug
              }
            }
          }
        `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allContentfulMyPost: { nodes: allPosts },
        }) => {
          const times = allPosts.reduce((obj, { updatedAt, slug }) => {
            obj[`/blog/${slug}`] = updatedAt
            return obj
          }, {})
          return allPages.map(({ path }) => {
            if (times[path]) {
              return { path, lastmod: times[path] }
            } else {
              return { path, lastmod: new Date().toISOString() }
            }
          })
        },
        serialize: ({ path, lastmod }) => {
          return {
            url: path,
            priority: 0.7,
            lastmod,
          }
        },
      },
    },
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_ID,
        head: true,
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        enableWebVitalsTracking: true,
      },
    },
  ],
}
