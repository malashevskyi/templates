import { render } from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import App from './components/App';

import '@styles/fonts.css';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'PTSans'
      },
    },
  },
});

render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
