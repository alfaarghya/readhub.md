import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex justify-around items-center px-5 py-6">
      <Link href="/" className="flex justify-center items-center gap-2">
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <h1 className="text-xl font-semibold">ReadHub.md</h1>
      </Link>
      <div className="hidden sm:block">
        <div className="flex gap-3 text-lg">
          <Link
            href="https://github.com/alfaarghya/readhub.md/issues"
            className="px-3 py-1 cursor-pointer hover:bg-[#2d333b56] rounded-lg"
          >
            Request
          </Link>
          <span className="px-3 py-1 cursor-pointer hover:bg-[#2d333b56] rounded-lg">
            Support Us
          </span>
          <span className="px-3 py-1 cursor-pointer hover:bg-[#2d333b56] rounded-lg">
            License
          </span>
        </div>
      </div>
      <Link
        href="https://github.com/alfaarghya/readhub.md"
        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 "
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-2 py-3 font-medium text-white backdrop-blur-3xl hover:bg-[#2d333b28]">
          <i className="ri-github-fill text-3xl"></i>
        </span>
      </Link>
    </div>
  );
};

export default NavBar;
