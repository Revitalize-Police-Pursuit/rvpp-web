import { Box } from "@chakra-ui/react";

import CTASection from "lib/components/helper/CTASection";
import SomeImage from "lib/components/layout/Image";
import SomeText from "lib/components/layout/Text";

const Home = () => {
  return (
    <Box
      display={{ md: "flex" }}
      alignItems="center"
      minHeight="70vh"
      gap={8}
      mb={8}
      w="full"
    >
      <SomeImage />

      <Box>
        <SomeText />
        <CTASection />
      </Box>
    </Box>
  );
};

export default Home;
