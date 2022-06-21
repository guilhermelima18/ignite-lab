import { ReactNode } from "react";
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {
  children: ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <ChakraButton {...rest}>{children}</ChakraButton>;
};
