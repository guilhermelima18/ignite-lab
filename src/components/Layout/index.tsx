import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex w="100%" maxW="1200px" flexDir="column" mx="auto">
      {children}
    </Flex>
  );
};