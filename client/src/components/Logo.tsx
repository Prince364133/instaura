import logoImage from "@/assets/logo.png";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeConfig = {
    sm: { height: "28" },
    md: { height: "36" },
    lg: { height: "56" }
  };

  const { height } = sizeConfig[size];

  return (
    <img
      src={logoImage}
      alt="INSTAURA Logo"
      style={{ height: `${height}px` }}
      className={`object-contain ${className}`}
      data-testid="logo-image"
    />
  );
}
