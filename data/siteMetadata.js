/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'vishalv.com',
  author: 'Vishal V',
  headerTitle: 'Vishal V',
  description: 'Personal website of Vishal V, featuring writing, ideas, projects, and research',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://www.vishalv.com',
  siteRepo: 'https://github.com/visvig/vishalv.com',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  //mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'vishalvignesh.iitm@gmail.com',
  
  x: 'https://x.com/VishalVignesh_',
  linkedin: 'https://www.linkedin.com/in/vishalvignesh/',
  github: 'https://github.com/visvig',
  // twitter: 'https://twitter.com/Twitter',
  // facebook: 'https://facebook.com',
  // youtube: 'https://youtube.com',
  // threads: 'https://www.threads.net',
  // instagram: 'https://www.instagram.com/',
  // medium: 'https://medium.com/vishalvignesh',
  // bluesky: 'https://bsky.app/',
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
