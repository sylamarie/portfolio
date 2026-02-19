"use client";

import { useEffect, useState } from "react";

export function FormSubmitPhTime() {
  const [value, setValue] = useState("");

  useEffect(() => {
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

    setValue(`${formatter.format(new Date())} (PHT)`);
  }, []);

  return <input type="hidden" name="Submitted At (PH Time)" value={value} readOnly />;
}
