import { AspectRatio, Box } from "@chakra-ui/react";
import { Player, Youtube, DefaultUi } from "@vime/react";
import "@vime/core/themes/default.css";

type BoxVideoProps = {
  videoId: string;
};

export const BoxVideo = ({ videoId }: BoxVideoProps) => {
  return (
    <AspectRatio ratio={16 / 9}>
      <Box bg="gray.800" w="100%" maxW="1100px" h="100%" maxH="60vh">
        <Player style={{ width: "100%" }}>
          <Youtube videoId={videoId} />
          <DefaultUi />
        </Player>
      </Box>
    </AspectRatio>
  );
};
