import { ticker } from "@/lib/content";

function Row() {
  return (
    <>
      {ticker.map((t, i) => (
        <span
          key={`${t}-${i}`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 26,
            paddingRight: 26,
            fontFamily: "var(--font-heading)",
            fontSize: 15,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            color: "color-mix(in srgb, var(--color-text) 65%, transparent)",
          }}
        >
          {t}
          <span
            style={{
              width: 5,
              height: 5,
              background: "var(--color-accent)",
              display: "block",
              flex: "none",
            }}
          />
        </span>
      ))}
    </>
  );
}

/** Infinite marquee of tools. The list is rendered twice so the CSS
 *  translateX(-50%) loop is seamless. */
export function Ticker() {
  return (
    <div
      style={{
        marginTop: 56,
        borderTop: "1px solid var(--color-divider)",
        borderBottom: "1px solid var(--color-divider)",
        overflow: "hidden",
        padding: "12px 0",
        maskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div
        data-om-anim="ticker"
        style={{
          display: "flex",
          width: "max-content",
          gap: 0,
          animation: "om-marquee 38s linear infinite",
        }}
      >
        <Row />
        <Row />
      </div>
    </div>
  );
}
