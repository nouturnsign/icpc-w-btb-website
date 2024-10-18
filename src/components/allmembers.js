import { SimpleGrid } from "@chakra-ui/react";

import OneMember from "components/onemember";

const AllMembers = ({ membersData, icpc = false }) => {
  const borderColor = icpc ? "brand.500" : "off.500";

  return (
    <SimpleGrid columns={2}>
      {membersData.map((member, index) => (
        <OneMember
          member={member}
          borderColor={borderColor}
          key={member.name + index}
        />
      ))}
    </SimpleGrid>
  );
};

export default AllMembers;
