/**
 * The four registration marks drawn just outside a `.blueprint` box.
 * Styling lives in globals.css under `.blueprint > .corner`.
 */
export function Corners() {
  return (
    <>
      <i className="corner tl" />
      <i className="corner tr" />
      <i className="corner bl" />
      <i className="corner br" />
    </>
  );
}
