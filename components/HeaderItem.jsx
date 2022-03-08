import React from "react";

function HeaderItem({ title, Icon }) {
  return (
    //   Adds group
    <li className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white ">
      {/* Adds height of 6 (1.5rem) and margin bottom */}
      <Icon className="h-6 mb-1 group-hover:animate-bounce" />
      {/* Adds more space between the letters */}
      {/* When the group (li) is hovered the p will apply the hover state */}
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </li>
  );
}

export default HeaderItem;
