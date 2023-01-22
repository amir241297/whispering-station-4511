import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// // Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// // And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Carousel=()=> {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    "https://cdn.fcglcdn.com/brainbees/banners/hp_dp_hgr_f40_dec_-994x3991670566809068.webp",
    "https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p04_iconic_sale_flat60_desktop1674196998558.webp",
    "https://cdn.fcglcdn.com/brainbees/banners/baby_hug_segment_desktop-banner-all_milk_range-994-x-399px1674206863192.gif",
    "https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_soi_21stjan1674219030308.gif",
    "https://cdn.fcglcdn.com/brainbees/banners/click_it_to_win_it_jan23_hp_desktop1674195550844.webp",
    "https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_gbbs_21stjan1674217887664.webp",
    "https://cdn.fcglcdn.com/brainbees/banners/merchf_hp_default_soi23_buy2_1701231673929959347.webp",
    "https://cdn.fcglcdn.com/brainbees/banners/merchan_hp_p10_ashwini_dsktp_feedingacc_21.1.20231674196460081.webp",
    "https://cdn.fcglcdn.com/brainbees/banners/slurrpfarm_hp_mkt_po3_all_2_slur401672214030878.webp",
    "https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_superhit_fashion_brands_soi_desktop1674196374099.webp",
    "https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_diaper_11thjan1674046582770.webp",
]

  return (
    <Box
      position={'relative'}
      height={'420px'}
      width={'full'}
      overflow={'hidden'}>
        
      {/* CSS files for react-slick */}

      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        // colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        // colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'sm'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            // backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}