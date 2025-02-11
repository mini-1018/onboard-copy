import Image from "next/image";
import NavLinks from "./NavLinks";
import NavButton from "./NavButton";
import Link from "next/link";

export default async function Nav() {
  return (
    <div className="bg-white h-[60px] w-[100%] flex items-center justify-between border-b border-primary mb-[20px] sticky top-0 z-50">
      <div className="flex items-center justify-center gap-[1vw] ml-[5%]">
        <Link href="/">
          {/* 768px 미만에서만 보임 */}
          <div className="md:hidden">
            <Image
              src="/images/onboard-small.png"
              alt="logo"
              width={30}
              height={30}
            />
          </div>
          {/* 768px 이상에서만 보임 */}
          <div className="hidden md:block">
            <Image
              src="/images/onboard-large.png"
              alt="logo"
              width={100}
              height={100}
            />
          </div>
        </Link>
        <NavLinks />
      </div>
      <div className="mr-[5%]">
        <NavButton />
      </div>
    </div>
  );
}
