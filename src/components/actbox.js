import { Box, Heading, Wrap, WrapItem } from "@chakra-ui/react";

import Container from "components/container";
import PuzzleLink from "components/puzzlelink";
import { puzzles } from "data";

const ActBox = ({ act, dark = false }) => {
  return (
    <Box backgroundColor={dark ? "off.100" : "off.50"}>
      <Container narrow>
        <Heading as="h2" textAlign="left" py={4}>
          {act.title}
        </Heading>
        <Wrap direction={["column", "row"]}>
          {puzzles.slice(act.start, act.end).map((puzzle) => {
            return (
              <WrapItem key={puzzle.label}>
                <PuzzleLink
                  url={puzzle.url}
                  label={puzzle.label}
                  description={puzzle.description}
                />
              </WrapItem>
            );
          })}
        </Wrap>
      </Container>
    </Box>
  );
};

export default ActBox;
