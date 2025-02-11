/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://onbrd.kr",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/setting", "/posts/create", "/posts/edit"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // 모든 검색엔진 크롤러가 전체 페이지를 크롤링할 수 있도록 허용
      { userAgent: "Googlebot", allow: "/" }, // 구글봇 크롤링 허용
      { userAgent: "Naverbot", allow: "/" }, // 네이버 검색엔진 크롤링 허용
      { userAgent: "Bingbot", allow: "/" }, // 빙 검색엔진 크롤링 허용
      {
        userAgent: "*",
        disallow: ["/setting", "/posts/create", "/posts/edit", "/unsupported"],
      }, // 관리자 페이지 색인 금지
    ],
    additionalSitemaps: [
      "https://onbrd.kr/sitemap.xml", // 생성된 사이트맵 추가
    ],
  },
};
