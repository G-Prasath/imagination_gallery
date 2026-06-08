export default function Toast({ msg, visible }) {
  return (
    <div className={[
      "fixed bottom-7 left-1/2 z-[9999]",
      "px-7 py-3.5 rounded-full text-sm font-medium text-white whitespace-nowrap",
      "bg-gradient-to-br from-pink-500 to-pink-600",
      "shadow-[0_8px_32px_rgba(232,68,114,0.4)]",
      "transition-transform duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]",
      visible ? "-translate-x-1/2 translate-y-0" : "-translate-x-1/2 translate-y-28",
    ].join(" ")}>
      {msg}
    </div>
  );
}
