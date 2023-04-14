import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  feedback: {
    content: "",
  },

  search: {
    placeholder: "Search",
  },

  faviconGlyph: "👋 Jaspreet 👋",

  footer: {
    text: "Jaspreet Singh Sodhi @2023",
  },
  gitTimestamp: false,
  logo: <span>Jassi💻 </span>,
  project: {
    link: "https://github.com/codewithjaspreet",
  },

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Jassi" />
      <meta property="og:description" content="Jaspreet Singh" />
    </>
  ),

  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",

  editLink: {
    text: "",
  },
};



export default config
