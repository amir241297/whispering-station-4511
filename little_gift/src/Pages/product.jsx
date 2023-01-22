import { Card, CardHeader, CardBody, CardFooter, Heading, Stack, StackDivider, Box, Text, Divider, Image, Button, ButtonGroup } from '@chakra-ui/react'
import { useEffect, useReducer, useState } from 'react'
import { FetchData, GloriousData, BelovedBrand, Diapers, BathSkinCare, FeedingKids, Games, Toys, Nursery, WomensCare, Moms } from '../Api/GetData'
// import { Slider } from '../Components/Slider'
import { Navbar } from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Carousel } from '../Components/Carousel';



export const Product = () => {
    const [state, setState] = useState([])
    const [glorious, setGlorious] = useState([])
    const [beloved, setBeloved] = useState([])
    const [diapers, setDiapers] = useState([])
    const [bath, setBath] = useState([])
    const [feeding, setFeeding] = useState([])
    const [games, setGames] = useState([])
    const [toys, setToys] = useState([])
    const [nursery, setNursery] = useState([])
    const [women, setWomen] = useState([])
    const [moms, setMoms] = useState([])

    const getData = () => {
        FetchData()
            .then((res) => {
                setState(res.data)
            })
            .catch((error) => console.log('axios error', error))

        GloriousData()
            .then((res) => {
                setGlorious(res.data)
                // console.log("glor",res.data)
            })
            .catch((error) => console.log('axios error', error))

        BelovedBrand()
            .then((res) => {
                setBeloved(res.data)
                // console.log("glor",res.data)
            })
            .catch((error) => console.log('axios error', error))

        Diapers()
            .then((res) => {
                setDiapers(res.data)
                // console.log("diapers",res.data)
            })
            .catch((error) => console.log('axios error', error))

        BathSkinCare()
            .then((res) => {
                setBath(res.data)
                // console.log("diapers",res.data)
            })
            .catch((error) => console.log('axios error', error))

        FeedingKids()
            .then((res) => {
                setFeeding(res.data)
                // console.log("diapers",res.data)
            })
            .catch((error) => console.log('axios error', error))

        Games()
            .then((res) => {
                setGames(res.data)
                // console.log("diapers",res.data)
            })
            .catch((error) => console.log('axios error', error))

        Toys()
            .then((res) => {
                setToys(res.data)
                // console.log("diapers",res.data)
            })
            .catch((error) => console.log('axios error', error))

        Nursery()
            .then((res) => {
                setNursery(res.data)
                // console.log("diapers",res.data)
            })
            .catch((error) => console.log('axios error', error))

        WomensCare()
            .then((res) => {
                setWomen(res.data)
                // console.log("diapers",res.data)
            })
            .catch((error) => console.log('axios error', error))

        Moms()
            .then((res) => {
                setMoms(res.data)
                // console.log("diapers",res.data)
            })
            .catch((error) => console.log('axios error', error))
    }
    // console.log("diapers", diapers)
    useEffect(() => {
        getData()
    }, [])
    // console.log('state',state)
    return (
        <Box width={'100%'} margin={'auto'} height={'auto'}>
            <Navbar />


            {/* Slider */}
            {/* <Box > */}
            {/* <Slider /> */}
            <Carousel />

            {/* </Box> */}


            {/* Products */}
            <Box
                padding={'30px 0px 100px 0px'}

                bg={'rgb(238,238,238)'}
            >
                <Heading fontSize={'22px'} color={'rgb(75,65,57)'} marginBottom={'30px'}>PREMIUM BOUTIQUES</Heading>

                <Box
                    // border={'3px solid pink'}
                    display={'grid'}
                    gridTemplateColumns={'repeat(3,1fr)'}
                    gridTemplateRows={'repeat(3,1fr)'}
                    gap={'1%'}
                    bg={'rgb(238,238,238)'}
                    width={'80%'}
                    margin={'auto'}
                >
                    {
                        state.map(({ author, title, id }) => (
                            <Box key={id}>
                                <Card maxW='sm'>
                                    <CardBody>
                                        <Image
                                            src={author}
                                            alt={title}
                                            borderRadius='lg'
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Text size='md'>{title}</Text>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Box>
                        ))
                    }
                </Box>
            </Box>

            <Box width={'100%'} bg={'rgba(245,245,245)'}>
                <Box width={"87%"} margin={'auto'}>
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_447_desktop_SOI_2023_01.jpg" alt="" />
                    <Box display={'flex'} width={'100%'}>
                        <img width={'33.3%'} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_02.jpg" alt="" />
                        <img width={'33.3%'} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_03.jpg" alt="" />
                        <img width={'33.3%'} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_04.jpg" alt="" />
                    </Box>
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_179_desktop_SOI_2023_05.jpg" alt="" />


                    <Box width={'100%'} display={'flex'}>
                        {
                            glorious.map(({ author, id }) => (
                                <img src={author} alt='' key={id} width={'25%'} />
                            ))
                        }
                    </Box>

                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_188_desktop_SOI_2023_10.jpg" alt="" />
                    <Box display={'flex'} >
                        <img src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_14.jpg' width={'12.5%'} alt='' />
                        <img src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_11.jpg' width={'12.5%'} alt='' />
                        <img src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_12.jpg' width={'12.5%'} alt='' />
                        <img src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_13.jpg' width={'12.5%'} alt='' />
                        <img src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_14.jpg' width={'12.5%'} alt='' />
                        <img src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_15.jpg' width={'12.5%'} alt='' />
                        <img src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_16.jpg' width={'12.5%'} alt='' />
                        <img src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_17_12plus.jpg' width={'12.5%'} alt='' />
                    </Box>
                    <img src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_220_desktop_SOI_2023_17.jpg' alt='' />
                    <img src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_228_desktop_SOI_2023_18.jpg' alt='' />

                    <Box display={'grid'} gridTemplateColumns={"repeat(8,1fr)"}>
                        {
                            beloved.map(({ author }) => (
                                <img src={author} alt='' />
                            ))
                        }
                    </Box>

                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_213_desktop_SOI_2023_24.jpg" alt="" />
                    <Box display={'flex'}>
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_25.jpg" width={'33.3%'} alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_26.jpg" width={'33.3%'} alt="" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_27.jpg" width={'33.3%'} alt="" />
                    </Box>
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_01.jpg" alt="" />
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_02.jpg" alt="" />

                    <Box width={'100%'} display={'flex'}>
                        {
                            diapers.map(({ author, id }) => (
                                <img src={author} alt='' key={id} width={'14.28%'} />
                            ))
                        }
                    </Box>


                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_10.jpg" alt="" />
                    <Box width={'100%'} display={'flex'}>
                        {
                            bath.map(({ author, id }) => (
                                <img src={author} alt='' key={id} width={'14.28%'} />
                            ))
                        }
                    </Box>

                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_01.jpg" alt="" />
                    <Box width={'100%'} display={'grid'} gridTemplateColumns={'repeat(8,1fr)'} >
                        {
                            feeding.map(({ author, id }) => (
                                <img src={author} alt='' key={id} />
                            ))
                        }
                    </Box>

                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_01.jpg" alt="" />
                    <Box width={'100%'} display={'grid'} gridTemplateColumns={'repeat(6,1fr)'} >
                        {
                            games.map(({ author, id }) => (
                                <img src={author} alt='' key={id} />
                            ))
                        }
                    </Box>

                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_40.jpg" alt="" />
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_18.jpg" alt="" />
                    <Box width={'100%'} display={'grid'} gridTemplateColumns={'repeat(6,1fr)'} >
                        {
                            toys.map(({ author, id }) => (
                                <img src={author} alt='' key={id} />
                            ))
                        }
                    </Box>

                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//soi_desktop_160123_96.jpg" alt="" />

                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_feeding_&_kids_food_160123_31.jpg" alt="" />
                    <Box width={'100%'} display={'grid'} gridTemplateColumns={'repeat(5,1fr)'} >
                        {
                            nursery.map(({ author, id }) => (
                                <img src={author} alt='' key={id} />
                            ))
                        }
                    </Box>

                    <Box display={'flex'}>
                        <img width={'16.6%'} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_health_&_safty_071122_01.jpg" alt="" />
                        <img width={'16.6%'} src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_health_&_safty_071122_02.jpg' />
                        <img width={'16.6%'} src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_health_&_safty_071122_03.jpg' alt='' />
                        <img width={'16.6%'} src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_health_&_safty_071122_04.jpg' alt='' />
                        <img width={'16.6%'} src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_health_&_safty_071122_05.jpg' alt='' />
                        <img width={'16.6%'} src='https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_health_&_safty_071122_06.jpg' alt='' />

                    </Box>
                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_health_&_safty_071122_07.jpg" alt="" />
                    <Box width={'100%'} display={'grid'} gridTemplateColumns={'repeat(6,1fr)'} >
                        {
                            women.map(({ author, id }) => (
                                <img src={author} alt='' key={id} />
                            ))
                        }
                    </Box>


                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_moms_&_maternity_051122_01.jpg" alt="" />
                    <Box width={'100%'} display={'grid'} gridTemplateColumns={'repeat(8,1fr)'} >
                        {
                            moms.map(({ author, id }) => (
                                <img src={author} alt='' key={id} />
                            ))
                        }
                    </Box>

                    <Box width={'100%'} margin={'50px 0px 30px 0px'}>
                        <img width={'100%'} src="https://cdn.fcglcdn.com/brainbees/images/intellitots-franchise-1dec22.webp" alt="" />
                    </Box>

                </Box>

            </Box>
            <Footer />
        </Box>
    )
}