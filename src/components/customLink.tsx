import { createLink, type LinkComponent } from "@tanstack/react-router";
import type { AnchorHTMLAttributes } from "react";

type CustomLinkComponentProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  underline?: boolean;
};

export const CustomLinkComponent = ({
  underline,
  className,
  ...rest
}: CustomLinkComponentProps) => {
  return (
    <a
      {...rest}
      className={`text-white p-2 ${
        underline ? "bg-[#c30112] rounded-lg" : ""
      } ${className ?? ""}`}
    />
  );
};

export const TanStackLinkComp = createLink(CustomLinkComponent);

export const CustomLink: LinkComponent<typeof TanStackLinkComp> = (props) => {
  return (
    <TanStackLinkComp
      preload="intent"
      activeProps={{
        style: { color: "white" },
        underline: true,
      }}
      {...props}
    />
  );
};