import {
  AspectRatio,
  Box,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

import Container from "components/container";
import { members as membersData } from "data";
import MetaHelmet from "components/metahelmet";

const AllMembers = () => {
  return (
    <SimpleGrid
      minChildWidth="300px"
      textAlign="center"
      spacing="16px"
      justifyContent="center"
    >
      {membersData.map((member, index) => (
        <Box key={index} rounded="lg" overflow="hidden" p={2}>
          <center>
            <AspectRatio maxW="152px" ratio={1}>
              <Box
                p="4px"
                rounded="50%"
                borderColor="brand.500"
                borderWidth="8px"
              >
                <Image
                  boxSize="128px"
                  src={
                    process.env.PUBLIC_URL + "/assets/member/" + member.image
                  }
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
      ))}
    </SimpleGrid>
  );
};

const TeamContainer = () => (
  <div className="team">
    <MetaHelmet description="Break the Binary Organizers" />
    <Container narrow>
      <Heading as="h1" fontSize={["2xl", "3xl"]} textAlign="center" py={4}>
        Our Team
      </Heading>
      <Stack pb={10} spacing={10}>
        <AllMembers />
      </Stack>
    </Container>
  </div>
);

export default TeamContainer;
