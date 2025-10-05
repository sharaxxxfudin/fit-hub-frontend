// Button.tsx
import { UI } from "./index.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button className={UI} {...props}>
      {children}
    </button>
  );
}
