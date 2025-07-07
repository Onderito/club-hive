import React, { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const variantClass: Record<string, string> = {
  hero: "bg-[#181818] shadow-inner-both rounded-lg",
};

const sizeClasses: Record<string, string> = {
  sm: "max-w-3xs p-4",
  md: "max-w-md p-4",
  lg: "max-w-lg p-8",
};

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  size = "md",
}) => {
  const variantClassName = variantClass.hero || "";
  const sizeClassName = sizeClasses[size] || "";

  return (
    <div className={`${variantClassName} ${sizeClassName} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
