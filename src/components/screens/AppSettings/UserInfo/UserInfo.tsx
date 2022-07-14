import { FC, FormEvent, useState } from "react";
import styles from './UserInfo.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../../../core/hooks/redux";
import { UserSlice } from "../../../../core/store/reducers/userReducer";
import { UserState } from "../../../../core/modules/IUser";
import UploadImage from "../../../UploadImage";
import Button from "../../../Button";
import { Alert } from "antd";

const UserInfo: FC = () => {
    const { img, name, mail } = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();
    const { changeUser } = UserSlice.actions;

    const [ valueImage, setValueImage ] = useState(img)
    const [ valueName, setValueName ] = useState(name)
    const [ valueMail, setValueMail ] = useState(mail)
    const [ visible, setVisible ] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const modifiedUser: UserState = {
            name: valueName,
            mail: valueMail,
            img: valueImage,
        }
        
        dispatch(changeUser(modifiedUser));
        setTimeout(() => { setVisible(false)}, 1000);
        setVisible(true);
    }

    return (
        <form className={styles.user} onSubmit={handleSubmit}>
            <UploadImage
                className={styles.user__img}
                valueImage={valueImage}
                setValueImage={setValueImage}
                name='user-img' >
                <FontAwesomeIcon className={styles.user__plus} icon={faPlus} />
            </UploadImage>
            <input
                className={`${styles.user__name} ft__4`} 
                name="user-name"
                value={valueName}
                onChange={(event) => setValueName(event.target.value)} />
            <input
                className={`${styles.user__mail} ft__body_s`}  
                name="user-mail"
                value={valueMail}
                onChange={(event) => setValueMail(event.target.value)} />
            <Button btnType="Secondary" className={styles.user__btn}>Edit profile</Button>
            { visible ? (<Alert className={styles.user__alert} message="User edit" type="success" showIcon />) : null}
        </form>
    )
}

export default UserInfo