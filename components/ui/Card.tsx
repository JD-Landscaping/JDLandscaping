import Link from "next/link";

interface CardProps {
  primary?: boolean;
  even?: boolean;
  url?: string;
  onClick?: () => void;
}

export default function Card({
  primary = true,
  even = true,
  url = "",
  // onClick,
}: Readonly<CardProps>) {
  const mode1 = even ? "testimonial-card-even" : "testimonial-card-odd";
  const mode2 = primary ? "basic-card" : mode1;

  return (
    <div className={`${mode2}`}>
      <Link href={url}>Card</Link>
    </div>
  );
}
