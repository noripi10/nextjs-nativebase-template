import NextLink from "next/link";
import { Center, Text } from "native-base";
import { GetStaticProps, NextPage } from "next";
import { useLocale } from "../../hooks/useLocale";
import Layout from "../../layouts/Layout";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      params: ["apple", "google", "facebook"],
    },
  };
};

type Props = {
  params: Array<string>;
};

const Index: NextPage<Props> = ({ params }) => {
  const { locale } = useLocale();
  return (
    <Layout hasHeader={false}>
      <Center flex={1}>
        {params.map((x) => (
          <NextLink key={x} href={`/slug/${x}`} locale={locale}>
            <a>
              <Text>{x}</Text>
            </a>
          </NextLink>
        ))}
      </Center>
    </Layout>
  );
};

export default Index;
