import '../styles/globals.css'
//import { StyleSheetManager } from 'styled-components';
import {RecoilRoot} from 'recoil'

function MyApp({ Component, pageProps }) {
  return(
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
      );
}

export default MyApp;
