import { ImageResponse } from "next/og";
import { liveSystemCount, siteTitle } from "@/lib/seo";

export const alt = siteTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(251,146,60,0.22), transparent 70%), #05060a",
          color: "#e7e9ee",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#8b93a7" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#fb923c" }} />
          Open for new projects
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>Moreblessing Nyemba</div>
          <div style={{ display: "flex", fontSize: 44, marginTop: 12, color: "#c7cbd6" }}>
            Full-stack engineering,&nbsp;<span style={{ color: "#fb923c" }}>AI-native</span>&nbsp;by default.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "22px 28px",
            borderRadius: 16,
            border: "1px solid #1c2030",
            background: "#010401",
            color: "#3cff3c",
            fontSize: 26,
            fontFamily: "monospace",
          }}
        >
          <div style={{ display: "flex" }}>$ status --live</div>
          <div style={{ display: "flex", marginTop: 8, color: "rgba(60,255,60,0.75)" }}>
            {`${liveSystemCount} production systems live · Founder, Slyker Tech Web Services`}
          </div>
        </div>
      </div>
    ),
    size
  );
}
