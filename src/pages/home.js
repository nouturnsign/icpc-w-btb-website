import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import Container from "components/container";
import EmphasisLinkButton from "components/emphasislinkbutton";
import MetaHelmet from "components/metahelmet";
import ResponsiveTwoColumns from "components/responsivetwocolumns";
import Schedule from "components/schedule";
import Sponsor from "components/sponsor";
import { config } from "data";

const HomeContainer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

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

      <Stack spacing={0} textAlign="left">
        <Box backgroundColor="brand.100" textAlign="right">
          <Container narrow my>
            <Heading as="h1" fontSize={["2xl", "3xl"]}>
              {config.date}
            </Heading>
            <Heading as="h1" fontSize={["2xl", "3xl"]}>
              <Link href={config.datetimeLink} isExternal>
                {config.time}
                <ExternalLinkIcon mx={1} />
              </Link>
            </Heading>

            <Text textAlign="left" fontSize={["sm", "md"]} mx={10}>
              <Heading>HEY THERE!</Heading>
              Do you love Tom Holland and Zendaya? Do you love solving puzzles
              and winning prizes? If so:
              <br />
              🌟🚀🔥 ACM ICPC and ACM W proudly present{" "}
              <b> Break the Binary: Across the Spider-Verse! </b> 🕸️🕷️
            </Text>

            <Flex wrap="wrap" justify="center" align="center">
              {config.isInterestPublished && (
                <EmphasisLinkButton
                  url={config.interestLink}
                  text="Interest Form"
                />
              )}
              {config.isRegistrationPublished && (
                <EmphasisLinkButton
                  url={config.registerLink}
                  text="Register Now!"
                />
              )}
            </Flex>
          </Container>
        </Box>

        <Box backgroundColor="brand.50">
          <Container narrow my>
            <ResponsiveTwoColumns
              imgSrc={process.env.PUBLIC_URL + "/assets/photos/solving.jpg"}
              imgAlt="Three gruops of students are solving puzzles at Break the
                  Binary. There are three to five students per group, and they
                  appear to be thinking."
            >
              <Text textAlign="left" fontSize={["sm", "md"]}>
                <Heading>Puzzle Hunt!</Heading>
                <br />
                Swing into action with this Spider-Man-themed problem-solving
                extravaganza💫, inspired by everyone's favorite web-slinger. Get
                ready for a day packed with coding challenges 💻💥 and
                multiverse-inspired puzzles 🧩 that will have you thinking like
                Miles Morales in no time! You’ll also have the chance to win
                cash 💵, mystery Spider-Verse prizes, and enjoy free food!
              </Text>
            </ResponsiveTwoColumns>
          </Container>
        </Box>

        <Box backgroundColor="brand.100">
          <Container narrow my>
            <ResponsiveTwoColumns
              imgSrc={process.env.PUBLIC_URL + "/assets/photos/panel.jpg"}
              imgAlt="Students sit at tables enjoying lunch while panelists
                  including Dr. Smallberg answer questions."
              reverse
            >
              <Text textAlign="left" fontSize={["sm", "md"]}>
                <Heading>Networking</Heading>
                <br />
                At Break the Binary, we're breaking down barriers just like
                Spidey busts through villains 🕷️⚡. Whether you're a seasoned
                coder or a beginner, this is your chance to be a hero, web up
                some code, and champion inclusivity with us! ✨
              </Text>
            </ResponsiveTwoColumns>
          </Container>
        </Box>

        <Box backgroundColor="brand.50">
          <Container narrow my>
            <Stack p={3} spacing={3} align="center">
              <Heading as="h1">Schedule</Heading>
              <Schedule fontSize={["md", "lg"]} />
            </Stack>
          </Container>
        </Box>

        <Box backgroundColor="brand.100">
          <Container narrow my>
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
        </Box>
      </Stack>
    </div>
  );
};

export default HomeContainer;
