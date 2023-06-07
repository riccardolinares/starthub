import Script from "next/script";

export function Chat() {
  const websiteId = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;
  return (
    <Script
      id="crisp-chat"
      strategy="afterInteractive"
    >{`window.$crisp=[];window.CRISP_WEBSITE_ID="${websiteId}";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}</Script>
  );
}
