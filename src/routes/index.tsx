import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const CHANNEL_URL = "https://t.me/+jwWGdWSIDa5jZTc1";
const LOGO_URL = "https://i.ibb.co/7NTtytsb/x.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elvish Army – Join VIP Channel" },
      { name: "description", content: "Join Elvish Army VIP for free sureshot hacks, 100% winning predictions, and monthly income 50K–100K." },
      { property: "og:title", content: "Elvish Army – Join VIP Channel" },
      { property: "og:description", content: "Free sureshot VIP hacks. Join now – limited time." },
      { property: "og:image", content: LOGO_URL },
    ],
    scripts: [
      {
        children: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','26956470707386160');fbq('track','PageView');`,
      },
    ],
  }),
  component: Index,
});

function useCountdown() {
  const [t, setT] = useState({ m: 29, s: 52 });
  useEffect(() => {
    const i = setInterval(() => {
      setT((p) => {
        let s = p.s - 1;
        let m = p.m;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 29; s = 52; }
        return { m, s };
      });
    }, 1000);
    return () => clearInterval(i);
  }, []);
  return t;
}

function Index() {
  const { m, s } = useCountdown();
  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-8" style={{ background: "radial-gradient(ellipse at top, #052e1a 0%, #000 70%)" }}>
      <div className="w-full max-w-sm rounded-3xl p-6 text-center" style={{ background: "linear-gradient(180deg,#031a10,#000)", border: "1px solid #0f3d28", boxShadow: "0 20px 60px rgba(0,255,120,0.08)" }}>
        <div className="rounded-full px-4 py-2 text-xs font-bold tracking-wide mb-5" style={{ background: "linear-gradient(90deg,#00e676,#00c853)", color: "#001a0d" }}>
          SURESHOT • LIMITED TIME • JOIN FAST 🔥
        </div>

        <div className="mx-auto w-32 h-32 rounded-2xl overflow-hidden mb-4" style={{ border: "3px solid #00e676", boxShadow: "0 0 30px rgba(0,230,118,0.4)" }}>
          <img src={LOGO_URL} alt="Elvish Army logo" className="w-full h-full object-cover" />
        </div>

        <h1 className="text-2xl font-extrabold italic text-white tracking-wide">ELVISH ARMY</h1>
        <p className="text-xs text-gray-300 mt-2 mb-5">JOIN FAST FOR FREE SURESHOT VIP HACKS</p>

        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            (window as any).fbq?.("track", "Subscribe");
            (window as any).fbq?.("track", "Lead");
          }}
          className="block w-full py-4 rounded-full font-bold text-base mb-5 transition-transform hover:scale-[1.02]"
          style={{ background: "linear-gradient(90deg,#00e676,#00c853)", color: "#001a0d", boxShadow: "0 8px 24px rgba(0,230,118,0.35)" }}
        >
          JOIN VIP CHANNEL
        </a>

        <p className="text-xs text-gray-400">Predictions King</p>
        <p className="text-sm font-bold mt-1 mb-3" style={{ color: "#00e676" }}>HURRY UP! JOIN NOW</p>

        <div className="flex justify-center gap-3 mb-5">
          {[{ v: pad(m), l: "MIN" }, { v: pad(s), l: "SEC" }].map((x) => (
            <div key={x.l} className="w-20 py-2 rounded-xl" style={{ background: "#061f14", border: "1px solid #0f3d28" }}>
              <div className="text-2xl font-bold text-white">{x.v}</div>
              <div className="text-[10px] font-bold" style={{ color: "#ff3b3b" }}>{x.l}</div>
            </div>
          ))}
        </div>

        <ul className="text-left text-sm text-gray-200 space-y-2 mb-5">
          <li>⭐ 100% WINNING SURESHOT</li>
          <li>⭐ 100% LOSS RECOVERY</li>
          <li>⭐ MONTHLY INCOME 50K–100K</li>
        </ul>

        <div className="pt-4" style={{ borderTop: "1px solid #0f3d28" }}>
          <p className="text-sm font-bold text-white mb-1">5+ YEARS EXPERIENCE</p>
          <p className="text-sm font-bold" style={{ color: "#00e676" }}>10 LAKH+ WINNING</p>
          <p className="text-xs text-gray-400 mt-1">🏆 NUMBER KING</p>
        </div>
      </div>

      <noscript>
        <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=26956470707386160&ev=PageView&noscript=1" alt="" />
      </noscript>
    </main>
  );
}
