import style from './WhatWeDo.module.scss';
import viarImg from '../../assets/imgs/redViar.png';
import viarImg2 from '../../assets/imgs/viarbl.png';
import viarImg3 from '../../assets/imgs/viar3.png';
import viarImg4 from '../../assets/imgs/viar4.png';
import viarImg5 from '../../assets/imgs/viar5.png';
import unreal from '../../assets/imgs/Hydra-Tech1.png';
import unity from '../../assets/imgs/Hydra-Tech3.png';
import oculus from '../../assets/imgs/oculus.png';
import vive from '../../assets/imgs/vive.png';
import {ReactComponent as Arrow} from '../../assets/imgs/arrow.svg';
import {ReactComponent as ArrowSmall} from '../../assets/imgs/arrow-small.svg';
import {ReactComponent as LineHorisont} from '../../assets/imgs/LineHorisont.svg';
import {SliderStep} from "./sliderStep/SliderStep";
import {step} from "../../constants/constant";
import {SliderTechnologies} from "./sliderTechnologies/SliderTechnologies";
import {CardsSlider} from "./cardsSlider/CardsSlider";

export const WhatWeDo = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div className={style.HowWeBuild}>
                    <div className={style.Title}>
                        <h3>INTRODUCTION</h3>
                        <h4>TO HYDRA VR </h4>
                        <Arrow className={style.Arrow}/>
                    </div>
                    <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
                </div>
                <div className={style.About}>
                    <img src={viarImg} alt="" className={style.ViarImg}/>
                    <div className={style.Title}>
                        <h3>About</h3>
                        <h4>HYDRA VR </h4>
                        <p>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus
                            urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida
                            dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
                            Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet
                            sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
                            etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet
                            cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                            retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                            n tempor.</p>
                        <button>LET’S GET IN TOUCH</button>
                    </div>
                </div>
                <div className={style.HowWeBuild}>
                    <div className={style.Title}>
                        <h3>Why BUILD</h3>
                        <h4>WITH HYDRA </h4>
                        <Arrow className={style.Arrow}/>
                    </div>
                    <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
                </div>
                <div className={style.CardsBlock}>
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
                </div>
                <CardsSlider/>
                <div className={style.Technologies}>
                    <h2>TECHNOLOGIES & HARDWARE</h2>
                    <h3>USED BY HYDRA VR.</h3>
                </div>
                <div className={style.TechnologiesBlock}>
                    <img src={unreal} alt="" className={style.Unreal}/>
                    <img src={unity} alt="" className={style.Unity}/>
                    <img src={oculus} alt="" className={style.Oculus}/>
                    <img src={vive} alt="" className={style.Vive}/>
                </div>
                <SliderTechnologies/>
                <div className={style.HowWeBuild}>
                    <div className={style.Title}>
                        <h3>How we BUILD</h3>
                        <h4>WITH HYDRA </h4>
                        <Arrow className={style.Arrow}/>
                    </div>
                    <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
                </div>
                <div className={style.StepsBlock}>
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
                </div>
                <SliderStep/>
            </div>
        </div>
    )
}