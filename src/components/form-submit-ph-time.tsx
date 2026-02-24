"use client";

import { useMemo } from "react";

export function FormSubmitPhTime() {
  const value = useMemo(() => {
    const formatter = new Intl.DateTimeFormat("en-PH", {
      timeZone: "Asia/Manila",
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    return `${formatter.format(new Date())} (PHT)`;
  }, []);

  return <input type="hidden" name="submitted_at_ph_time" value={value} readOnly />;
}
