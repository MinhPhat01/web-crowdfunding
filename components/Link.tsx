import NextLink from "next/link";
import { forwardRef } from "react";
import {
  ElementType,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
} from "react";

import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

type OmitKey = "onMouseEnter" | "onTouchStart" | "onClick" | "href";

type LinkProps = ComponentPropsWithoutRef<typeof NextLink> &
  Omit<MuiLinkProps, OmitKey>;

const Link = forwardRef(function Link<C extends ElementType>(
  props: LinkProps,
  ref?: ComponentPropsWithRef<C>["ref"]
) {
  const {
    as,
    href,
    scroll,
    locale,
    replace,
    shallow,
    passHref = true,
    prefetch,
    onClick,
    onMouseEnter,
    onTouchStart,
    legacyBehavior = true,
    ...restProps
  } = props;

  const isExternal =
    typeof href === "string" && /^(http(?!s)|tel:|mail:)/.test(href);

  if (isExternal) {
    return (
      <MuiLink
        ref={ref}
        href={href}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onTouchStart={onTouchStart}
        {...restProps}
      />
    );
  }

  return (
    <NextLink
      as={as}
      href={href}
      scroll={scroll}
      locale={locale}
      replace={replace}
      shallow={shallow}
      prefetch={prefetch}
      passHref={passHref}
      onMouseEnter={onMouseEnter}
      onTouchStart={onTouchStart}
      legacyBehavior={legacyBehavior}
    >
      <MuiLink {...restProps} onClick={onClick} ref={ref} />
    </NextLink>
  );
});

export default Link;
