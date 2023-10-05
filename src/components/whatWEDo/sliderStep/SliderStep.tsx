import style from "./SliderStep.module.scss";
import Slider from "react-slick";
import {ReactComponent as ArrowSmall} from "../../../assets/imgs/arrow-small.svg";
import {ReactComponent as Arrow} from "../../../assets/imgs/chevron-small-down.svg";
import {step} from "../../../constants/constant";


export const PrevArrow = (props:any) => {
    return (
        <div className={style.WrapperArrow} onClick={props.onClick}>
            <div className={style.Gradient}>
                <Arrow className={style.PrevArrow}/>
            </div>
        </div>
    )
}
export const NextArrow = (props:any) => {
    return (
        <div className={style.WrapperArrow} onClick={props.onClick}>
            <div className={style.Gradient}>
                <Arrow className={style.NextArrow}/>
            </div>
        </div>
    )
}


export const SliderStep = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 500,
        cssEase: "linear",
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }, {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    prevArrow: <PrevArrow/>,
                    nextArrow: <NextArrow/>,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    prevArrow: <PrevArrow/>,
                    nextArrow: <NextArrow/>,
                }
            }
        ]
    };
    return (
        <div className={style.Wr}>
            <Slider {...settings} className={style.SliderCustom}>
                {
                    step.map(step => {
                        return (
                            <div className={style.Step}>
                                <div className={style.CircleStep}>
                                    <div>{step.CircleStep}</div>
                                </div>
                                <div className={style.DescOfStep}>
                                    <ArrowSmall/>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>

    );
}