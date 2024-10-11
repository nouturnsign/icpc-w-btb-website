import { Button, Link } from "@chakra-ui/react";

const EmphasisLinkButton = ({ url, text }) => {
  return (
    <Link to={url} target="_blank" rel="noopener noreferrer">
      <Button
        m={3}
        fontSize={["1xl", "2xl"]}
        colorScheme="brand"
        variant="outline"
      >
        {text}
      </Button>
    </Link>
  );
};

export default EmphasisLinkButton;
