import { AspectRatio, Box, useMediaQuery } from "@chakra-ui/react";
import { Player, Youtube, DefaultUi } from "@vime/react";
import "@vime/core/themes/default.css";

type BoxVideoProps = {
  videoId: string;
};

export const BoxVideo = ({ videoId }: BoxVideoProps) => {
  const [isLessThan600] = useMediaQuery("(max-width: 600px)");

  return (
    <AspectRatio ratio={16 / 9}>
      <Box w={isLessThan600 ? "80%" : "100%"} maxW="1100px" h="100%">
        <Player style={{ width: "100%" }}>
          <Youtube videoId={videoId} />
          <DefaultUi />
        </Player>
      </Box>
    </AspectRatio>
  );
};
