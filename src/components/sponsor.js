import { Image, Link, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const Sponsor = ({ sponsor_name, external_link, img_src }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Link href={external_link} isExternal>
      <Image
        alt={sponsor_name}
        mx="auto"
        my="10px"
        objectFit="fit"
        src={img_src}
        width={isMobile ? "80%" : "200px"}
      />
    </Link>
  );
};

export default Sponsor;
