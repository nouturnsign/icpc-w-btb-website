import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import Container from "components/container";
import EmphasisLinkButton from "components/emphasislinkbutton";
import MetaHelmet from "components/metahelmet";
import Schedule from "components/schedule";
import Sponsor from "components/sponsor";
import { config } from "data";
import { useMediaQuery } from "hooks";

const HomeContainer = () => {
  const isMobile = !useMediaQuery("(min-width: 768px)");

  return (
    <div className="home">
      <MetaHelmet description="Break the Binary: ACM ICPC and ACM W's problem-solving extravaganza!" />
      <Box bg="#FCEDF3">
        {!isMobile && (
          <Image
            mx="auto"
            objectFit="fit"
            src={process.env.PUBLIC_URL + "/assets/banner.png"}
            alt="Break the Binary Banner"
            maxHeight="500px"
          />
        )}
        {isMobile && (
          <Image
            mx="auto"
            objectFit="fit"
            src={process.env.PUBLIC_URL + "/assets/banner-mobile.png"}
            alt="Break the Binary Banner"
            width="100%"
          />
        )}
      </Box>

      <Container narrow>
        <Stack p={3} spacing={3} textAlign="right" marginTop="15px">
          <Heading as="h1" fontSize={["2xl", "3xl"]}>
            {config.date}
          </Heading>
          <Heading as="h1" fontSize={["2xl", "3xl"]}>
            <Link href={config.datetimeLink} isExternal>
              {config.time}
              <ExternalLinkIcon mx={1} />
            </Link>
          </Heading>
          <Text textAlign="left" fontSize={["sm", "md"]}>
            <b>
              HEY THERE! Do you love Tom Holland and Zendaya? Do you love
              solving puzzles and winning prizes? If so:
            </b>
            <br />
            🌟🚀🔥 ACM ICPC and ACM W proudly present Break the Binary: Across
            the Spider-Verse! 🕸️🕷️
            <br />
            <br />
            Swing into action with this Spider-Man-themed problem-solving
            extravaganza💫, inspired by everyone's favorite web-slinger. Get
            ready for a day packed with coding challenges 💻💥 and
            multiverse-inspired puzzles 🧩 that will have you thinking like
            Miles Morales in no time! You’ll also have the chance to win cash
            💵, mystery Spider-Verse prizes, and enjoy free food!
            <br />
            <br />
            At Break the Binary, we’re breaking down barriers just like Spidey
            busts through villains 🕷️⚡. Whether you're a seasoned coder or a
            beginner, this is your chance to be a hero, web up some code, and
            champion inclusivity with us! ✨
          </Text>
          <Flex wrap="wrap" justify="center" align="center">
            {config.isInterestOpen && (
              <EmphasisLinkButton
                url={config.interestLink}
                text="Interest Form"
              />
            )}
            {config.isRegistrationOpen && (
              <EmphasisLinkButton
                url={config.registerLink}
                text="Register Now!"
              />
            )}
          </Flex>
        </Stack>
      </Container>

      <Divider p={3} borderColor="brand.500" />

      <Container narrow>
        <Stack p={3} spacing={3} align="center">
          <Heading as="h1">Schedule</Heading>
          <Schedule fontSize={["md", "lg"]} />
        </Stack>
      </Container>

      <Divider p={3} borderColor="brand.500" />

      <Container narrow>
        <Stack p={3} spacing={3} textAlign="center" align="center">
          <Heading as="p">Sponsored by</Heading>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            direction="row"
            maxWidth={isMobile ? null : "850px"}
            wrap="wrap"
          >
            <Sponsor
              sponsor_name="Jane Street"
              external_link="https://www.janestreet.com/"
              img_src={
                process.env.PUBLIC_URL +
                "/assets/sponsors/Jane_Street_Capital_Logo.svg"
              }
            />
          </Flex>
        </Stack>
        <br />
      </Container>
    </div>
  );
};

export default HomeContainer;
