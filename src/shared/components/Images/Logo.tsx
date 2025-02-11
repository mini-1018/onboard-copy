import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex justify-center items-center">
      <Image
        src="/images/onboard-large.png"
        alt="logo"
        width={100}
        height={100}
      />
    </Link>
  );
}
