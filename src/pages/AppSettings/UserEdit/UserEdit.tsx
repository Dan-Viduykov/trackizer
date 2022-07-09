import { FC, FormEvent, useState } from "react";
import './UserEdit.scss';

import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../core/hooks/redux";
import { UserSlice } from "../../../core/store/reducers/userReducer";

import UploadImage from "../../../components/UploadImage";
import Button from "../../../components/Button";

const UserEdit: FC = () => {
    const navigate = useNavigate()

    const dispatch = useAppDispatch();
    const { changeUser } = UserSlice.actions;

    const [ valueImage, setValueImage ] = useState('');
    const [ valueName, setValueName ] = useState('');
    const [ valueMail, setValueMail ] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const user = {
            name: valueName,
            mail: valueMail,
            img: valueImage
        }

        dispatch(changeUser(user));
        navigate(-1);
    }

    return (
        <form className="user" onSubmit={handleSubmit}>
            <UploadImage
                className="user__change-img"
                valueImage={valueImage}
                setValueImage={setValueImage}
                name='user-img' />
            <input
                className="user__input input"
                type="text" 
                name="user-name" 
                placeholder="name"
                value={valueName}
                onChange={(event) => setValueName(event.target.value)} />
            <input
                className="user__input input"
                type="email"
                name="user-mail"
                placeholder="mail"
                value={valueMail}
                onChange={(event) => setValueMail(event.target.value)} />
            <Button className="user__btn-edit" btnType='Primary'>Edit profile</Button>
        </form>
    )
}

export {UserEdit}