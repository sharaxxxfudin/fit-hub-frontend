// Init.tsx
import type { PropsWithChildren } from "react";
import { styles } from "./index.css";

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export function Container({ children }: ContainerProps) {
  return <div className={`${styles}`}>{children}</div>;
}
