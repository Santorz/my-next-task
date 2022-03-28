import { FC, useContext } from 'react';
import {
  Flex,
  Box,
  VStack,
  HStack,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
import { UserLoginStateContext } from '../general/UserLoginState';
import { decryptWithoutUserData } from '../../utils/crypto-js-utils';
import CustomLink from '../general/CustomLink';

const Hero: FC = () => {
  // Hooks
  const firstBgColor = useColorModeValue(
    '/media/hero-gb-light.svg',
    '/media/hero-gb-dark.svg'
  );
  const brandColor = useColorModeValue('brand.500', 'brand.100');
  const bodyBgColor = useColorModeValue('gray.50', '#111111');
  const inversePrimaryColor = useColorModeValue('gray.50', 'black');
  const primaryColor = useColorModeValue('black', 'gray.50');
  const { encLoggedInString } = useContext(UserLoginStateContext);
  const isUserLoggedInDecrypted =
    decryptWithoutUserData(encLoggedInString) === 'true';

  // Main JSX
  return (
    <Flex
      px={['2', '3', '4', '4', '8']}
      direction={{ base: 'column', md: 'row' }}
      as='main'
      maxW='full'
    >
      {/* Hero text */}
      <Box
        as='section'
        backgroundSize='cover'
        w='full'
        backgroundImage={firstBgColor}
        backgroundPosition='center'
      >
        <VStack
          spacing={{ base: '5', md: '7' }}
          h='full'
          align='left'
          pt={{ base: '4', sm: '5', lg: '12', xl: '14' }}
          userSelect='none'
        >
          <Heading as='h1' fontSize='3rem' maxW='30rem'>
            Organize and manage your tasks with ease
          </Heading>

          <VStack
            spacing='10'
            w='full'
            as='article'
            align='left'
            transition='background-color .2s ease'
            bgColor={bodyBgColor}
          >
            <Heading
              as='h3'
              lineHeight='2.5rem'
              size='md'
              maxW='22.5rem'
              fontWeight='normal'
              fontFamily='body'
            >
              Get all your task planning done in one place. We offer you a
              stress-free and reliable way to do it.
            </Heading>
          </VStack>

          <HStack
            transition='background-color .2s ease'
            bgColor={bodyBgColor}
            py='2'
            spacing='7'
          >
            {/* If user is logged in */}
            {isUserLoggedInDecrypted && (
              <CustomLink
                color={inversePrimaryColor}
                href='/dashboard'
                px='5'
                py='2.5'
                fontSize='lg'
                fontWeight='bold'
                rounded='3xl'
                bgColor={brandColor}
              >
                Visit Dashboard
              </CustomLink>
            )}

            {/* If user is logged out*/}
            {!isUserLoggedInDecrypted && (
              <>
                <CustomLink
                  color={inversePrimaryColor}
                  href='/signup'
                  px='5'
                  py='2.5'
                  fontSize='lg'
                  fontWeight='bold'
                  rounded='3xl'
                  bgColor={brandColor}
                >
                  Get Started
                </CustomLink>
                {/*  */}
                <CustomLink
                  color={primaryColor}
                  href='/login'
                  px='5'
                  py='2.5'
                  fontSize='lg'
                  fontWeight='bold'
                  rounded='full'
                  border='2px solid'
                  borderColor={brandColor}
                >
                  Log in
                </CustomLink>
              </>
            )}
          </HStack>
          {/*  */}
        </VStack>
      </Box>
      {/* End of Hero text */}

      {/* Hero Animation */}
      <Box as='section' minH='40rem' w='full'></Box>
    </Flex>
  );
};

export default Hero;