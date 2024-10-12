import { SimpleGrid } from "@chakra-ui/react";

import OneMember from "components/onemember";

const AllMembers = ({ membersData }) => {
  return (
    <SimpleGrid
      minChildWidth="200px"
      textAlign="center"
      justifyContent="center"
      columns={2}
    >
      {membersData.map((member, index) => (
        <OneMember member={member} index={index} />
      ))}
    </SimpleGrid>
  );
};

export default AllMembers;
