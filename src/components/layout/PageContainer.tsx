interface PageContainerProps {
  variant?: "narrow" | "wide" | "reading" | "full";
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<string, string> = {
  narrow: "mx-auto max-w-6xl px-6 pt-4 pb-20",
  wide: "mx-auto max-w-6xl px-6 pt-32 pb-20",
  reading: "mx-auto max-w-3xl px-6 pt-32 pb-20",
  full: "pt-32",
};

export default function PageContainer({
  variant = "narrow",
  children,
  className,
}: PageContainerProps) {
  const baseStyles = variantStyles[variant];

  return (
    <div className={className ? `${baseStyles} ${className}` : baseStyles}>
      {children}
    </div>
  );
}
