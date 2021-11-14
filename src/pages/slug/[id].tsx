import { Center, Flex, Stack, Text, VStack } from 'native-base';
import { GetStaticPaths, GetStaticProps, NextPage, InferGetServerSidePropsType, GetStaticPropsContext } from 'next';
import Layout from '../../components/layouts/Layout';

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  // console.info({ locales });

  const slugs = ['apple', 'google', 'facebook'];
  // const paths = slugs.map((x) => ({ params: { id: x }, locale: 'ja' }));
  // paths.push(...paths.map((y) => ({ ...y, locale: 'en' })));

  const paths = slugs.map((x) => `/slug/${x}`);
  paths.push(
    ...paths.map((x) => {
      return '/en' + x;
    })
  );

  return {
    paths,
    fallback: false,
  };
};

type Params = {
  id: string;
};

export const getStaticProps = async (context: GetStaticPropsContext<Params>) => {
  return {
    props: {
      id: context.params?.id,
      locale: context.locale,
    },
  };
};

type Props = InferGetServerSidePropsType<typeof getStaticProps>;

const ID: NextPage<Props> = (props) => {
  return (
    <Layout hasHeader={false}>
      <Stack flex={1} alignItems='flex-start' justifyContent='flex-start' p='2' width='5/6' mx='auto'>
        <VStack flex={1} p={8}>
          <Text>{props.id}</Text>
          <Text>{props.locale}</Text>
        </VStack>
      </Stack>
    </Layout>
  );
};

export default ID;
