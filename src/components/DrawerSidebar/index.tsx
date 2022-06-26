import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { Sidebar } from "../Sidebar";

type DrawerSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  isCurrentSlug: string;
};

export const DrawerSidebar = ({
  isOpen,
  onClose,
  isCurrentSlug,
}: DrawerSidebarProps) => {
  return (
    <Drawer isOpen={isOpen} placement="right" size="sm" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton color="white" />

        <DrawerBody bg="gray.700">
          <Sidebar isCurrentSlug={isCurrentSlug} isDrawer />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
