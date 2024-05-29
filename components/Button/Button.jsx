import Link from "next/link";
import React from "react";

function Button({ children, href }) {
  return (
    <button className="bg-gray w-full rounded-full hover:scale-105 hover:font-bold transition transform duration-150">
      <div className="text-black py-sm base px-sm">
        <Link href={href}>{children}</Link>
      </div>
    </button>
  );
}

export default Button;
