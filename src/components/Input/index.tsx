import { forwardRef, ForwardRefRenderFunction } from "react";
import {
  Box,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  type: string;
  name: string;
  placeholder?: string;
  error?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, type, placeholder, error, ...rest },
  ref
) => {
  return (
    <Box display="flex" flexDir="column">
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
      {error && (
        <p style={{ fontSize: "0.7rem", color: "red", marginTop: "0.3rem" }}>
          {error}
        </p>
      )}
    </Box>
  );
};

export const Input = forwardRef(InputBase);
