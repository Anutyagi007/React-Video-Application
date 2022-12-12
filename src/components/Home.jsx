import React from 'react'
import { Carousel } from 'react-responsive-carousel' 
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Box, Text } from '@chakra-ui/react'
import img1 from '../assests/1.jpg'
import img2 from '../assests/2.jpg'
import img3 from '../assests/3.jpg'
import img4 from '../assests/4.jpg'
import img5 from '../assests/5.png'
import { Image,Heading,Container,Stack } from '@chakra-ui/react'

const headingOptions={
    pos:'absolute',
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:"4",
    size:"4xl"
};
export const Home = () => {
  return (
    <Box>
        <MyCarousel/>
        <Container minH={'100vh'} maxW={'container.xl'} p={'16'}>
            <Heading textTransform={'uppercase'} py='2' w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>
                Services
            </Heading>
            <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column','row']}>
                <Image src={img5} filter={'hue-rotate(-130deg)'}/>
                <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptas corrupti nemo ipsam vero cum possimus cumque in laboriosam dolorum omnis, numquam totam quia fugiat atque consequuntur unde, facilis error velit sit dolores porro.
                </Text>
            </Stack>
        </Container>
    </Box>
  )
}

const MyCarousel=()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showArrows={false} showThumbs={false}>
        <Box w={'full'} h={'100vh'} >
            <Image src={img1}/>
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} >
                Watch the Future
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'} >
            <Image src={img2}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Future is Gaming
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'} >
            <Image src={img3}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Gaming on Console
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'} >
            <Image src={img4}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Nignt Life is cool
            </Heading>
        </Box>
    </Carousel>
);
