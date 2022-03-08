import requests from "../utils/requests";

function Nav() {
  return (
    <nav className="relative">
      <ul className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll overflow-y-hidden scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <li
            className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 last:pr-24"
            key={key}
          >
            {title}
          </li>
        ))}
      </ul>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12" />
    </nav>
  );
}

export default Nav;
