"use client";

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
};

export default function FadeIn({ children }: FadeInProps) {
  return <>{children}</>;
}