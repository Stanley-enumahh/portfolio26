import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { loadGoogleFont } from "@/lib/og-font";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const name = site.name.toUpperCase();
  const role = site.role.toLowerCase();
  const domain = site.url.replace(/^https?:\/\//, "");
  const meta = `${domain}${site.available.toLowerCase()}${site.year}`;

  const [bold, light, mono] = await Promise.all([
    loadGoogleFont("Unbounded", 800, `${name}.`),
    loadGoogleFont("Unbounded", 300, role),
    loadGoogleFont("Azeret Mono", 400, meta),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b0c",
          color: "#ededec",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "Azeret Mono", fontSize: 24, color: "#d4b483" }}>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#d4b483" }} />
          {site.available.toLowerCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontFamily: "Unbounded", fontWeight: 800, fontSize: 180, lineHeight: 0.95, letterSpacing: -8 }}>
            {name}
            <span style={{ color: "#d4b483" }}>.</span>
          </div>
          <div style={{ fontFamily: "Unbounded", fontWeight: 300, fontSize: 64, color: "#8a8a86", letterSpacing: -2 }}>
            {role}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "Azeret Mono", fontSize: 24, color: "#8a8a86", borderTop: "1px solid #1f1f21", paddingTop: 28 }}>
          <span>{domain}</span>
          <span>{site.year}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Unbounded", data: bold, weight: 800, style: "normal" },
        { name: "Unbounded", data: light, weight: 300, style: "normal" },
        { name: "Azeret Mono", data: mono, weight: 400, style: "normal" },
      ],
    }
  );
}
