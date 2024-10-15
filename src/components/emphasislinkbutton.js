import { Button } from "@chakra-ui/react";

const EmphasisLinkButton = ({ url, text }) => {
  return (
    <Button
      m={3}
      fontSize={["1xl", "2xl"]}
      colorScheme="brand"
      variant="outline"
      as="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      size="md"
    >
      {text}
    </Button>
  );
};

export default EmphasisLinkButton;
