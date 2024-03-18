"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Navbar = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <nav className="w-full h-[60px] dark:bg-gray-400 bg-amber-500 flex items-center justify-center">
      <Link
        href="/?genre=trendingMovie"
        className={`text-[16px] text-white mx-5 ${
          genre === "trendingMovie"
            ? "border-b-2 border-amber-500 dark:border-white"
            : ""
        }`}
      >
        Trending
      </Link>
      <Link
        href="/?genre=topRated"
        className={`text-[16px] text-white mx-5 ${
          genre === "topRated"
            ? "border-b-2 border-amber-500 dark:border-white"
            : ""
        }`}
      >
        Top Rated
      </Link>
    </nav>
  );
};

export default Navbar;
