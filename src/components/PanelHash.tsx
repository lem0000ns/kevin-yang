"use client";

import { useEffect } from "react";

function scrollToId(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const panel = target.closest(".panel-scroll");

  if (panel instanceof HTMLElement && panel.scrollHeight > panel.clientHeight + 1) {
    const top = Math.max(
      0,
      target.getBoundingClientRect().top -
        panel.getBoundingClientRect().top +
        panel.scrollTop -
        32,
    );
    panel.scrollTo({ top, behavior: "instant" });
    return;
  }

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({
    behavior: reduce ? "auto" : "smooth",
    block: "start",
  });
}

function scrollToHash() {
  const id = window.location.hash.slice(1);
  if (!id) return;
  scrollToId(id);
}

export default function PanelHash() {
  useEffect(() => {
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    window.addEventListener("popstate", scrollToHash);
    return () => {
      window.removeEventListener("hashchange", scrollToHash);
      window.removeEventListener("popstate", scrollToHash);
    };
  }, []);

  return null;
}

export function SectionLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        const id = href.startsWith("#") ? href.slice(1) : "";
        if (!id || !document.getElementById(id)) return;
        event.preventDefault();
        scrollToId(id);
        history.pushState(null, "", href);
      }}
    >
      {children}
    </a>
  );
}
