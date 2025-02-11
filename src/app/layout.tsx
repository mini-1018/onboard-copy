import { AuthProvider } from "@/shared/components/providers/AuthProvider";
import { Metadata } from "next";
import "@/app/globals.css";
import QueryProvider from "@/shared/api/QueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "OnBoard | 개발자들의 코딩 항해",
  description:
    "개발자를 위한 지식 공유 & 질문 커뮤니티, OnBoard. 모든 개발자들의 막힘없는 코딩 여정을 위해 노력하겠습니다.",
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    title: "OnBoard | 개발자들의 코딩 항해",
    description:
      "개발자를 위한 지식 공유 & 질문 커뮤니티, OnBoard. 모든 개발자들의 막힘없는 코딩 여정을 위해 노력하겠습니다.",
    url: "https://onbrd.kr",
    siteName: "Onboard",
    type: "website",
    images: [
      {
        url: "/images/onboard-large.png",
        width: 400,
        height: 300,
        alt: "Onboard 대표 이미지",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <AuthProvider session={session}>
            {children}
            <ToastContainer />
          </AuthProvider>
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryProvider>
      </body>
    </html>
  );
}
