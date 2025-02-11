import { NextSeo, ArticleJsonLd } from "next-seo";

interface SEOProps {
  title: string; // 페이지 제목
  description: string; // 페이지 설명
  url?: string; // 페이지 URL (기본값: https://onbrd.kr)
  image?: string; // OG 이미지 (기본값: /images/onboard-large.png)
  type?: "website" | "article"; // 컨텐츠 타입
  publishedTime?: string; // 게시글 최초 발행 시간 (ISO 8601 형식)
  modifiedTime?: string; // 게시글 수정 시간
  authorName?: string; // 작성자 이름
}

export default function SEO({
  title,
  description,
  url = "https://onbrd.kr",
  image = "/images/onboard-large.png",
  type = "website",
  publishedTime,
  modifiedTime,
  authorName,
}: SEOProps) {
  return (
    <>
      <NextSeo
        title={title} // HTML <title> 태그
        description={description} // HTML <meta name="description" />
        canonical={url} // 표준 URL (검색엔진이 중복 컨텐츠 판단 시 사용)
        openGraph={{
          // 페이스북, 카카오톡 등 미리보기
          type: type, // website 또는 article
          url: url, // 공유될 URL
          title: title, // 공유될 제목
          description: description, // 공유될 설명
          siteName: "Onboard", // 사이트 이름
          images: [{ url: image, width: 1200, height: 630, alt: title }], // 공유될 이미지
        }}
        twitter={{
          // 트위터 카드
          cardType: "summary_large_image", // 큰 이미지 카드 타입
          site: "@onbrd", // 트위터 계정
          handle: "@onbrd",
        }}
      />

      {/* JSON-LD 추가 (구조화 데이터) */}
      {type === "article" && publishedTime && authorName && (
        <ArticleJsonLd
          type="BlogPosting" // 블로그 포스트 타입
          url={url} // 블로그 포스트 URL
          title={title} // 블로그 포스트 제목
          images={[image]} // 블로그 포스트 이미지
          datePublished={publishedTime} // 발행일 (검색엔진이 최신성 판단)
          dateModified={modifiedTime || publishedTime} // 블로그 포스트 수정 시간
          authorName={authorName} // 블로그 포스트 작성자 이름
          publisherName="Onboard" // 발행자/사이트 이름
          publisherLogo="/images/onboard-large.png" // 발행자 로고
          description={description} // 게시글 설명
        />
      )}
    </>
  );
}
