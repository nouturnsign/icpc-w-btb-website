import { Box, Heading, Stack } from "@chakra-ui/react";

import ActBox from "components/actbox";
import Container from "components/container";
import MetaHelmet from "components/metahelmet";
import { acts } from "data";

const PuzzleContainer = () => {
  return (
    <div className="puzzle">
      <MetaHelmet description="Puzzle links." />
      <Box backgroundColor="off.100">
        <Container narrow>
          <Heading as="h1" fontSize={["5xl"]} textAlign="center" py={4}>
            Puzzles
          </Heading>
        </Container>
      </Box>

      <Stack spacing={0}>
        {acts.map((act, index) => {
          return <ActBox act={act} key={"act" + index} />;
        })}
      </Stack>
    </div>
  );
};

export default PuzzleContainer;
