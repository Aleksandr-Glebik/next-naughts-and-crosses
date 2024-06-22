import Link from "next/link";

import { ArrowLeftIcon } from "@/components/Icons/ArrowLeftIcon";

export default function LinkBack() {
  return (
    <Link
      href="/"
      className="flex justify-start items-center gap-2 transition-colors text-teal-600 hover:text-teal-400"
    >
      <ArrowLeftIcon />
      <p className="text-base">На главную</p>
    </Link>
  );
}
