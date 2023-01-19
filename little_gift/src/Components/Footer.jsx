import { ReactNode } from 'react';
import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Link,
    VisuallyHidden,
    chakra,
    useColorModeValue,
    Button,
    Divider,
    Heading,
    HStack,
    VStack,
} from '@chakra-ui/react';

import { FaTwitter, FaYoutube, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa'

// import AppStoreBadge from '@/components/AppStoreBadge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';

const ListHeader = ({ children }
    // : { children: ReactNode }
) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

const SocialButton = ({
    children,
    label,
    href,
}
    // : {
    //   children: ReactNode;
    //   label: string;
    //   href: string;
    // }
) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    return (
        <Box
            // border={'3px solid green'}
            bg={useColorModeValue('rgb(217,243,244)')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'95%'} py={10}>
                <SimpleGrid display={'flex'} spacing={8}
                // border={'1px solid red'} 
                >
                    <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}
                        // border={'1px solid black'} 
                        width="70%" fontSize={'12px'}>
                        <Stack align={'flex-start'} >
                            <Heading fontSize={'15px'}>CATEGORIES</Heading>

                            <Divider border={'1px solid rgb(194,193,165)'} ></Divider>

                            <Link href={'#'}>Clothing & Fashion</Link>
                            <Link href={'#'}>Toys</Link>
                            <Link href={'#'}>Books & CDs</Link>
                            <Link href={'#'}>School Supplies</Link>
                            <Link href={'#'}>Baby Diapering</Link>
                            <Link href={'#'}>Feeding & Nursing</Link>
                            <Link href={'#'}>Bath & Skin Care</Link>
                            <Link href={'#'}>Health & Safety</Link>
                            <Link href={'#'}>Baby Gear</Link>
                            <Link href={'#'}>Nursery</Link>
                            <Link href={'#'}>Moms & Maternity</Link>
                            <Link href={'#'}>Gifts</Link>
                            <Link href={'#'}>Preschool Admission</Link>

                            <Heading fontSize={'15px'}>COMPANY INFO </Heading>
                            <Divider border={'0.5px solid rgb(194,193,165)'} ></Divider>

                            <Link href={'#'}>About US</Link>
                            <Link href={'#'}>Contact US</Link>
                            <Link href={'#'}>Brands</Link>
                            <Link href={'#'}>F.A.Q.s</Link>
                            <Link href={'#'}>FirstCry Stores & Playschool</Link>

                        </Stack>

                        <Stack align={'flex-start'}>
                            <Heading fontSize={'15px'}>FIRSTCRY PARENTING</Heading>
                            <Divider border={'0.5px solid rgb(194,193,165)'} ></Divider>

                            <Link href={'#'}>Getting Pregnant</Link>
                            <Link href={'#'}>Pregnant</Link>
                            <Link href={'#'}>Baby</Link>
                            <Link href={'#'}>Toddler</Link>
                            <Link href={'#'}>Preschooler</Link>
                            <Link href={'#'}>Baby Names</Link>
                            <Link href={'#'}>FirstCry Parenting</Link>
                            <Link href={'#'}>Coloring Pages</Link>

                            <Heading fontSize={'15px'}>REGIONAL PARENTING</Heading>
                            <Divider border={'0.5px solid rgb(194,193,165)'} ></Divider>

                            <Link href={'#'}>FirstCry Hindi Parenting</Link>
                            <Link href={'#'}>FirstCry Marathi Parenting</Link>
                            <Link href={'#'}>FistCry Bangla Parenting</Link>
                            <Link href={'#'}>FirstCry UAE Parenting</Link>
                            <Link href={'#'}>FistCry Arabia Parenting</Link>

                            <Heading fontSize={'15px'}>OUR OTHER WEBSITES</Heading>
                            <Divider border={'0.5px solid rgb(194,193,165)'} ></Divider>

                            <Link href={'#'}>GlobalBees Shopping</Link>

                        </Stack>

                        <Stack align={'flex-start'}>
                            <Heading fontSize={'15px'}>SHIPPING & POLICIES</Heading>
                            <Divider border={'0.5px solid rgb(194,193,165)'} ></Divider>

                            <Link href={'#'}>Payments</Link>
                            <Link href={'#'}>Shipping Policy</Link>
                            <Link href={'#'}>Return & Replacement Policy</Link>
                            <Link href={'#'}>Terms of Use</Link>
                            <Link href={'#'}>Privacy Policy</Link>
                            <Link href={'#'}>Next day & Same day delivery</Link>
                            <Link href={'#'}>Responsible Disclousure</Link>

                            <Heading fontSize={'15px'}>PAYMENT METHOD</Heading>
                            <Divider border={'0.5px solid rgb(194,193,165)'} ></Divider>

                            <Link href={'#'}>Credit Cards</Link>
                            <Link href={'#'}>Net Banking</Link>
                            <Link href={'#'}>ATM & Debit Cards</Link>
                            <Link href={'#'}>COD(Cash on Delivery)</Link>
                            <Link href={'#'}>Easy EMI</Link>

                            <Heading fontSize={'15px'}>CONNECT WITH US</Heading>
                            <Divider border={'0.5px solid rgb(194,193,165)'} ></Divider>
                            <Box
                                borderTopWidth={1}
                                borderStyle={'solid'}
                                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                                <Container
                                    as={Stack}
                                    maxW={'6xl'}
                                    py={4}
                                    direction={{ base: 'column', md: 'row' }}
                                    spacing={5}
                                    justify={{ md: 'space-between' }}
                                    align={{ md: 'center' }}>
                                    <Stack direction={'row'} spacing={2}>
                                        <SocialButton label={'Twitter'} href={'#'}>
                                            <FaTwitter />
                                        </SocialButton>
                                        <SocialButton label={'YouTube'} href={'#'}>
                                            <FaYoutube />
                                        </SocialButton>
                                        <SocialButton label={'Instagram'} href={'#'}>
                                            <FaInstagram />
                                        </SocialButton>
                                        <SocialButton label={'Facebook'} href={'#'}>
                                            <FaFacebook></FaFacebook>
                                        </SocialButton>
                                        <SocialButton label={'Linkedin'} href={'#'}>
                                            <FaLinkedin></FaLinkedin>
                                        </SocialButton>
                                    </Stack>
                                </Container>
                            </Box>

                            <Link href={'#'}>Testimonials</Link>
                            <Link href={'#'}>SITEMAP</Link>
                            <Link href={'#'}>CLUB CASH</Link>



                        </Stack>

                        <Stack align={'flex-start'}>
                            <Heading fontSize={'15px'}>OUR APPS</Heading>
                            <Divider border={'0.5px solid rgb(194,193,165)'} ></Divider>

                            <Link href={'#'}>FistCry India: Shopping & Parenting</Link>
                            <Link href={'#'}>FirstCry India: Shopping & Parenting iOS</Link>

                            <Heading fontSize={'15px'}>Learning & Education </Heading>
                            <Divider border={'0.5px solid rgb(194,193,165)'} ></Divider>

                            <Link href={'#'}>Intellikits</Link>
                            <Link href={'#'}>Intellitots</Link>

                            <Heading fontSize={'15px'}>SHOP INTERNATIONAL </Heading>
                            <Divider border={'0.5px solid rgb(194,193,165)'} ></Divider>

                            <Link href={'#'}>FirstCry UAE </Link>
                            <Link href={'#'}>FirstCry KSA</Link>
                            <Link href={'#'}>FirstCry KSA(English)</Link>
                            <Link href={'#'}>FirstCry Arabia:Shopping & Parenting</Link>
                            <Link href={'#'}>FirstCry Arabia: Shopping & Parenting iOS</Link>

                            <Heading fontSize={'15px'}>KIDS LEARNING & EDUCTION </Heading>
                            <Divider border={'0.5px solid rgb(194,193,165)'} ></Divider>

                            <Link href={'#'}>PlayBees: Kids Learning & EDucation App</Link>
                            <Link href={'#'}>PlayBees: 123 Numbers App</Link>
                            <Link href={'#'}>PlayBees: ABC for Kids</Link>


                            <Heading fontSize={'13px'}>CARRER AT FIRSTCRY.COM </Heading>
                            <Divider border={'0.5px solid rgb(194,193,165)'} ></Divider>

                            <Link href={'#'}>Current Openings at FistCry.com</Link>
                            <Link href={'#'}></Link>
                        </Stack>



                    </SimpleGrid>

                    <Stack align={'flex-start'} width={'30%'}>
                        <Box display={'flex'} width={'90%'} >
                            <Box alignItems={'center'} display='flex'>
                                <img width={'100%'}
                                    src="data:image/jpeg;base64,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" />
                            </Box><Box bg={'rgb(255,255,255)'} >
                                <Text fontSize='xs' fontWeight={'bold'}>BECOME OUR FRANCHISE STORE</Text>
                                <Button backgroundColor={'rgb(111,195,65)'} color={'white'} width={'80%'} height={'25px'} fontSize={'12px'}>Know More</Button>
                            </Box>
                        </Box>
                        <img
                            src="https://cdn.fcglcdn.com/brainbees/images/intellitots-franchise-footer-banner.webp" alt="" />
                        {/* <AppStoreBadge /> */}
                        {/* <PlayStoreBadge /> */}
                    </Stack>
                </SimpleGrid>
                {/* <Divider orientation='horizontal' color='black' height={'100%'} /> */}
                <Divider border={'0.5px solid black'} ></Divider>


                <Box
                    // border={'2px solid black'} 
                    // placement={'start'}
                    fontSize={'11px'}>

                    <VStack align={'flex-start'}
                        // display={'flex'}
                        >
                        <Heading

                            // marginLeft={'-1000px'}
                            align={'flex-start'}

                            fontSize={'13px'} >FirstCry India ~ Online Store for Baby & Kids Products</Heading>
                        <VStack>
                            <Text >Explore kids and baby products galore at FirstCry.com, the Big Store for Little Ones. We at FirstCry.com empathize with you as a mother who always aspires to bestow her newborn, infant, baby or kid with the best things even for their smallest needs. That is why, 'Mommy Knows Best'. From breastfeeding to bathing essentials, right furniture to myriad baby care products, a mother needs them all for her lil' one. This inspires us to offer convenient & hassle-free online shopping not just for babies & kids but for moms-to-be & new moms as well.
                            </Text>
                            <Text>
                                With 2 Lakh Baby & Kids Products, 2 Million Happy Customers, and 2 Thousand+ top-notch national and international brands like Babyhug, Chicco, Graco, BSA, Johnson & Johnson, Huggies, Pampers, Medela, Pigeon, Mothercare, Fisher-Price, FunSkool, Lego, Disney, Barbie and more you can look forward to an unparalleled shopping experience with us. Shop for baby & kids products online ranging across diapering, feeding & nursing, skin & health care, baby & kids toys, newborn & infant clothing, baby clothes, kids wear, footwear, fashion accessories, baby gear, nursery, kids furniture, gifts, party supplies, books & CDs, school supplies and more at great discounts.
                            </Text>
                            <Text>
                                With the FirstCry mobile app, now you can shop on the go! Download the FirstCry Android and the iOS app and Voila!
                            </Text>
                        </VStack>
                        <Heading fontSize={'13px'} >
                            Newborn & Baby Products Online Shopping in India
                        </Heading>
                        <Text>
                            Along with all your affection and attention, your little bundle of joy deserves the best when it comes to newborn & baby items. Pamper your lil' one with the widest range of newborn & baby products: right from diapers to potty chairs, onesies to party wear, booties to clogs, carry-cots to baby walkers, rattles to learning toys, FirstCry has it all! FirstCry newborn baby shopping checklist.
                        </Text>

                        <Heading fontSize={'13px'}>Online Shopping for Kids at FirstCry.com</Heading>
                        <Text>
                            Shopping for your kid is no child's play and thus we help you explore, choose and buy from an exhaustive & finest collection of kids' products. FirstCry buying guides, premium store, boutiques, products checklist, and look-books are all aimed towards an enriching and a fulfilling shopping experience. That's what makes us your go-to online store for kids shopping.
                        </Text>

                        <Heading fontSize={'13px'}>FirstCry Parenting</Heading>
                        <Text>
                            With FirstCry Parenting, FirstCry isn’t just about shopping anymore. No matter if you are a first time parent, or it’s you second pregnancy we have you covered. FirstCry Parenting aids you not only as a perplexed parent, but also at each step from Planning to Pregnancy.
                        </Text>
                        <Text>
                            Learn more about the important vaccines for your child from birth to 12 years, the immunization schedule and have it personalized for your child and never miss a vaccine with our timely notifications.
                        </Text>
                        <Text>
                            Worried about your child’s growth? Don’t be! Track your child’s height & weight with our child growth tracker and take proactive steps towards your child’s healthy growth.
                        </Text>
                        <Text>
                            Benefit from expert advice, researched articles, Q&A’s, tools & trackers and tips from fellow parents and simplify your parenting experience with us.
                        </Text>

                        <Heading fontSize={'13px'}>
                            FirstCry Intellikit
                        </Heading>
                        <Text>
                            Keep your little one engaged for hours with this age-appropriate fun with learning activity program. FirstCry Intellikit is designed by developmental experts and toy makers to put together unique themed activities every month! Each box contains activities, a story book, flash cards and so much more!
                        </Text>
                        <Text>
                            With the Intellikit, your child will learn about a vast variety of topics, while enhancing and honing development, all in a fun and interactive way! To see all the past boxes and the current theme, click here.
                        </Text>

                        <Heading fontSize={'13px'}>FirstCry Intellitots Preschool</Heading>

                        <Text>
                            From shopping to parenting reads to activity boxes and now schools, FirstCry covers everything from conception to your baby’s education! FirstCry Intellitots preschools offer children a unique learning experience through hands-on education that covers life-skills and more. Modeled around the SPARKS ™ curriculum, children are exposed to quality education and given individual attention. Learn more about all the exciting things happening at our preschools here.
                        </Text>

                        <Divider></Divider>



                        <Heading fontSize={'13px'}>FirstCry India Offers</Heading>
                        <Text>Satisfaction and Savings come guaranteed with irresistible FirstCry offers & deals on a range of high quality products. These are including but not limited to the FirstCry shopping carnivals, loyalty cash program, app offers, bank & wallet offers, Free @ Three, cashback, Guaranteed savings offers & more.</Text>
                        <Text>To start with, why not grab some great discounts with the FirstCry coupons and buy baby & kids products online from anywhere in India with Free Shipping, Cash On Delivery (COD), Same & Next day delivery & EZ returns options. Happy Shopping!</Text>
                        <VStack>
                            <Text>© 2010-2023  www.FirstCry.com. All rights reserved. This website can be best viewed in resolution width of 1024 and above.</Text>

                        </VStack>
                    </VStack>

                </Box>
            </Container>



        </Box>
    );
}