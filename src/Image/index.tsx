import React from "react";
import Image from "next/image";

interface IProps {
  width: number;
  height: number;
  src?: string;
  alt?: string;
}

export default function PlaceholderImage(props: IProps) {
  const customSrc =
    typeof props.src === "undefined" ? "/img-placeholder.png" : props.src;

  return (
    <Image
      src={customSrc}
      width={props.width}
      height={props.height}
      alt={props.alt}
    ></Image>
  );
}
