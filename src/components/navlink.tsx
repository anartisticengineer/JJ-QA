"use client";

import { useRouter } from "next/navigation";

interface LinkProps {
  linkName: string;
  link?: string;
}

const Navlink = ({ linkName, link }: LinkProps) => {
  const router = useRouter();
  return (
    <li className="p-5">
      {link ? (
        <button
          className="font-semibold hover:underline"
          onClick={() => router.push(link)}
        >
          {linkName}
        </button>
      ) : (
        linkName
      )}
    </li>
  );
};

export default Navlink;
