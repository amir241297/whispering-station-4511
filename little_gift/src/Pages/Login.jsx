import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useReducer } from 'react';


const initialState = {
    email: '',
    password: ''
}
const reducer = (state, action) => {
    // console.log(action)
    switch (action.type) {
        case "FIELD": return { ...state, [action.fieldName]: action.payload }
        default:
            return state
    }

}
export const Login=()=> {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handlesubmit = () => {
        console.log(state)
    }
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <img src='https://cdn.fcglcdn.com/brainbees/images/n/fc-logo-s.jpg' alt=' ' />

                    <Text fontSize={'lg'} color={'gray.600'}>
                    Sign in to your account <Link color={'blue.400'}></Link> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" onChange={(e) => dispatch({ type: 'FIELD', fieldName: 'email', payload: e.target.value })} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" onChange={(e) => dispatch({ type: 'FIELD', fieldName: 'password', payload: e.target.value })} />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'blue.400'}>Forgot password?</Link>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                onClick={handlesubmit}

                            >
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}