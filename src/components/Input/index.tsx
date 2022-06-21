import { forwardRef, ForwardRefRenderFunction } from "react";
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  type: string;
  name: string;
  placeholder?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, type, placeholder, ...rest },
  ref
) => {
  return (
    <ChakraInput
      type={type}
      name={name}
      placeholder={placeholder}
      fontSize="0.9rem"
      border="0"
      borderColor="none"
      outline="none"
      _focus={{ border: "2px solid", borderColor: "#00B37E" }}
      ref={ref}
      {...rest}
    />
  );
};

export const Input = forwardRef(InputBase);
