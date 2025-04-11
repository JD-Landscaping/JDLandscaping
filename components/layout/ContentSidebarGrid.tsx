import React from "react";
interface ContentSidebarGridProps {
  children: React.ReactNode;
}

export default function ContentSidebarGrid({
  children,
}: Readonly<ContentSidebarGridProps>) {
  return <div className='content-sidebar-grid'>{children}</div>;
}
