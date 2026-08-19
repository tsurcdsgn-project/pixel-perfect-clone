let value = 0;

export function setScrollVelocity(raw: number, threshold = 28) {
  const v = Math.max(-1, Math.min(1, raw / threshold));
  value = v;
  if (typeof document !== "undefined") {
    document.documentElement.style.setProperty("--scroll-v", v.toFixed(3));
  }
}

export function getScrollVelocity() {
  return value;
}
