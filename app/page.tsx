// @ts-ignore
"use client";
import { useEffect } from "react";
import { Adsense } from "@ctrl/react-adsense";
export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.adsbygoogle) {
        window.adsbygoogle = [];
      }
      window.adsbygoogle.push({});
      window.adsbygoogle.push({});
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Nextjs Project For Ads</h1>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4293091400623161"
        data-ad-slot="5816307885"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-4293091400623161"
        data-ad-slot="5979959419"
      ></ins>
      <div className="text-center adsbygoogle my-3">
        <Adsense
          client="ca-pub-4293091400623161"
          slot="5979959419"
          style={{ display: "block" }}
          layout="in-article"
          format="fluid"
        />
      </div>
    </main>
  );
}
