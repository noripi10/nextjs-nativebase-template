import NextLink from 'next/link';
import { Box, Center, List, Stack, Text, VStack } from 'native-base';
import { GetStaticProps, GetStaticPropsContext, InferGetServerSidePropsType, NextPage } from 'next';
import { useLocale } from '../../hooks/useLocale';
import Layout from '../../components/layouts/Layout';

type Params = {};

export const getStaticProps = async (context: GetStaticPropsContext<Params>) => {
  return {
    props: {
      slugs: ['apple', 'google', 'facebook'],
    },
  };
};

type Props = InferGetServerSidePropsType<typeof getStaticProps>;

const Index: NextPage<Props> = ({ slugs }) => {
  const { locale } = useLocale();
  return (
    <Layout hasHeader={false}>
      <Stack flex={1} alignItems='center' justifyContent='flex-start' p='2' width='5/6' mx='auto'>
        <VStack flex={1} width='100%' p={8}>
          <List.Ordered>
            {slugs.map((x) => (
              <List.Item key={x} my={2}>
                <NextLink href={`/slug/${x}`} locale={locale}>
                  <a>
                    <Text cursor='pointer'>{x}</Text>
                  </a>
                </NextLink>
              </List.Item>
            ))}
          </List.Ordered>
        </VStack>
      </Stack>
    </Layout>
  );
};

export default Index;
