import Slider from "react-slick";
import style from "./SliderContact.module.scss";
import {ReactComponent as Location} from "../../assets/imgs/Location.svg";
import {ReactComponent as Mail} from "../../assets/imgs/mail.svg";
import {ReactComponent as Tel} from "../../assets/imgs/phone.svg";
import {ReactComponent as Arrow} from "../../assets/imgs/chevron-circle-right.svg";


export const SliderContact = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        prevArrow:<Arrow className={style.PrevArrow}/>,
        nextArrow:<Arrow/>
    };
    return (
        <div className={style.Wr}>
            <Slider {...settings} className={style.SliderCustom}>
                <div className={style.ContactBlock}>
                    <Location className={style.LocSvg}/>
                    <div className={style.DescContactBlock}>
                        <h4>Pay Us a Visit</h4>
                        <p>Union St, Seattle, WA 98101, United States</p>
                    </div>
                </div>
                <div className={style.ContactBlock}>
                    <Tel className={style.TelSvg}/>
                    <div className={style.DescContactBlock}>
                        <h4>Give Us a Call</h4>
                        <p>(110) 1111-1010</p>
                    </div>
                </div>
                <div className={style.ContactBlock}>
                    <Mail className={style.MailSvg}/>
                    <div className={style.DescContactBlock}>
                        <h4>Send Us a Message</h4>
                        <p>Contact@HydraVTech.com</p>
                    </div>
                </div>
            </Slider>
        </div>

    );
}