import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="bg-panel rounded-xl p-6 shadow-lg hover:shadow-xl transition-all w-full">
      <h2 className="text-xl font-semibold mb-3 text-primary">{title}</h2>
      {children}
    </div>
  );
}
