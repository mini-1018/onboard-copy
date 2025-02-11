import Image from "next/image";

export default function UnsupportedPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-y-10">
      <Image
        src="/images/onboard-large.png"
        alt="unsupported"
        width={300}
        height={300}
      />
      <div className="flex flex-col items-center justify-center gap-y-2 text-primary">
        <p className="text-2xl font-bold">🙏죄송합니다.</p>
        <p>포트폴리오는 데스크톱 환경에서 이용 부탁드립니다.</p>
      </div>
    </div>
  );
}
