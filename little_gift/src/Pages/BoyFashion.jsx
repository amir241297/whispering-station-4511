import { Box, Heading, Text, Card, CardBody, Image, Stack, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { Carousel } from '../Components/Carousel'
import Footer from '../Components/Footer'
import { Navbar } from '../Components/Navbar'
import { boyfashion } from '../Api/GetData'
import { useEffect, useState } from 'react'
import { Sidebar } from '../Components/Sidebar'


export const BoyFashion = () => {
    const [data, setData] = useState([])
    const getData = () => {
        boyfashion()
            .then((res) => { setData(res.data) })
            .catch((error) => { console.log(error) })
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <Box>
            <Navbar />

            <Text color={'rgba(87,87,87)'} fontSize={'25px'} fontWeight={'500'}>BABY CLOTHES AND FASHION</Text>
            <Divider marginBottom={'20px'} />
            <Carousel />


            <Box width={'85%'} margin={'auto'} >
                <Box>
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/boy_2_4y_wedding_fashion_02.jpg"></img>
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/boy_2_4y_wedding_fashion_03.jpg" alt="" />
                    <img src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/boy_2_4y_wedding_fashion_04.jpg' />
                </Box>
                <img src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/boy_2_4y_wedding_fashion_01.jpg' />

                <Box width={'100%'} margin={'auto'} display={'flex'}>
                <Sidebar maginRight={'5px'}padding={'25px 2px 0px 0px'} />

                    
                    <Box  >
                        <Text color={'rgba(87,87,87)'} fontSize={'25px'} fontWeight={'500'}>More Products for you to Explore</Text>
                        <Box display={'grid'} gridTemplateColumns={'repeat(3,1fr)'} gap={'20px'}>
                            {
                                data.map(({ aurthor, title, price }) => (
                                    <Card maxW='sm'>
                                        <CardBody>
                                            <Image
                                                src={aurthor}
                                                borderRadius='lg'
                                            />
                                            <Stack mt='6' spacing='3'>
                                                <Text fontWeight={'500'} >{title}</Text>
                                                <Text color='blue.600' fontSize='2xl'>
                                                    ${price}
                                                </Text>
                                            </Stack>
                                        </CardBody>
                                        <Divider />
                                        <CardFooter>
                                            <ButtonGroup spacing='2'>
                                                <Button variant='solid' colorScheme='blue'>
                                                    Buy now
                                                </Button>
                                                <Button variant='ghost' colorScheme='blue'>
                                                    Add to cart
                                                </Button>
                                            </ButtonGroup>
                                        </CardFooter>
                                    </Card>
                                ))
                            }

                        </Box>
                    </Box>
                </Box>
            </Box>


            <Footer />
        </Box>
    )
}