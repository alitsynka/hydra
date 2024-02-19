import style from './DiveInto.module.scss';
import {ReactComponent as Arrow} from "../../assets/imgs/arrow-small.svg";
import {ReactComponent as Location} from "../../assets/imgs/Location.svg";
import {ReactComponent as Mail} from "../../assets/imgs/mail.svg";
import {ReactComponent as Line} from "../../assets/imgs/Line.svg";
import {ReactComponent as Tel} from "../../assets/imgs/phone.svg";
import GirlViar from "../../assets/imgs/GirlViar.png";
import Box from "@mui/material/Box";
import {SliderContact} from "../sliderContact/SliderContact";

export const DiveInto = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div className={style.TopBlock}>
                    <div className={style.DescBlock}>
                        <h2 className={style.Title}><span>Dive</span> Into The Depths</h2>
                        <h2 className={style.Title}>Of <span>Virtual Reality</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            nisl tincidunt eget. Lectus mauris eros in vitae .</p>
                        <div className={style.BtnBlock}>
                            <button>BUILD YOUR WORLD</button>
                            <Arrow/>
                        </div>
                    </div>
                    <a href={'https://www.onliner.by/'} target={'_blank'} className={style.ImageBlock}>
                        <img src={GirlViar} alt=""/>
                    </a>
                </div>

                <div className={style.ContactBlok}>
                    <Box className={style.Location}>
                        <Location/>
                        <div className={style.DescContactBlock}>
                            <h4>Pay Us a Visit</h4>
                            <p>Union St, Seattle, WA 98101, United States</p>
                        </div>
                    </Box>
                    <Line/>
                    <Box className={style.Tel}>
                        <Tel/>
                        <div className={style.DescContactBlock}>
                            <h4>Give Us a Call</h4>
                            <p>(110) 1111-1010</p>
                        </div>
                    </Box>
                    <Line/>
                    <Box className={style.Mail}>
                        <Mail className={style.MailSvg}/>
                        <div className={style.DescContactBlock}>
                            <h4>Send Us a Message</h4>
                            <p>Contact@HydraVTech.com</p>
                        </div>
                    </Box>
                </div>
                <SliderContact/>
            </div>
        </div>
    )
}