import {
  Box,
  Heading,
  HStack,
  Stack,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import AllMembers from "components/allmembers";
import Container from "components/container";
import MetaHelmet from "components/metahelmet";
import OneMember from "components/onemember";
import { icpc_btb_members, w_btb_members, icpc_members, w_members } from "data";

const TeamContainer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <div className="team">
      <MetaHelmet description="Break the Binary Organizers" />
      <Container narrow my>
        <Heading as="h1" fontSize={["2xl", "3xl"]} textAlign="center" py={4}>
          Break the Binary Directors
        </Heading>

        {isMobile ? (
          <>
            <AllMembers membersData={icpc_btb_members} icpc />
            <AllMembers membersData={w_btb_members} />
          </>
        ) : (
          <VStack>
            <HStack>
              <OneMember
                member={icpc_btb_members[0]}
                borderColor="brand.500"
                index="-1"
              />
              <OneMember
                member={w_btb_members[0]}
                borderColor="off.500"
                index="-2"
              />
            </HStack>

            <HStack>
              <OneMember
                member={w_btb_members[1]}
                borderColor="off.500"
                index="-3"
              />
              <OneMember
                member={icpc_btb_members[1]}
                borderColor="brand.500"
                index="-4"
              />
              <OneMember
                member={w_btb_members[2]}
                borderColor="off.500"
                index="-5"
              />
            </HStack>
          </VStack>
        )}

        <Stack direction={["column", "row"]}>
          <Box>
            <Heading
              as="h3"
              fontSize={["2xl", "3xl"]}
              textAlign="center"
              py={4}
            >
              ICPC Contributors
            </Heading>
            <AllMembers membersData={icpc_members} icpc />
          </Box>
          <Box>
            <Heading
              as="h3"
              fontSize={["2xl", "3xl"]}
              textAlign="center"
              py={4}
            >
              W Contributors
            </Heading>
            <AllMembers membersData={w_members} />
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default TeamContainer;
