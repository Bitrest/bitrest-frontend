"use client";
import React from "react";
import PropHeader from "../components/headers/propHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <PropHeader />
      {children}
    </div>
  );
}
