import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";

const ResponsiveTwoColumns = ({
  children,
  imgSrc,
  imgAlt,
  reverse = false,
  ...props
}) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      direction={isMobile ? "column" : reverse ? "row-reverse" : "row"}
      align="center"
      justify="space-between"
      {...props}
    >
      <Box flex="1" maxW={isMobile ? "100%" : "50%"} p={4}>
        {children}
      </Box>

      <Box flex="1" maxW={isMobile ? "100%" : "50%"} p={4}>
        <Image src={imgSrc} alt={imgAlt} width="100%" objectFit="cover" />
      </Box>
    </Flex>
  );
};

export default ResponsiveTwoColumns;
