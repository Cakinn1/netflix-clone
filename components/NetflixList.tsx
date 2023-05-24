import { CheckIcon } from "@heroicons/react/24/solid";
import React from "react";

function NetflixList() {
  return (
    <ul>
      <li className="flex items-center gap-x-2 text-lg">
        <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
        Ad-free.
      </li>
      <li className="flex items-center gap-x-2 text-lg">
        <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations just
        for you.
      </li>
      <li className="flex items-center gap-x-2 text-lg">
        <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel your
        plan anytime.
      </li>
    </ul>
  );
}

export default NetflixList;
