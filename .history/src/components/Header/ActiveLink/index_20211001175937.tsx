import { cloneElement, ReactElement } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface ActiveProps {
  children: ReactElement;
  href: string;
}

export default function ActiveLink({ children, ...rest }: ActiveProps) {
  const { asPath } = useRouter();
  const className = asPath === rest.href ? "active" : "";
  return <Link {...rest}>{cloneElement(children, { className })}</Link>;
}
