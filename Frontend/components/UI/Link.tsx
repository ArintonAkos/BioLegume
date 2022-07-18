import {default as NextLink} from "next-translate-routes/link";
import React, {ComponentPropsWithoutRef, ElementType} from "react";
import {Text} from "@chakra-ui/react";

type LinkProps<T extends ElementType = React.ElementType> = {
  children?: React.ReactNode
  to: string
  locale?: string
  key?: string
  as?: T,
  [x:string]: any
}

type Props<T extends ElementType = React.ElementType> = React.PropsWithChildren<
  LinkProps<T>
> &
  Omit<ComponentPropsWithoutRef<T>, keyof LinkProps<T>>;

const Link = <T extends ElementType = React.ElementType>({ ...props }: Props<T>) => {
  const { to, as, children, ...restProps } = props;
  const Component: ElementType = as || Text;

  return (
    // @ts-ignore
    <NextLink href={to}>
      <Component {...restProps}>
        {props.children}
      </Component>
    </NextLink>
  )
}

export default Link;