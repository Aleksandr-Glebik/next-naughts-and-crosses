import { clsx } from "clsx";

type UIBtnSize = "md" | "lg";
type UIBtnVariant = "primary" | "outline";

interface UIButtonProps {
  children: string;
  className?: string;
  size: UIBtnSize;
  variant: UIBtnVariant;
}

export default function UIButton({
  children,
  className = "",
  size,
  variant,
}: UIButtonProps) {
  const buttonClassName = clsx(
    "transition-colors",
    className,
    {
      md: "text-md rounded-md px-6 py-1",
      lg: "text-xl rounded-lg px-8 py-2",
    }[size],
    {
      primary: "text-white border-2 border-solid border-teal-600 bg-teal-600 hover:bg-teal-400 hover:border-teal-400",
      outline:
        "text-teal-400 bg-white border-2 border-solid border-teal-400 hover:text-white hover:bg-teal-400",
    }[variant],
  );

  return (
    <button type="button" className={buttonClassName}>
      {children}
    </button>
  );
}
