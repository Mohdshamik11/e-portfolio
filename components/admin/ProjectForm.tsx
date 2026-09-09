"use client";

import { useActionState, useState } from "react";
import { saveProjectAction, type ProjectFormState } from "@/app/admin/actions";
import { Corners } from "@/components/site/Corners";
import { slugify } from "@/lib/slug";
import type { Project } from "@/lib/types";

const initial: ProjectFormState = {};
const DESC_MAX = 240;

function Label({ children }: { children: React.ReactNode }) {
  return <span className="field-label">{children}</span>;
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <span style={{ display: "block", marginTop: 6, fontSize: 13, color: "#b4534c" }}>
      {message}
    </span>
  );
}

export function ProjectForm({ project }: { project?: Project }) {
  const isEdit = Boolean(project);
  const [state, formAction, pending] = useActionState(saveProjectAction, initial);

  const [title, setTitle] = useState(project?.title ?? "");
  const [slug, setSlug] = useState(project?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(isEdit);
  const [description, setDescription] = useState(project?.description ?? "");
  const [removeImage, setRemoveImage] = useState(false);

  function onTitleChange(value: string) {
    setTitle(value);
    if (!slugTouched) setSlug(slugify(value));
  }

  const errs = state.fieldErrors ?? {};

  return (
    <form action={formAction} style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      {project && <input type="hidden" name="id" value={project.id} />}

      {state.error && (
        <div
          role="alert"
          style={{
            padding: "12px 14px",
            border: "1px solid #b4534c",
            background: "color-mix(in srgb, #b4534c 12%, transparent)",
            fontSize: 15,
          }}
        >
          {state.error}
        </div>
      )}

      <section className="blueprint" style={{ position: "relative", padding: 24 }}>
        <Corners />
        <h2
          style={{
            margin: "0 0 20px",
            fontSize: 13,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--color-accent-700)",
          }}
        >
          01 — Basics
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 18,
          }}
        >
          <label style={{ display: "block", gridColumn: "1 / -1" }}>
            <Label>Project title</Label>
            <input
              className="om-in"
              name="title"
              value={title}
              onChange={(e) => onTitleChange(e.target.value)}
              style={{ fontFamily: "var(--font-heading)", fontSize: 22 }}
              required
            />
            <FieldError message={errs.title} />
          </label>

          <label style={{ display: "block" }}>
            <Label>URL slug</Label>
            <input
              className="om-in"
              name="slug"
              value={slug}
              onChange={(e) => {
                setSlug(e.target.value);
                setSlugTouched(true);
              }}
              placeholder="auto from title"
            />
            <FieldError message={errs.slug} />
          </label>

          <label style={{ display: "block" }}>
            <Label>Date completed</Label>
            <input
              className="om-in"
              type="date"
              name="dateCompleted"
              defaultValue={project?.dateCompleted ?? ""}
            />
          </label>

          <label style={{ display: "block", gridColumn: "1 / -1" }}>
            <Label>Card summary</Label>
            <textarea
              className="om-in"
              name="description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={DESC_MAX}
              required
            />
            <span
              style={{
                display: "block",
                marginTop: 6,
                fontSize: 13,
                color: "color-mix(in srgb, var(--color-text) 48%, transparent)",
              }}
            >
              {description.length} / {DESC_MAX} characters — shown on the projects grid.
            </span>
            <FieldError message={errs.description} />
          </label>

          <label style={{ display: "block", gridColumn: "1 / -1" }}>
            <Label>Tech stack</Label>
            <input
              className="om-in"
              name="techStack"
              defaultValue={project?.techStack.join(", ") ?? ""}
              placeholder="PyTorch, CNN, Streamlit"
            />
            <span
              style={{
                display: "block",
                marginTop: 6,
                fontSize: 13,
                color: "color-mix(in srgb, var(--color-text) 48%, transparent)",
              }}
            >
              Comma-separated.
            </span>
          </label>
        </div>
      </section>

      <section className="blueprint" style={{ position: "relative", padding: 24 }}>
        <Corners />
        <h2
          style={{
            margin: "0 0 20px",
            fontSize: 13,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--color-accent-700)",
          }}
        >
          02 — Image
        </h2>

        {project?.imageUrl && !removeImage && (
          <div style={{ marginBottom: 14 }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- admin preview only */}
            <img
              src={project.imageUrl}
              alt=""
              style={{
                width: "100%",
                maxWidth: 320,
                aspectRatio: "16 / 10",
                objectFit: "cover",
                border: "1px solid var(--color-divider)",
              }}
            />
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginTop: 8,
                fontSize: 15,
              }}
            >
              <input
                type="checkbox"
                name="removeImage"
                onChange={(e) => setRemoveImage(e.target.checked)}
                style={{ accentColor: "var(--color-accent)" }}
              />
              Remove current image
            </label>
          </div>
        )}

        <label style={{ display: "block" }}>
          <Label>{project?.imageUrl ? "Replace image" : "Upload image"}</Label>
          <input
            type="file"
            name="image"
            accept="image/png,image/jpeg,image/webp"
            style={{ fontSize: 15 }}
          />
          <span
            style={{
              display: "block",
              marginTop: 6,
              fontSize: 13,
              color: "color-mix(in srgb, var(--color-text) 48%, transparent)",
            }}
          >
            PNG / JPG / WebP, up to 5 MB. Optional.
          </span>
        </label>
      </section>

      <section className="blueprint" style={{ position: "relative", padding: 24 }}>
        <Corners />
        <h2
          style={{
            margin: "0 0 20px",
            fontSize: 13,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--color-accent-700)",
          }}
        >
          03 — Links &amp; visibility
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 18,
          }}
        >
          <label style={{ display: "block" }}>
            <Label>Repository URL</Label>
            <input
              className="om-in"
              name="githubUrl"
              defaultValue={project?.githubUrl ?? ""}
              placeholder="github.com/you/project"
            />
          </label>
          <label style={{ display: "block" }}>
            <Label>Live demo URL</Label>
            <input
              className="om-in"
              name="liveUrl"
              defaultValue={project?.liveUrl ?? ""}
              placeholder="example.com"
            />
          </label>
        </div>

        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginTop: 18,
            fontSize: 16,
          }}
        >
          <input
            type="checkbox"
            name="featured"
            defaultChecked={project?.badge === "Featured"}
            style={{ width: 17, height: 17, accentColor: "var(--color-accent)" }}
          />
          Featured — shows a badge on the card
        </label>
      </section>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        <button
          className="btn btn-primary blueprint"
          type="submit"
          disabled={pending}
          style={{
            position: "relative",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            padding: "11px 20px",
          }}
        >
          <Corners />
          {pending ? "Saving…" : isEdit ? "Save changes" : "Add project"}
        </button>
        <a href="/admin" className="btn btn-ghost" style={{ fontSize: 15 }}>
          Cancel
        </a>
      </div>
    </form>
  );
}
