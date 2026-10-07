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
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            color: "var(--color-text-muted)",
          }}
        >
          {t}
          <span
            aria-hidden="true"
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
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
 *  translateX(-50%) loop is seamless. Pauses on hover/focus so it doesn't
 *  run indefinitely with no way to stop it. */
export function Ticker() {
  return (
    <div
      style={{
        marginTop: 48,
        borderTop: "1px solid var(--color-divider)",
        borderBottom: "1px solid var(--color-divider)",
        overflow: "hidden",
        padding: "14px 0",
        maskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div
        data-om-anim="ticker"
        tabIndex={0}
        aria-label="Tools and technologies, scrolling"
        style={{ display: "flex", width: "max-content" }}
      >
        <Row />
        <Row />
      </div>
    </div>
  );
}
