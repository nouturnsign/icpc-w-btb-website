import { Box, Heading, Stack } from "@chakra-ui/react";

import Container from "components/container";
import MetaHelmet from "components/metahelmet";
import PuzzleLink from "components/puzzlelink";

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
        <Box backgroundColor="off.50">
          <Container narrow>
            <Heading as="h2" textAlign="left" py={4}>
              Act I: The New Threat
            </Heading>
            <Stack direction={["column", "row"]}>
              <PuzzleLink
                url="https://www.jigsawexplorer.com/"
                label="Puzzle 1"
                description="Description 1"
              />
              <PuzzleLink
                url="https://www.jigsawexplorer.com/"
                label="Puzzle 2"
                description="Description 2"
              />
            </Stack>
          </Container>
        </Box>

        <Box backgroundColor="off.100">
          <Container narrow>
            <Heading as="h2" textAlign="left" py={4}>
              Act II: Gathering the Team
            </Heading>
            <Stack direction={["column", "row"]}>
              <PuzzleLink
                url="https://www.jigsawexplorer.com/"
                label="Puzzle 3"
                description="Description 3"
              />
              <PuzzleLink
                url="https://www.jigsawexplorer.com/"
                label="Puzzle 4"
                description="Description 4"
              />
            </Stack>
          </Container>
        </Box>

        <Box backgroundColor="off.50">
          <Container narrow>
            <Heading as="h2" textAlign="left" py={4}>
              Act III: The Final Battle
            </Heading>
            <Stack direction={["column", "row"]}>
              <PuzzleLink
                url="https://www.jigsawexplorer.com/"
                label="Puzzle 5"
                description="Description 5"
              />
              <PuzzleLink
                url="https://www.jigsawexplorer.com/"
                label="Puzzle 6"
                description="Description 6"
              />
            </Stack>
          </Container>
        </Box>
      </Stack>
    </div>
  );
};

export default PuzzleContainer;
