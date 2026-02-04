import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type UnderlineLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  label: string;
};

export function UnderlineLink({ label, className, ...props }: UnderlineLinkProps) {
  return (
    <Link
      className={cn(
        "group relative inline-flex items-center gap-2 text-sm font-medium text-foreground transition",
        className
      )}
      {...props}
    >
      <span>{label}</span>
      <span
        aria-hidden
        className="relative h-[1px] w-8 overflow-hidden rounded-full bg-foreground/40"
      >
        <span className="absolute inset-0 translate-x-[-100%] bg-foreground transition-transform duration-300 group-hover:translate-x-0" />
      </span>
    </Link>
  );
}
