"use client";

import { deleteProjectAction } from "@/app/admin/actions";

export function DeleteProjectButton({ id, title }: { id: string; title: string }) {
  return (
    <form
      action={deleteProjectAction}
      onSubmit={(e) => {
        if (!window.confirm(`Delete "${title}"? This cannot be undone.`)) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="btn btn-ghost"
        style={{ fontSize: 15, color: "#b4534c" }}
      >
        Delete
      </button>
    </form>
  );
}
