import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-xl bg-blue-600 px-5 py-2.5 text-white font-medium transition hover:bg-blue-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}