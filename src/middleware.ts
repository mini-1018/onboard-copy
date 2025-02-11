import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const authRequiredPages = ["/setting", "/posts/create", "/posts/edit"];

export async function middleware(req: NextRequest) {
  const path = new URL(req.url).pathname;

  // portfolio 페이지 접근 시 디바이스 체크
  if (path.startsWith("/portfolio")) {
    const userAgent = req.headers.get("user-agent") || "";
    const isMobileOrTablet =
      /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(
        userAgent
      );

    if (isMobileOrTablet) {
      return NextResponse.redirect(new URL("/unsupported", req.url));
    }
  }

  // 기존 인증 체크 로직
  if (authRequiredPages.some((page) => path.startsWith(page))) {
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });
    if (!token) {
      return NextResponse.redirect(
        new URL("/signin?error=auth_required", req.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!unsupported|api|_next/static|_next/image|images|favicon.ico).*)",
  ],
};
