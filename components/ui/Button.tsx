import Link from "next/link";

interface ButtonProps {
  label: string;
  href?: string;
  primary?: boolean;
  onClick?: () => void;
  customClass?: string;
}

export default function Button({
  label,
  href = "",
  primary = true,
  onClick,
  customClass,
}: Readonly<ButtonProps>) {
  const mode = primary ? "btn-primary" : "btn-secondary";
  return (
    <Link
      className={`${mode} ${customClass}`}
      href={href}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
