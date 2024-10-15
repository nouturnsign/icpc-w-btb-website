import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Stack, Text } from "@chakra-ui/react";

const PuzzleLink = ({ url, label, description }) => {
  return (
    <Stack direction={["row", "column"]} textAlign="center" w="200px" p={3}>
      <Button
        fontWeight="semibold"
        fontFamily="heading"
        size={["md", "lg"]}
        variant="transparent"
        as="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        _hover={{ color: "off.500" }}
      >
        {label}
        <ExternalLinkIcon mx={1} />
      </Button>
      <Text>{description}</Text>
    </Stack>
  );
};

export default PuzzleLink;
