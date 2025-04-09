interface ButtonProps {
  label: string;
  primary?: boolean;
  onClick?: () => void;
}

export default function Button({
  label,
  primary = true,
  onClick,
}: Readonly<ButtonProps>) {
  const mode = primary ? "btn-primary" : "btn-secondary";
  return (
    <button
      className={`${mode}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
