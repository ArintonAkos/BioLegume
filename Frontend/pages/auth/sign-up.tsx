import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue, FormErrorMessage,
} from '@chakra-ui/react';
import { useState } from 'react';
import {ArrowBackIcon, ViewIcon, ViewOffIcon} from '@chakra-ui/icons';
import {useRouter} from "next/router";
import Link from "../../components/UI/Link";
import Joi from "joi";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import useTranslation from "../../utils/hooks/use-translation";

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false }})
    .required(),
  password: Joi.string()
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    .required()
    .min(8)
    .max(16),
  firstName: Joi.string()
    .min(4)
    .max(80),
  lastName: Joi.string()
    .min(4)
    .max(80),
})

export default function SignupCard() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: joiResolver(schema)
  });

  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const t = useTranslation();

  const navigateBack = () => {
    router.back();
  }

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        zIndex={1}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Flex padding='0' direction='column'>
            <Flex direction={'row'}>
              <Button onClick={navigateBack}>
                <ArrowBackIcon />
              </Button>
              <Heading fontSize={'4xl'} textAlign={'center'} flex='1'>
                {t.translate('auth.register.title')}
              </Heading>
              <Box width='48px' />
            </Flex>
            <Stack align='center' pt={4}>
              <Text fontSize={'lg'} color={'gray.600'} m={0} p={0}>
                {t.translate('auth.register.subtitle')}️
              </Text>
            </Stack>
          </Flex>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <Stack spacing={0}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isInvalid={errors.firstName != null} isRequired>
                      <FormLabel>{t.translate('common.first_name')}</FormLabel>
                      <Input type="text" {...register('firstName')} />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName" isInvalid={errors.lastName != null} isRequired>
                      <FormLabel>{t.translate('common.last_name')}</FormLabel>
                      <Input type="text" {...register('lastName')} />
                    </FormControl>
                  </Box>
                </HStack>
                <Flex m={0} p={0}>
                  <Flex flex={1}>
                    <FormControl isInvalid={errors.firstName != null} pl='5px'>
                      {errors.firstName &&
                        <FormErrorMessage m={0} p={0}>{t.translate('auth.register.invalid_first_name')}</FormErrorMessage>
                      }
                    </FormControl>
                  </Flex>
                  <Flex flex={1}>
                    <FormControl isInvalid={errors.lastName != null} pl='5px'>
                      {errors.lastName &&
                        <FormErrorMessage m={0} p={0}>{t.translate('auth.register.invalid_last_name')}</FormErrorMessage>
                      }
                    </FormControl>
                  </Flex>
                </Flex>
              </Stack>
              <FormControl id="email" isRequired isInvalid={errors.email != null}>
                <FormLabel>{t.translate('common.email')}</FormLabel>
                <Input type="email" {...register('email')} />
                {errors.email &&
                  <FormErrorMessage m={0} p={0}>{t.translate('auth.register.invalid_email')}</FormErrorMessage>
                }
              </FormControl>
              <FormControl id="password" isRequired isInvalid={errors.password != null}>
                <FormLabel>{t.translate('common.password')}</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} {...register('password')} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {errors.password &&
                  <FormErrorMessage m={0} p={0}>{t.translate('auth.register.invalid_password')}</FormErrorMessage>
                }
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'green.400'}
                  color={'white'}
                  _hover={{
                    bg: 'green.500',
                  }}
                  onClick={handleSubmit(onSubmit)}>
                  {t.translate('common.sign_up')}
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  {t.translate('auth.register.already_registered')}&nbsp;
                  <Link color={'green.400'} as={Text} to='/auth/login' display='inline' cursor='pointer'>
                    {t.translate('common.login')}
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}