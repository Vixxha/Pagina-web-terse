import { Image as ImageIcon } from "lucide-react";

interface PlaceholderProps {
  text?: string;
  className?: string;
  variant?: "light" | "dark" | "yellow";
}

export function Placeholder({ text = "Placeholder", className = "", variant = "light" }: PlaceholderProps) {
  const baseClasses = "flex flex-col items-center justify-center rounded-sm overflow-hidden";
  
  const variants = {
    light: "bg-corporate-gray text-corporate-gray-dark border border-gray-200",
    dark: "bg-corporate-dark text-white border border-gray-800",
    yellow: "bg-corporate-yellow text-corporate-dark border border-corporate-yellow",
  };

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`}>
      <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
      <span className="text-sm font-medium tracking-wide opacity-80 uppercase">{text}</span>
    </div>
  );
}
