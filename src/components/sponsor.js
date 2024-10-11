import React from "react";
import { Link, Image, useMediaQuery } from "@chakra-ui/react";

const Sponsor = ({ sponsor_name, external_link, img_src }) => {
  const isMobile = !useMediaQuery("(min-width: 768px)");
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
