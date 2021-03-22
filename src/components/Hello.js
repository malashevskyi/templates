import { Heading, Image } from '@chakra-ui/react';

const Hello = ({ imageSrc }) => (
  <>
    <Heading fontSize="100px" color="white">Hello</Heading>
    <Image w="100px" src={imageSrc} alt="smile" />
  </>
);

export default Hello;