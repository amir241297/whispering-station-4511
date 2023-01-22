import { Input, Box, Text, Heading, Divider, Link } from "@chakra-ui/react"

export const Sidebar = () => {
    return (
        <Box width={'20%'}  lineHeight={'25px'} alignItems={'bottomLeft'}  background={'white'} marginRight={'25px'}
            textAlign={'start'} paddingLeft={'50px'} display={'flex'} flexDirection={'column'}>
            <Text fontWeight={'600'} fontSize={'15px'} color={'rgba(72,80,87)'} marginTop={'40px'}>  CHECK DELIVERY DETAILS</Text>
            <Box border={'1px solid grey'} margin={'10px 10px 10px 0px'}>
            <input placeholder="Enter Pin Code" border={"1px solid grey"}></input>

            </Box>
            <Box background={'rgba(238,238,238)'} margin={'10px 0px'} ><Heading fontWeight={'600'} fontSize={'22px'} padding={'3px'} color={'rgba(72,80,87)'}>FILTER BY</Heading></Box>
            <Heading color={'rgba(72,80,87)'} fontSize={'17px'} marginBottom={'10px'}>CLOTHES & SHOES</Heading>
            <Link><input type="checkbox" /> Ethnic Wear</Link>
            <Link><input type="checkbox" /> Frocks and Dreesses</Link>
            <Link><input type="checkbox" /> Party Wear</Link>
            <Divider margin={'20px 0px'} padding={'none'} border={'1px solid grey'} />


            <Heading color={'rgba(72,80,87)'} fontSize={'17px'} marginBottom={'10px'}>BRANDS</Heading>

            <Link><input type="checkbox" /> Babyhug</Link>
            <Link><input type="checkbox" /> Babyyoye</Link>
            <Link><input type="checkbox" /> Dapper Dudes</Link>
            <Link><input type="checkbox" /> EARTHY TOUCH</Link>
            <Link><input type="checkbox" /> Hola Bonita</Link>
            <Link><input type="checkbox" /> Kookie Kids</Link>
            <Link><input type="checkbox" /> Tiber Taber</Link>
            <Link ><input type="checkbox" /> ToffyHouse</Link>
            <Divider margin={'20px 0px'} border={'1px solid grey'} />
            <Heading color={'rgba(72,80,87)'} fontSize={'17px'} marginBottom={'10px'}>DISCOUNT</Heading>
            <Link><input type="checkbox" /> Upto 10%</Link>
            <Link><input type="checkbox" /> 10% - 20%</Link>
            <Link><input type="checkbox" /> 20% - 30%</Link>
            <Link><input type="checkbox" /> 30% - 40%</Link>
            <Link><input type="checkbox" /> More than 40%</Link>

            <Divider margin={'20px 0px'} border={'1px solid grey'} />
            <Heading color={'rgba(72,80,87)'} fontSize={'17px'} marginBottom={'10px'}>PRICE</Heading>
            <Link><input type="checkbox" /> $0 to 250</Link>
            <Link><input type="checkbox" /> $250 to 500</Link>
            <Link><input type="checkbox" /> $500 to 1000</Link>
            <Link><input type="checkbox" /> $1000 to 2000</Link>
            <Link><input type="checkbox" /> $2000 to 3000</Link>
            <Link><input type="checkbox" /> $3000 to 4000</Link>
            <Link><input type="checkbox" /> $4000 to 5000</Link>
            <Link><input type="checkbox" /> $5000 to above</Link>
            <Divider margin={'20px 0px'} border={'1px solid grey'} />



        </Box>
    )
}