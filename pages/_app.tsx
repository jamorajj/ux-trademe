import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useThemeStore } from "../state/state";
import { Toaster } from "react-hot-toast";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div data-theme={theme} className="min-h-screen">
      <Toaster />
      <div className="container mx-auto px-4 py-2">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
