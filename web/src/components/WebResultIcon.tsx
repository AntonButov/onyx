"use client";

import { ValidSources } from "@/lib/types";
import { SourceIcon } from "./SourceIcon";
import { useState } from "react";
import { ClearDocsBrandMark } from "@/components/brand/ClearDocsBrandMark";

export function WebResultIcon({
  url,
  size = 18,
}: {
  url: string;
  size?: number;
}) {
  const [error, setError] = useState(false);
  let hostname;
  try {
    hostname = new URL(url).hostname;
  } catch (e) {
    hostname = "onyx.app";
  }
  return (
    <>
      {hostname.includes("onyx.app") ? (
        <ClearDocsBrandMark size={size} className="shrink-0" />
      ) : !error ? (
        <img
          className="my-0 rounded-full py-0"
          src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${hostname}&size=128`}
          alt="favicon"
          height={size}
          onError={() => setError(true)}
          width={size}
          style={{
            height: `${size}px`,
            width: `${size}px`,
            background: "transparent",
          }}
        />
      ) : (
        <SourceIcon sourceType={ValidSources.Web} iconSize={size} />
      )}
    </>
  );
}
