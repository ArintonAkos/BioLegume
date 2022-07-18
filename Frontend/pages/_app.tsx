import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import { Box, ChakraProvider } from '@chakra-ui/react'

import en from '../locales/en/common.json'
import ro from '../locales/ro/common.json'
import hu from '../locales/hu/common.json'
import Footer from '../components/UI/Footer'
import withTranslateRoutes from "next-translate-routes"
import store from '../store/store';
import {Provider} from "react-redux";

const messages: any = {
  en,
  ro,
  hu
};

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  return (
    <Provider store={store}>
      <IntlProvider locale={locale!} messages={messages[locale!]}>
        <ChakraProvider>
          <Box w='full' minH='100vh' display='flex' flexDirection='column'>
            <Box flexGrow='1'>
              <Component {...pageProps} />
            </Box>
            <Footer />
          </Box>
        </ChakraProvider>
      </IntlProvider>
    </Provider>
  )
}

export default withTranslateRoutes(MyApp)
