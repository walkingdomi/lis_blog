const CONFIG = {
  // profile setting (required)
  profile: {
    name: "명지대학교 문헌정보학과 아카이브",
    image: "/logo.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    bio: "명지대학교 문헌정보학과 활동 아카이빙 사이트 입니다.",
    email: "연락처????",
    role: "frontend developer",
    linkedin: "morethanmin",
    github: "mjulisarchive",
    instagram: "명지대학교 문헌정보학과",
  },
  projects: [
    {
      name: `morethan-log`,
      href: "https://github.com/mjulisarchive",
    },
  ],
  // blog setting (required)
  blog: {
    title: "명지대학교 문헌정보학과 아카이빙 사이트",
    description: "명지대학교 문헌정보학과 아카이빙 사이트 입니다!",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://lis-blog.vercel.app",
  since: 2026, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 60, // revalidate time for [slug], index
}

module.exports = { CONFIG }
