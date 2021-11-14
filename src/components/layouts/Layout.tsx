import { VFC, ReactNode } from 'react';
import Head from 'next/head';

import { Box, Stack, useColorModeValue } from 'native-base';
import { Footer } from '../footer';
import { Header } from '../header';

type Props = {
  children: ReactNode;
  hasHeader?: boolean;
  title?: string;
};

const Layout: VFC<Props> = ({ children, hasHeader = true, title = 'NextJs With NativeBase' }: Props) => {
  const bgColor = useColorModeValue('gray.200', 'gray.800');
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Box minHeight='100vh' bgColor={bgColor}>
        {hasHeader && <Header />}
        {children}
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
