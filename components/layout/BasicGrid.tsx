import React from "react";
interface BasicGridProps {
  children: React.ReactNode;
}
export default function BasicGrid({ children }: Readonly<BasicGridProps>) {
  return <div className='basic-grid'>{children}</div>;
}
