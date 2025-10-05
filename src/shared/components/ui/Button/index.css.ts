// Button.css.ts
import { style } from "@vanilla-extract/css";



export const UI = style({
  background: "var(--colors-brand-primary)",
  color: "#000",
  border: 'transparent',
  borderRadius: "8px",
  padding: "16px 16px",
  fontWeight: 600,
  transition: "0.2s",
  selectors: {
    "&:hover": {
      cursor: 'pointer',
      background: "var(--colors-brand-primaryHover)",
    },
  },
});
