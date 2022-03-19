import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";

const supportedChainIds = [4]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId="r3FIReCUqd78bjfOZaP4VZfWNEKgIl2NNlWfZgVm" serverUrl="https://fhpz40ghfyen.usemoralis.com:2053/server">
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
