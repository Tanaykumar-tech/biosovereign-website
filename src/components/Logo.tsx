type LogoProps = {
  className?: string;
};

export default function Logo({ className = '' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 200 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Leaf/sphere mark */}
      <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <path
        d="M20 4 C12 12, 12 28, 20 36 C28 28, 28 12, 20 4 Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M4 20 C12 16, 28 16, 36 20 C28 24, 12 24, 4 20 Z"
        fill="currentColor"
        opacity="0.5"
      />
      {/* Text */}
      <text
        x="46"
        y="18"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="18"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="-0.02em"
      >
        Bio
      </text>
      <text
        x="82"
        y="18"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="18"
        fontWeight="300"
        fill="currentColor"
        letterSpacing="-0.02em"
      >
        Sovereign
      </text>
      <text
        x="46"
        y="32"
        fontFamily="'Inter', sans-serif"
        fontSize="7"
        fontWeight="400"
        fill="currentColor"
        opacity="0.5"
        letterSpacing="0.15em"
      >
        DESIGNING SOVEREIGNTY FOR LIFE
      </text>
    </svg>
  );
}
