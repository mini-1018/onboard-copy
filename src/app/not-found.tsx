import Button from "@/shared/components/buttons/Button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-y-10">
      <Image
        src="/images/onboard-large.png"
        alt="not-found"
        width={300}
        height={300}
      />
      <div className="flex flex-col items-center justify-center gap-y-4 text-primary">
        <p className="text-2xl font-bold">
          요청하신 페이지를 찾을 수 없습니다.
        </p>
        <Link href="/">
          <Button>홈으로</Button>
        </Link>
      </div>
    </div>
  );
}
