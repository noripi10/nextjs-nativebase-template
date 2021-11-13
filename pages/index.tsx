import type { NextPage } from "next";
import NextLink from "next/link";
import { AspectRatio, Box, Center, Heading, HStack, Stack, Text, Image, useBreakpointValue, VStack } from "native-base";
import Layout from "../layouts/Layout";
import { useLocale } from "../hooks/useLocale";

const Index: NextPage = () => {
  const { locale } = useLocale();
  const flexDir = useBreakpointValue({
    base: "column",
    md: "row",
  });

  return (
    <Layout hasHeader>
      <Stack flex={1} alignItems="center" justifyContent="flex-start" p="2" width="5/6" mx="auto">
        <HStack flex={1} width="100%">
          <VStack flex={7} width="80%">
            {[...Array(100).keys()].map((x) => (
              <Heading key={x} fontSize={12}>
                test{x}
              </Heading>
            ))}
          </VStack>
          <VStack flex={2} width="10%" padding="2">
            <NextLink href="/slug" locale={locale}>
              <a>
                <Text>go slug</Text>
              </a>
            </NextLink>
          </VStack>
        </HStack>
      </Stack>
    </Layout>
  );
};

export default Index;

/**
         <Box
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
          width="30%"
          minWidth={300}
          maxWidth={480}
          maxHeight={500}
        >
          <Box>
            <AspectRatio ratio={16 / 9}>
              <Image
                source={{
                  uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                }}
                alt="image"
                bgSize="cover"
              />
            </AspectRatio>
            <Center
              bg="violet.500"
              _dark={{
                bg: "violet.400",
              }}
              _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs",
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5"
            >
              PHOTOS
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                The Garden City
              </Heading>
              <Text
                fontSize="xs"
                _light={{
                  color: "violet.500",
                }}
                _dark={{
                  color: "violet.400",
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                The Silicon Valley of India.
              </Text>
            </Stack>
            <Text fontWeight="400" flexWrap="wrap">
              Bengaluru (also called Bangalore) is the center of India&apos;s high-tech industry. The city is also known
              for its parks and nightlife.
            </Text>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                  fontWeight="400"
                >
                  6 mins ago
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
 */
