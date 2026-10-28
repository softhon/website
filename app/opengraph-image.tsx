import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Softhon — Ideas are just the beginning.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [font, logo] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/InterTight-Medium.ttf")),
    readFile(join(process.cwd(), "public/softhon-icon.png"), "base64"),
  ]);

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", padding: 40, background: "#eaeaea" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: 64,
            borderRadius: 40,
            background: "#f7f7f7",
            color: "#111111",
            fontFamily: "Inter Tight",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <img src={`data:image/png;base64,${logo}`} width={64} height={64} style={{ borderRadius: 18 }} alt="" />
            <span style={{ fontSize: 36, letterSpacing: "-0.02em" }}>Softhon</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", fontSize: 104, lineHeight: 1.02, letterSpacing: "-0.045em" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <span>Ideas</span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 84,
                  height: 84,
                  borderRadius: 22,
                  background: "#2391ee",
                  transform: "rotate(-6deg)",
                  boxShadow: "0 10px 22px -6px rgba(35,145,238,0.55)",
                }}
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.2h5c0-.9.4-1.7 1.1-2.2A6 6 0 0 0 12 3z" />
                </svg>
              </div>
              <span>are</span>
            </div>
            <span style={{ color: "#858585" }}>just the beginning.</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Inter Tight", data: font, style: "normal", weight: 500 }],
    },
  );
}
