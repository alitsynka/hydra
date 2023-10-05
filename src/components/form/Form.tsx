import style from './Form.module.scss';
import {ReactComponent as Line} from "../../assets/imgs/Vector.svg";

export const Form = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <h2>Join Hydra</h2>
                <Line/>
                <p>Let’s Build Your VR Experience</p>
                <form action="#" className={style.Form}>
                    <div className={style.WrapperForm}>
                        <input type="text" placeholder={'First Name'}/>
                        <input type="text" placeholder={'Last Name'}/>
                    </div>
                    <div className={style.WrapperForm}>
                        <input type="text" placeholder={'Email'}/>
                        <input type="text" placeholder={'Phone Number'}/>
                    </div>
                    <input type="text" placeholder={'Subject'}/>
                    <textarea name="" id="" placeholder={'Tell us something'}></textarea>
                    <button>
                        SEND TO HYDRA
                    </button>
                </form>
            </div>
        </div>
    )
}