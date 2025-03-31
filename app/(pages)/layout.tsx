"use client";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-transparent">
      {children}
      {/* <PropFooter /> */}
    </div>
  );
}
