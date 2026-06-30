"use client";

import { usePathname, useRouter } from "next/navigation";

export default function useNavigateSection() {
  const pathname = usePathname();
  const router = useRouter();

  return (section: string) => {
    if (pathname !== "/") {
      router.push("/");

      setTimeout(() => {
        const element = document.getElementById(section);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 250);

      return;
    }

    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      history.replaceState(null, "", `/#${section}`);
    }
  };
}