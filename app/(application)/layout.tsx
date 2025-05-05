"use client";
import React from "react";
import PropHeader from "../components/headers/propHeader";
import PropFooter from "../components/footer/propFooter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#101313]">
      <PropHeader />
      {children}
      <PropFooter />
    </div>
  );
}
