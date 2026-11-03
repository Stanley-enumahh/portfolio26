import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { loadGoogleFont } from "@/lib/og-font";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const letter = site.name[0].toUpperCase();
  const font = await loadGoogleFont("Unbounded", 800, letter);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0b0c",
          borderRadius: 14,
          color: "#ededec",
          fontFamily: "Unbounded",
          fontSize: 40,
        }}
      >
        {letter}
        <div style={{ width: 7, height: 7, borderRadius: 999, background: "#d4b483", marginTop: 22, marginLeft: 2 }} />
      </div>
    ),
    { ...size, fonts: [{ name: "Unbounded", data: font, weight: 800, style: "normal" }] }
  );
}
