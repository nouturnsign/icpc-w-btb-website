import { AspectRatio, Box, Heading, Image, Text } from "@chakra-ui/react";

const OneMember = ({ member, borderColor, index }) => {
  return (
    <Box key={index} rounded="lg" overflow="hidden" p={2}>
      <center>
        <AspectRatio maxW="152px" ratio={1}>
          <Box
            p="4px"
            rounded="50%"
            borderColor={borderColor}
            borderWidth="8px"
          >
            <Image
              boxSize="128px"
              src={process.env.PUBLIC_URL + "/assets/member/" + member.image}
              rounded="50%"
            />
          </Box>
        </AspectRatio>
      </center>
      <Heading as="h4" fontSize={["md", "lg"]} mt={2}>
        {member.name}
      </Heading>
      <Text fontSize={["sm", "md"]} mt={2}>
        {member.position}
      </Text>
    </Box>
  );
};

export default OneMember;
