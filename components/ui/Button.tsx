import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  ...props
}: Readonly<ButtonProps>) {
  const mode = primary ? "btn-primary" : "btn-secondary";
  return href ? (
    <Link
      className={`${mode} ${customClass}`}
      href={href}
      onClick={onClick}
    >
      {label}
    </Link>
  ) : (
    <button
      type='button'
      className={`${mode} ${customClass}`}
      {...props}
    >
      {label}
    </button>
  );
}
