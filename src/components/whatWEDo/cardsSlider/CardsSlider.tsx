import style from "./CardsSlider.module.scss";
import Slider from "react-slick";
import {ReactComponent as Arrow} from "../../../assets/imgs/chevron-small-down.svg";
import {ReactComponent as LineHorisont} from '../../../assets/imgs/LineHorisont.svg';
import viarImg2 from "../../../assets/imgs/viarbl.png";
import viarImg5 from "../../../assets/imgs/viar5.png";
import viarImg4 from "../../../assets/imgs/viar4.png";
import viarImg3 from "../../../assets/imgs/viar3.png";

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


export const CardsSlider = () => {

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
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 540,
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
            <div className={style.Card}>
                <div className={style.Circle}>
                    <img src={viarImg2} alt=""/>
                </div>
                <h3>SIMULATION</h3>
                <LineHorisont/>
                <p>Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet porttitor rhoncus
                    libero justo laoreet sit amet vitae.</p>
                <button>TRY IT NOW</button>
            </div>
            <div className={style.Card}>
                <div className={style.Circle}>
                    <img src={viarImg3} alt=""/>
                </div>
                <h3>EDUCATION</h3>
                <LineHorisont/>
                <p>Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet porttitor rhoncus
                    libero justo laoreet sit amet vitae.</p>
                <button>TRY IT NOW</button>
            </div>
            <div className={style.Card}>
                <div className={style.Circle}>
                    <img src={viarImg4} alt=""/>
                </div>
                <h3>SELF-CARE</h3>
                <LineHorisont/>
                <p>Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet porttitor rhoncus
                    libero justo laoreet sit amet vitae.</p>
                <button>TRY IT NOW</button>
            </div>
            <div className={style.Card}>
                <div className={style.Circle}>
                    <img src={viarImg5} alt=""/>
                </div>
                <h3>OUTDOOR</h3>
                <LineHorisont/>
                <p>Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet porttitor rhoncus
                    libero justo laoreet sit amet vitae.</p>
                <button>TRY IT NOW</button>
            </div>
        </Slider>
    )
}