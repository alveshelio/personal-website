module.exports = {
  blogPostDir: 'posts', // The name of directory that contains your posts.
  siteTitle: 'Helio Alves - JavaScript Full Stack Developer', // Site title.
  siteTitleAlt: 'Helio Alves JavaScript Full Stack Developer', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://helioalves.com', // Domain of your website without pathPrefix.
  pathPrefix: '/helio-alves', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "My personal website where I showcase some projects I've worked on and talk about development", // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '1825356251115265', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-47311644-5', // GA tracking ID.
  disqusShortname: 'https-vagr9k-github-io-gatsby-advanced-starter', // Disqus shortname.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  userName: 'Advanced User', // Username to display in the author segment.
  userTwitter: 'helioalves', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Montreal, Quebec, Canada', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/alveshelio/',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/helioalves',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'Email',
      url: 'me@helioalves.com',
      iconClassName: 'fa fa-envelope',
    },
  ],
  copyright: 'Copyright © 2017. Helio Alves', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
};
