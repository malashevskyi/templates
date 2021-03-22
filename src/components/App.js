// @ts-ignore
import { Flex } from '@chakra-ui/react';
// @ts-ignore
import Hello from './Hello';
// @ts-ignore
import smile from '../assets/images/smile.png';

const App = () => {return (
  <Flex
    bg="blue.300"
    minH="100vh"
    align="center"
    justify="center"
    flexDirection="column"
  >
    <Hello imageSrc={smile} />
  </Flex>
)};

export default App;
