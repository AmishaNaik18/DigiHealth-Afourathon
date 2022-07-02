import '../styles/globals.css'
import {SessionProvider} from "next-auth/react"

export default ({ Component, pageProps }) => {
  return (
  <SessionProvider>
    <Component {...pageProps} />
  </SessionProvider>
  );
};