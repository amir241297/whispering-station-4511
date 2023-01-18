import {
    Box,
    Flex,
    Text,
    // IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react'

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
                            // onClick={onToggle}
                            // icon={
                            //     isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                            // }
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
{/* chakra icon */}                   <IconButton aria-label='Search database'  /* icon={<SearchIcon />} */  />


                        
                    </Flex>
                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                            <TopBox />
                        </Flex>
                    {/* <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}>
                        <Button
                            as={'a'}
                            fontSize={'sm'}
                            fontWeight={400}
                            variant={'link'}
                            href={'#'}>
                            Sign In
                        </Button>
                        <Button
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={'sm'}
                            fontWeight={600}
                            color={'white'}
                            bg={'pink.400'}
                            href={'#'}
                            _hover={{
                                bg: 'pink.300',
                            }}>
                            Sign Up
                        </Button>
                    </Stack> */}
                </Flex>

                {/* <Collapse in={isOpen} animateOpacity>
                    <MobileNav />
                </Collapse> */}
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
                            // onClick={onToggle}
                            // icon={
                            //     isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                            // }
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
                            <img src="https://cdn.fcglcdn.com/brainbees/images/n/club_logo.png" alt="" />
                            <img
                                height={'100%'}

                             src='https://cdn.fcglcdn.com/brainbees/banners/FC-menu-carters-logo.webp' alt='' 
                            />

                        </Text>

                    </Flex>



                    {/* <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}>
                        <Button
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={'sm'}
                            fontWeight={600}
                            color={'white'}
                            bg={'pink.400'}
                            href={'#'}
                            _hover={{
                                bg: 'pink.300',
                            }}>
                            Carter's
                        </Button>
                    </Stack> */}
                </Flex>

                {/* <Collapse in={isOpen} animateOpacity>
                    <MobileNav />
                </Collapse> */}
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
    // const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} 
        
        // spacing={4}
        >
            {TOP_NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label} 
                _hover={{
                    textDecoration: 'none',
                    // color: linkHoverColor,
                    bg:'white',
                    alignItems:'center'
                }}
                >
                    
                    <Popover 
                    trigger={'hover'}
                     placement={'right-start'}
                    >
                        <PopoverTrigger> 
                            <Link
                                // p={2}
                                // href={navItem.href ?? '#'}
                                // fontSize={'sm'}
                                // fontWeight={500}
                                // color={linkColor}
                               
                                >
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                // border={0}
                                // boxShadow={'xl'}
                                // bg={popoverContentBgColor}
                                // p={4}
                                // rounded={'xl'}
                                // minW={'sm'}
                                >
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
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
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
        children: [
            {
                label: 'BOY FASHION',
                subLabel: 'Trending Design to inspire you "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"',
                // href: '#',
            },
            {
                label: 'GIRL FASHION',
                // subLabel: 'Up-and-coming Designers',
                // href: '#',
            },
            {
                label: 'FOOTWEAR',
            },
            {
                label: 'TOYS',
            },
            {
                label: 'DIAPERING',
            },
            {
                label: 'GEAR',
            },
            {
                label: 'NURSERY',
            },
            {
                label: 'MOMS',
            },
            {
                label: 'HEALTH & SAFETY',
            },
            {
                label: 'BOUTIQUES',
            },
            {
                label: "WOMEN'S BEAUTY & CARE",
            },
            {
                label: 'BIRTHDAYS & GIFTS',
            },
            {
                label: "BOOKS & CD'S",
            },
            {
                label: 'SCHOOL SUPPLIES',
            },
            {
                label: 'OFFERS',
            },
            {
                label: 'STORES & PRESCHOOLS',
            },
            {
                label: 'PRESHOOL ADMISSIONS',
            },
        ],
    },
    {
        label: 'BOYS FASHION',
        children: [
            {
                label: 'Job Board',
                subLabel: 'Find your dream design job',
                href: '#',
            },
            {
                label: 'Freelance Projects',
                subLabel: 'An exclusive list for contract work',
                href: '#',
            },
        ],
    },
    {
        label: 'GIRL FASHION',
        children: [
            {
                label: 'Explore Design Work',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
        ],
    },
    {
        label: 'FOOTWEAR',
        children: [
            {
                label: 'Explore Design Work',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
        ],
    },
    {
        label: 'TOYS',
        children: [
            {
                label: 'Explore Design Work',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
        ],
    },
    {
        label: 'DIAPERING',
        children: [
            {
                label: 'Explore Design Work',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
        ],
    },
    {
        label: 'GEAR',
        children: [
            {
                label: 'Explore Design Work',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
        ],
    },
    {
        label: 'FEEDING',
        children: [
            {
                label: 'Explore Design Work',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
        ],
    },
    {
        label: 'BATH',
        children: [
            {
                label: 'Explore Design Work',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
        ],
    },
    {
        label: 'NURSERY',
        children: [
            {
                label: 'Explore Design Work',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
        ],
    },
    {
        label: 'MOMS',
        children: [
            {
                label: 'Explore Design Work',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
        ],
    },
    {
        label: 'HEALTH',
        children: [
            {
                label: 'Explore Design Work',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
        ],
    },
    {
        label: 'BOUTIQUES',
        children: [
            {
                label: 'Explore Design Work',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
        ],
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