import { Box, Heading, SimpleGrid, Stack } from "@chakra-ui/react";

import AllMembers from "components/allmembers";
import Container from "components/container";
import MetaHelmet from "components/metahelmet";
import { icpc_btb_members, w_btb_members, icpc_members, w_members } from "data";

const TeamContainer = () => (
  <div className="team">
    <MetaHelmet description="Break the Binary Organizers" />
    <Container narrow my>
      <Heading as="h1" fontSize={["2xl", "3xl"]} textAlign="center" py={4}>
        Break the Binary Directors
      </Heading>

      <Stack direction="column">
        <AllMembers membersData={icpc_btb_members} icpc />
        <AllMembers membersData={w_btb_members} />
      </Stack>

      <SimpleGrid columns={2}>
        <Box>
          <Heading as="h3" fontSize={["2xl", "3xl"]} textAlign="center" py={4}>
            ICPC Contributors
          </Heading>
          <AllMembers membersData={icpc_members} icpc />
        </Box>
        <Box>
          <Heading as="h3" fontSize={["2xl", "3xl"]} textAlign="center" py={4}>
            W Contributors
          </Heading>
          <AllMembers membersData={w_members} />
        </Box>
      </SimpleGrid>
    </Container>
  </div>
);

export default TeamContainer;
