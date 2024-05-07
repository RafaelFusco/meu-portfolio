import { Swiper, SwiperProps } from "swiper/react"
import { ReactNode } from "react"
import { A11y, Navigation, Pagination } from "swiper/modules"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Slider.css'
import { styled } from "@mui/material"

interface SliderProps {
    settings: SwiperProps
    children: ReactNode
}


const Slider = ({ settings, children }: SliderProps) => {

    const StyledSwiper = styled(Swiper)(() => ({
        width: "100%",
    }));

    return (
        <>
            <StyledSwiper modules={[Navigation, Pagination, A11y]} {...settings}>{children}</StyledSwiper>
        </>
    )
}

export default Slider

