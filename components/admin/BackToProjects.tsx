import Link from "next/link";

export function BackToProjects() {
  return (
    <Link
      href="/admin"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontSize: 15,
        color: "var(--color-accent-700)",
        marginBottom: 20,
      }}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
      All projects
    </Link>
  );
}
