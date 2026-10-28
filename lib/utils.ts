import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Teach tailwind-merge about the custom radius and shadow tokens in globals.css
// so they override, rather than sit alongside, conflicting classes.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      radius: ["section", "card", "button"],
      shadow: ["hairline", "panel", "button"],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
