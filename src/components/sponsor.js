import { Image, Link } from "@chakra-ui/react";

const Sponsor = ({ sponsor_name, external_link, img_src }) => {
  return (
    <Link href={external_link} isExternal>
      <Image
        alt={"Sponsor logo:" + sponsor_name}
        mx="auto"
        my="10px"
        objectFit="fit"
        src={img_src}
        width="200px"
      />
    </Link>
  );
};

export default Sponsor;
