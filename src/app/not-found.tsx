import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-4xl flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="card-surface max-w-xl p-8">
        <p className="text-eyebrow text-subtle">404</p>
        <h1 className="mt-4 text-title font-serif text-foreground">
          That page doesn’t exist
        </h1>
        <p className="mt-3 text-sm text-muted">
          The link may be broken or the page might have moved.
        </p>
        <div className="mt-6 flex justify-center">
          <Button asChild>
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
