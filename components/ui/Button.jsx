import { twMerge } from "tailwind-merge";

export function Button({ className, variant = "primary", ...props }) {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-white text-primary border border-primary hover:bg-gray-50",
    outline: "bg-transparent text-gray-700 border border-gray-200 hover:bg-gray-50",
    dark: "bg-secondary text-white hover:bg-black",
  };

  return (
    <button
      className={twMerge(
        "px-6 py-3 rounded-lg font-semibold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
