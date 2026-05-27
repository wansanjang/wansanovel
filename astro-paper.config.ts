import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://wansanovel.vercel.app/", // 현재 배포된 주소로 변경
    title: "WansaNovel", // ★ 이 부분이 좌측 상단 로고로 나타납니다. 원하시는 이름으로 변경해 주세요.
    description: "미니멀하고 직관적인 인사이트를 기록하는 공간", // 블로그에 대한 짧은 소개
    author: "완산장", 
    profile: "https://wansanovel.vercel.app/about", // 소개 페이지 주소
    ogImage: "default-og.jpg",
    lang: "ko", // 웹 접근성과 SEO를 위해 한국어(ko)로 변경
    timezone: "Asia/Seoul", // 발행일 기준이 되는 시간대를 서울로 변경
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false, // 깃허브 오픈소스 기여용 버튼이므로 보통 false로 끕니다.
    },
    search: "pagefind",
  },
  socials: [
    // 본인의 링크드인, 이메일 주소 등으로 변경해 주세요. 사용하지 않는 항목은 줄 전체를 삭제하시면 됩니다.
    { name: "linkedin", url: "https://www.linkedin.com/in/wonsun-chung/" },
    { name: "mail",     url: "mailto:wonsun.chung@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
