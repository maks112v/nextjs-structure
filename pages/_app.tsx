import StoreWrapper from '@services/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <StoreWrapper>
      <Component {...pageProps} />
    </StoreWrapper>
  );
}

export default MyApp;
