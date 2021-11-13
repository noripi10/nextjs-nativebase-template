import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ColorMode, extendTheme, INativebaseConfig, NativeBaseProvider, NativeBaseProviderProps } from "native-base";
import { Footer } from "../components/footer";
// import { LinearGradient } from "expo-linear-gradient";

// const config = {
//   useSystemColorMode: false,
//   initialColorMode: "dark",
// };
// const customTheme = extendTheme({ config });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider
      // theme={customTheme}
      colorModeManager={{
        get: async () => {
          try {
            let val = sessionStorage.getItem("@color-mode");
            return val === "dark" ? "dark" : "light";
          } catch (e) {
            console.error(e);
            return "dark";
          }
        },
        set: (value: ColorMode) => {
          try {
            sessionStorage.setItem("@color-mode", value ?? "");
          } catch (e) {
            console.error(e);
          }
        },
      }}
    >
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}

export default MyApp;
