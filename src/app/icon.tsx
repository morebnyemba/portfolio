import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
          background: "#010401",
          border: "1px solid #1f3a1f",
          color: "#3cff3c",
          fontSize: 17,
          fontWeight: 700,
          fontFamily: "monospace",
        }}
      >
        &gt;_
      </div>
    ),
    size
  );
}
