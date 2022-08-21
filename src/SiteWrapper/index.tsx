import React from "react";

interface IProps {
  children: JSX.Element;
  head: JSX.Element;
  navbar: JSX.Element;
  footer: JSX.Element;
}

export default function SiteWrapper(props: IProps) {
  return (
    <>
      {props.head}
      {props.navbar}
      <main className="w-screen min-h-screen h-full">{props.children}</main>
      {props.footer}
    </>
  );
}
