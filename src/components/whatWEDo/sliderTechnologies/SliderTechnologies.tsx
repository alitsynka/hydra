import style from "./Slideryechnologies.module.scss";
import Slider from "react-slick";
import {ReactComponent as Arrow} from "../../../assets/imgs/chevron-small-down.svg";
import unreal from "../../../assets/imgs/Hydra-Tech1.png";
import unity from "../../../assets/imgs/Hydra-Tech3.png";
import oculus from "../../../assets/imgs/oculus.png";
import vive from "../../../assets/imgs/vive.png";

export const PrevArrow = (props: any) => {
    return (
        <div className={style.WrapperArrow} onClick={props.onClick}>
            <div className={style.Gradient}>
                <Arrow className={style.PrevArrow}/>
            </div>
        </div>
    )
}
export const NextArrow = (props: any) => {
    return (
        <div className={style.WrapperArrow} onClick={props.onClick}>
            <div className={style.Gradient}>
                <Arrow className={style.NextArrow}/>
            </div>
        </div>
    )
}


export const SliderTechnologies = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        cssEase: "linear",
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]
    }

    return (
        <Slider {...settings} className={style.SliderCustom}>
            <div className={style.ImageWR}>
                <img src={unreal} alt="" className={style.Unreal}/>
            </div>
            <div className={style.ImageWR}>
                <img src={unity} alt="" className={style.Unity}/>
            </div>
            <div className={style.ImageWR}>
                <img src={oculus} alt="" className={style.Oculus}/>
            </div>
            <div className={style.ImageWR}>
                <img src={vive} alt="" className={style.Vive}/>
            </div>


        </Slider>
    )
}