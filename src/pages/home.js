import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";

import Container from "components/container";
import EmphasisLinkButton from "components/emphasislinkbutton";
import MetaHelmet from "components/metahelmet";
import Sponsor from "components/sponsor";
import { config } from "data";
import { useMediaQuery } from "hooks";

const HomeContainer = () => {
  const isMobile = !useMediaQuery("(min-width: 768px)");

  // TODO: descriptions
  return (
    <div className="home">
      <MetaHelmet description="Description" />
      <Box bg="#FCEDF3">
        {!isMobile && (
          <Image
            mx="auto"
            objectFit="fit"
            src={process.env.PUBLIC_URL + "/static/banner.png"}
            alt="ICPC Banner"
            maxHeight="500px"
          />
        )}
        {isMobile && (
          <Image
            mx="auto"
            objectFit="fit"
            src={process.env.PUBLIC_URL + "/static/banner-mobile.png"}
            alt="ICPC Banner"
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
              CodeSprint LA is ACM-ICPC at UCLA's annual beginner-friendly
              algorithms contest.
            </b>{" "}
            Teams of up to 3 participants will compete to write programs to
            solve challenging, out-of-the box algorithms problems, and will be
            ranked by number of problems solved with ties broken by time.
            <br />
            <br />
            This year there will be a{" "}
            <b>Team Round with three separate divisions</b>:
            <List>
              <ListItem>
                <b>&gt; Beginner Division</b>: Beginner Division problems are
                aimed at beginner (including first-time) algorithms contest
                participants. Only UCLA students who participate in person are
                eligible for prizes in this division.
              </ListItem>
              <ListItem>
                <b>&gt; High School Division</b>: High School problems are aimed
                at intermediate to advanced high schoolers with experience in
                competitive programming. Only high schoolers can participate in
                this division.
              </ListItem>
              <ListItem>
                <b>&gt; Open Division</b>: Open Division problems should be
                challenging even for experienced competitors. This year, the
                open division contests will be held online. Links and details
                can be found in the schedule document.
              </ListItem>
            </List>
            <br />
            <b>The prize pool</b> will be a total of <b>$1700</b> USD in
            Amazon.com gift cards. Beginner Division prizes are for UCLA
            students only, while Open Division prizes are open to all Open
            Division participants. There will also be prizes available for top
            performing high schoolers.
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
                "/static/sponsors/Jane_Street_Capital_Logo.svg"
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
