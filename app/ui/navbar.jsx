import Link from "next/link";
import ShowsTvLogo from "./showstv-logo";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-full h-20 px-4">
      <Link href="/" >
        <div>
          <ShowsTvLogo />
        </div>
      </Link>
      <div>
        <button className="flex items-center justify-center text-white ">
          <UserCircleIcon className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
