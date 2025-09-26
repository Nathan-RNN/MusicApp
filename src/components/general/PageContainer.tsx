"use client";
import React from "react";

export default function PageContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-screen max-w-7xl mx-auto">{children}</div>;
}
