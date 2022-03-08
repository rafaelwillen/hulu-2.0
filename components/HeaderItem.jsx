import React from "react";

function HeaderItem({ title, Icon }) {
  return (
    <li>
      <Icon />
      <p>{title}</p>
    </li>
  );
}

export default HeaderItem;
