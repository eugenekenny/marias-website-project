"use client";

import { useEffect } from "react";

interface WalkScoreWidgetProps {
  address: string;
  wsid: string;
}

export default function WalkScoreWidget({ address, wsid }: WalkScoreWidgetProps) {
  useEffect(() => {
    (window as any).ws_wsid = wsid;
    (window as any).ws_address = address;
    (window as any).ws_format = "tall";
    (window as any).ws_width = "400";
    (window as any).ws_height = "500";

    const script = document.createElement("script");
    script.src = "https://www.walkscore.com/tile/show-walkscore-tile.php";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [address, wsid]);

  return (
    <div>
      <style>{`#ws-walkscore-tile{position:relative;text-align:left}#ws-walkscore-tile *{float:none;}`}</style>
      <div id="ws-walkscore-tile"></div>
    </div>
  );
}
