import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue, FormErrorMessage, InputRightElement, InputGroup, Tooltip,
} from '@chakra-ui/react';
import useTranslation from "../../utils/hooks/use-translation";
import Link from "../../components/UI/Link";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import Joi from "joi";
import {useState} from "react";
import {ViewIcon, ViewOffIcon} from "@chakra-ui/icons";

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false }})
    .required(),
  password: Joi.string()
    .required()
})

export default function Login() {
  const [ showPassword, setShowPassword ] = useState(false);
  const [ loginFailed, setLoginFailed ] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: joiResolver(schema)
  });

  const t = useTranslation();

  const onSubmit = (data: any) => {
    console.log(data);

    setLoginFailed(true);
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>{t.translate('auth.login.title')}</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            {t.translate('auth.login.subtitle')}
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email" isInvalid={errors.email != null}>
              <FormLabel>{t.translate('common.email')}</FormLabel>
              <Input type="email" {...register('email')} />
              {errors.email &&
                <FormErrorMessage>{t.translate('auth.login.invalid_email')}</FormErrorMessage>
              }
            </FormControl>
            <FormControl id="password" isInvalid={errors.password != null}>
              <FormLabel>{t.translate('common.password')}</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} {...register('password')} />
                <InputRightElement h={'full'}>
                  <Tooltip label={showPassword
                    ? t.translate('common.hide_password')
                    : t.translate('common.show_password')}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </Tooltip>
                </InputRightElement>
              </InputGroup>
              {errors.password &&
                <FormErrorMessage>{t.translate('auth.login.invalid_password')}</FormErrorMessage>
              }
            </FormControl>
            <FormControl isInvalid={loginFailed}>
              <FormErrorMessage>{t.translate('auth.login.invalid_email_or_password')}</FormErrorMessage>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>{t.translate('common.remember_me')}</Checkbox>
                <Link to='/auth/forgot-password' as={Text} color={'green.400'} cursor='pointer'>
                    {t.translate('common.forgot_password')}
                </Link>
              </Stack>
              <Button
                bg={'green.400'}
                color={'white'}
                _hover={{
                  bg: 'green.500',
                }}
                onClick={handleSubmit(onSubmit)}>
                {t.translate('common.sign_in')}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}