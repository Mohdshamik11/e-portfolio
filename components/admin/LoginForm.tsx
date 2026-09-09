"use client";

import { useActionState, useState } from "react";
import { loginAction, type LoginState } from "@/app/admin/login/actions";
import { Corners } from "@/components/site/Corners";

const initial: LoginState = {};

export function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, initial);
  const [show, setShow] = useState(false);

  return (
    <form action={formAction} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {state.error && (
        <div
          role="alert"
          style={{
            display: "flex",
            gap: 10,
            alignItems: "flex-start",
            padding: "12px 14px",
            border: "1px solid #b4534c",
            background: "color-mix(in srgb, #b4534c 12%, transparent)",
            animation: "om-shake 420ms ease",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#b4534c"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
            style={{ flex: "none", marginTop: 2 }}
          >
            <path d="M12 8v4 M12 16h.01 M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
          </svg>
          <span style={{ fontSize: 15, lineHeight: 1.45 }}>{state.error}</span>
        </div>
      )}

      <label style={{ display: "block" }}>
        <span className="field-label">Password</span>
        <span style={{ position: "relative", display: "block" }}>
          <input
            className="om-in"
            type={show ? "text" : "password"}
            name="password"
            autoComplete="current-password"
            placeholder="••••••••••"
            required
            autoFocus
            style={{ paddingRight: 48 }}
          />
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            aria-label={show ? "Hide password" : "Show password"}
            style={{
              position: "absolute",
              right: 1,
              top: 1,
              bottom: 1,
              width: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: 0,
              cursor: "pointer",
              color: "color-mix(in srgb, var(--color-text) 55%, transparent)",
            }}
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
            </svg>
          </button>
        </span>
      </label>

      <button
        className="btn btn-primary blueprint"
        type="submit"
        disabled={pending}
        style={{
          width: "100%",
          justifyContent: "center",
          gap: 10,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          padding: 15,
          marginTop: 4,
          position: "relative",
        }}
      >
        <Corners />
        {pending && (
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
            style={{ animation: "om-spin 700ms linear infinite" }}
          >
            <path d="M21 12a9 9 0 1 1-6.2-8.55" />
          </svg>
        )}
        <span>{pending ? "Signing in" : "Sign in"}</span>
      </button>
    </form>
  );
}
