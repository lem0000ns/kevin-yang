"use client";
import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";
import { useRouter } from "next/navigation";

type TransitionLinkProps = ComponentPropsWithoutRef<typeof Link>;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const TransitionLink = ({ children, href, onClick, ...props }: TransitionLinkProps) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    e.preventDefault();
    const body = document.querySelector("body");
    body?.classList.add("page-transition");
    await sleep(200);
    const destination =
      typeof href === "string" ? href : href.pathname ?? "/";
    router.push(destination);
    await sleep(200);
    body?.classList.remove("page-transition");
  };

  return (
    <Link onClick={handleTransition} href={href} {...props}>
      {children}
    </Link>
  );
};

export default TransitionLink;
