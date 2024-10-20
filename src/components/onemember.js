import { AspectRatio, Box, Heading, Image, Text } from "@chakra-ui/react";

const OneMember = ({ member, borderColor }) => {
  return (
    <Box
      rounded="lg"
      overflow="hidden"
      p={2}
      textAlign="center"
      justifyContent="center"
      minWidth="200px"
    >
      <center>
        <AspectRatio maxW="152px" ratio={1}>
          <Box
            p="4px"
            rounded="50%"
            borderColor={borderColor}
            borderWidth="8px"
            overflow="hidden"
          >
            <Image
              boxSize="128px"
              src={process.env.PUBLIC_URL + "/assets/member/" + member.image}
              alt={"Picture of Break the Binary contributor: " + member.name}
              rounded="50%"
              objectFit="cover"
              w="100%"
              h="100%"
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
