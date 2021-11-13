import { GetStaticPaths, GetStaticProps, NextPage } from "next";

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  console.info({ locales });

  const slugs = ["apple", "google", "facebook"];
  const paths = slugs.map((x) => ({
    params: { id: x },
    locale: "ja",
  }));

  paths.push(...paths.map((y) => ({ ...y, locale: "en" })));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  return {
    props: {
      params,
      locale,
    },
  };
};

type Props = {
  params: { id: string };
  locale: string | undefined;
};

const ID: NextPage<Props> = (props) => {
  return (
    <div>
      <div>{props.params.id}</div>
      <div>{props.locale}</div>
    </div>
  );
};

export default ID;
