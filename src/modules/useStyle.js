import { computed } from "vue";

export default function(style, shadows) {
  return computed(() => {
    let result = [];
    for (const [key, value] of Object.entries(style.s)) {
      if ((value === 0 && key !== "transition-duration") || value === null) continue;
      if (key === "color" || key === "background-color" || key === "border-color") {
        result.push(key + ": #" + value + ";");
      } else if (key === "transition-duration" || key === "transition-delay") {
        result.push(key + ": " + value / 10 + "s;");
      } else {
        result.push(key + ": " + value + (typeof value === "number" ? "px" : "") + ";");
      }
    }
    if (shadows.s[0] || shadows.s[1] || shadows.s[2] || shadows.s[3]) {
      const shadowStyles = `${shadows.s[0]}px ${shadows.s[1]}px ${shadows.s[2]}px ${
        shadows.s[3]
      }px rgba(${shadows.s[4].r},${shadows.s[4].g},${shadows.s[4].b},${shadows.s[5] / 100})`;
      result.push("box-shadow: " + shadowStyles);
    }

    return result;
  });
}
