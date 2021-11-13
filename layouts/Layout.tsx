import { VFC, ReactNode } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import {
  AspectRatio,
  Box,
  Center,
  Code,
  Heading,
  HStack,
  Stack,
  Text,
  Image,
  useColorMode,
  useColorModeValue,
  Divider,
} from "native-base";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

type Props = {
  children: ReactNode;
  hasHeader?: boolean;
  title?: string;
};

const Layout: VFC<Props> = ({ children, hasHeader = true, title = "NextJs With NativeBase" }: Props) => {
  const bgColor = useColorModeValue("gray.200", "gray.800");
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Box minHeight="100vh" bgColor={bgColor}>
        {hasHeader && <Header />}
        {children}
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
