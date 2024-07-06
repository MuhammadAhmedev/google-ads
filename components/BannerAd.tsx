"use client";

import { useEffect } from "react";

export default function BannerAd() {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      );
    } catch (error) {
      console.error("Failed to initialize Google Adsense", error);
    }
  }, []);
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-4293091400623161"
      data-ad-slot="5816307885"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
