import {
    Box,
    Flex,
    Text,
    Button,
    Stack,
    HStack,
    VStack,
    Collapse,
    Icon,
    // Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Divider,

} from '@chakra-ui/react';
import {
    ChevronRightIcon,
    SearchIcon
} from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react'

// import { AllRoutes } from '../AllRoutes/AllRoutes';
import { Link } from 'react-router-dom';


<i class="fa-duotone fa-camera-retro" style="color: #1c7ed6;"></i>

export const Navbar = () => {
    return (
        <div>
            {/* <h1>Top Box</h1> */}
            <Box>
                <Flex
                    bg={useColorModeValue('white', 'gray.800')}
                    color={useColorModeValue('gray.600', 'white')}
                    minH={'60px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    align={'center'}>
                    <Flex
                        flex={{ base: 1, md: 'auto' }}
                        ml={{ base: -2 }}
                        display={{ base: 'flex', md: 'none' }}>
                        <IconButton
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>

                    <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                        <Text
                            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                            fontFamily={'heading'}
                            color={useColorModeValue('gray.800', 'white')}>
                            {/* Logo */}
                            <img src='https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png' />
                        </Text>
                        {/* chakra icon */}
                        <Box border={'1px solid grey'} borderRadius={'8px'} marginLeft={'150px'} padding={'0px 0px 0px 10px'} >
                            <input type={'search'} placeholder={'Search for a Category, Brand or Product'} _hover={'none'} border={'none'}>
                            </input>
                            <IconButton
                                color='red'
                                backgroundColor={'white'}
                                aria-label='Search database'
                                icon={<SearchIcon />}
                            />
                        </Box>
                    </Flex>
                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <TopBox />
                    </Flex>
                </Flex>


            </Box>

            {/* <h1>Bottom Box</h1> */}


            <Box
            >
                <Flex
                    bg={useColorModeValue('rgb(255,217,28)', 'gray.800')}
                    color={useColorModeValue('gray.600', 'white')}
                    // minH={'60px'}
                    // py={{ base: 2 }}
                    // px={{ base: 4 }}
                    borderBottom={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    display={'flex'}
                // align={'center'}
                >
                    <Flex
                        flex={{ base: 1, md: 'auto' }}
                        ml={{ base: -2 }}
                        display={{ base: 'flex', md: 'none' }}>
                        <IconButton

                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>
                    <Flex flex={{ base: 1 }} justify={{ base: 'center' }} height="59px" alignItems={'center'}>


                        <Flex display={{ base: 'none', md: 'flex' }}  >
                            <BottomBox />


                        </Flex>


                        <Text
                            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                            fontFamily={'heading'}
                            color={useColorModeValue('gray.800', 'white')}
                            display={'grid'}
                            gridTemplateColumns={'repeat(2,1fr)'}
                            marginLeft={'25px'}
                        >
                            {/*  */}
                            <Box display={"flex"} alignItems={'center'}>
                                <img src="https://cdn.fcglcdn.com/brainbees/images/n/club_logo.png" alt="" />

                            </Box>
                            <img
                                height={'100%'}

                                src='https://cdn.fcglcdn.com/brainbees/banners/FC-menu-carters-logo.webp' alt=''
                            />

                        </Text>

                    </Flex>
                </Flex>
            </Box>
        </div>
    )
}

const TopBox = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('black', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4}>
            {BOTTOM_NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                // p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={400}
                                color={'rgb(144,140,137)'}
                                _hover={{
                                    // textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <TopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>

    )
}


const BottomBox = () => {
    // const linkColor = useColorModeValue('gray.600', 'gray.200');
    // const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'}
            Columns={{ base: 1, sm: 2, md: 2 }}
        >


            {TOP_NAV_ITEMS.map((navItem) => (
                <Link key={navItem.label}
                    href={navItem.href ?? 'girlspage'}
                    _hover={{
                        textDecoration: 'none',

                        alignItems: 'center',
                    }}
                >

                    <Popover
                        trigger={'hover'}
                        placement={'bottom-end'}
                        width={'100%'}
                        border={'1px solid red'}
                    >
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                            // color={linkColor}

                            >
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>


                    </Popover>
                </Link>
            ))}
        </Stack>
    );
};


const TopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
        >
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        // _groupHover={{ color: 'pink.400' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}
                    width={'100px'}>
                    {/* <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} /> */}
                </Flex>
            </Stack>
        </Link>
    );
}

const BottomSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
        >
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'pink.400' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
}



const TOP_NAV_ITEMS = [
    {
        label: 'ALL CATEGORIES',
        href: '/',
    },
    {
        label: 'BOYS FASHION',
        href: '/boysfashion',
    },
    {
        label: 'GIRL FASHION',
        href: '/girlsfashion',
    },
    {
        label: 'FOOTWEAR',
        href: '/footwear',
    },
    {
        label: 'TOYS',
        href: '#',
    },
    {
        label: 'DIAPERING',
        href: '#',
    },
    {
        label: 'GEAR',
        href: '#',
    },
    {
        label: 'FEEDING',
        href: '#',
    },
    {
        label: 'BATH',
        href: '#',
    },
    {
        label: 'NURSERY',
        href: '#',
    },
    {
        label: 'MOMS',
        href: '#',
    },
    {
        label: 'HEALTH',
        href: '#',
    },
    {
        label: 'BOUTIQUES',
        href: '#',
    },
];

const BOTTOM_NAV_ITEMS = [
    {
        label: 'Select Location',
        href: '#',
    },
    {
        label: 'Store & Preschools',
        children: [
            {
                subLabel: 'Find Stores',
                href: '#',
            },
            {
                subLabel: 'Find Preschools',
                href: '#',
            },
            {
                subLabel: 'Open a Stores',
                href: '#',
            },
            {
                subLabel: 'Open a Preschools',
                href: '#',
            },
        ],
    },
    {
        label: 'Support',
        href: '#',
    },
    {
        label: 'Track Order',
        href: '#',
    },
    {
        label: 'FirstCry Parenting',
        href: '#',
    },
    {
        label: 'Login / Register',
        href: '#',
    },
    {
        label: 'Shorlist',
        href: '#',
    },
    {
        label: 'Cart',
        href: '#',
    },

]