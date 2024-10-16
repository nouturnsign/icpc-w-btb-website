import { Box } from "@chakra-ui/react";

const Container = ({ narrow, children, w, className, my }) => {
  const margin_y = my ? 10 : 0;
  if (narrow) {
    return (
      <Box
        maxWidth={["512px", "768px", "800px", "1000px"]}
        mx="auto"
        my={margin_y}
        px={3}
        w={w ? w : null}
        className={className ? className : null}
      >
        {children}
      </Box>
    );
  }
  return (
    <Box
      maxWidth={["512px", "768px", "800px", "1280px"]}
      mx="auto"
      my={margin_y}
      px={3}
      w={w ? w : null}
      className={className ? className : null}
    >
      {children}
    </Box>
  );
};

export default Container;
