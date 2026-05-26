import React from 'react';

interface DoubleBezelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  outerClassName?: string;
  innerClassName?: string;
}

export function DoubleBezelCard({
  children,
  outerClassName = '',
  innerClassName = '',
  ...props
}: DoubleBezelCardProps) {
  return (
    <div
      className={`double-bezel-outer rounded-[2rem] p-1.5 ${outerClassName}`}
      {...props}
    >
      <div 
        className={`double-bezel-inner rounded-[calc(2rem-0.375rem)] p-6 md:p-8 h-full flex flex-col justify-between ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
