import style from './Footer.module.scss';
import {ReactComponent as Logo} from "../../assets/imgs/logo.svg";
import {ReactComponent as Line} from "../../assets/imgs/FooterLine.svg";
import {ReactComponent as Facebook} from "../../assets/imgs/facebook.svg";
import {ReactComponent as Twitter} from "../../assets/imgs/twitter.svg";
import {ReactComponent as Lnkdn} from "../../assets/imgs/linkedin.svg";
import {ReactComponent as Youtube} from "../../assets/imgs/youtube.svg";
import {ReactComponent as Inst} from "../../assets/imgs/instagram.svg";
import {ReactComponent as Pinterest} from "../../assets/imgs/pinterest.svg";
import {ReactComponent as LineH} from "../../assets/imgs/longline.svg";


export const Footer = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <Logo className={style.Logo}/>
                <Line className={style.Line}/>
                <ul className={style.List}>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">TECHNOLOGIES</a>
                    </li>
                    <li>
                        <a href="#">HOW TO</a>
                    </li>
                    <li>
                        <a href="#">JOIN HYDRA</a>
                    </li>
                </ul>
                <Line className={style.Line}/>
                <ul className={style.List}>
                    <li>
                        <a href="#">F.A.Q.</a>
                    </li>
                    <li>
                        <a href="#">SITEMAP</a>
                    </li>
                    <li>
                        <a href="#">CONDITIONS</a>
                    </li>
                    <li>
                        <a href="#">LICENSES</a>
                    </li>
                </ul>
                <Line className={style.Line}/>
                <div className={style.WrapperSoc}>
                    <p>SOCIALIZE WITH HYDRA</p>
                    <div className={style.SoNetworks}>
                        <Facebook/>
                        <Twitter/>
                        <Lnkdn/>
                        <Youtube/>
                        <Inst/>
                        <Pinterest/>
                    </div>
                    <button>
                        BUILD YOUR WORLD
                    </button>
                </div>
                <div className={style.Allreserveds}>
                    <LineH/>
                </div>
            </div>
        </div>
    )
}