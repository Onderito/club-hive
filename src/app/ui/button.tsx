import React, { ReactNode } from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  onClick?: () => void; // Optional click handler
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};

const variantClass: Record<string, string> = {
  primary:
    "bg-[#585bff] text-white font-montserrat shadow-inner-both rounded-lg shadow-md font-bold",
  secondary:
    "text-white border-1 border-white font-montserrat font-bold rounded-md",
};

const sizeClasses: Record<string, string> = {
  sm: "px-2 py-1 text-xs md:px-3 md:py-1.5 md:text-sm lg:px-4 lg:py-2 lg:text-base",
  md: "px-4 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg",
  lg: "px-5 py-2.5 text-base md:px-7 md:py-3.5 md:text-lg lg:px-9 lg:py-4.5 lg:text-xl",
  xl: "px-6 py-3 text-base md:px-8 md:py-4 md:text-lg lg:px-10 lg:py-5 lg:text-xl",
};

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
  className = "",
  variant = "primary",
  size = "md",
}) => {
  const variantClassName = variantClass[variant] || "";
  const sizeClassName = sizeClasses[size] || "";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variantClassName} ${sizeClassName} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
