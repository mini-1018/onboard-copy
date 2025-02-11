import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-y-4">
      <Image
        src="/images/loading.png"
        alt="로고 이미지"
        width={70}
        height={70}
        className="animate-spin"
      />
      <div className="text-[10px]">Welcome OnBoard</div>
    </div>
  );
}
