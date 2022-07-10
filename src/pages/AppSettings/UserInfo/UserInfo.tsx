import { FC, FormEvent, useState } from "react";
import './UserInfo.scss';

import { useAppDispatch, useAppSelector } from "../../../core/hooks/redux";
import UploadImage from "../../../components/UploadImage";
import Button from "../../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { UserSlice } from "../../../core/store/reducers/userReducer";
import { UserState } from "../../../core/modules/IUser";

const UserInfo: FC = () => {
    const { img, name, mail } = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();
    const { changeUser } = UserSlice.actions;

    const [ valueImage, setValueImage ] = useState(img)
    const [ valueName, setValueName ] = useState(name)
    const [ valueMail, setValueMail ] = useState(mail)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const modifiedUser: UserState = {
            name: valueName,
            mail: valueMail,
            img: valueImage,
        }

        dispatch(changeUser(modifiedUser));
    }

    return (
        <form className="user" onSubmit={handleSubmit}>
            <UploadImage
                className="user__img"
                valueImage={valueImage}
                setValueImage={setValueImage}
                name='user-img' >
                <FontAwesomeIcon className="user__plus" icon={faPlus} />
            </UploadImage>
            <input
                className="user__name ft-4" 
                name="user-name"
                value={valueName}
                onChange={(event) => setValueName(event.target.value)} />
            <input
                className="user__mail ft-body-s" 
                name="user-mail"
                value={valueMail}
                onChange={(event) => setValueMail(event.target.value)} />
            <Button btnType="Secondary" className="user__btn-edit">Edit profile</Button>
        </form>
    )
}

export default UserInfo