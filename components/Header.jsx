import Image from "next/image";
import { HomeIcon } from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="">
      <ul>
        <HeaderItem title="Home" Icon={HomeIcon} />
      </ul>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="Hulu Logo"
      />
    </header>
  );
}

export default Header;
