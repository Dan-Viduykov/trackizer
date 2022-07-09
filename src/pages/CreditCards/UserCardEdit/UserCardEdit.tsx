import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { useAppDispatch } from "../../../core/hooks/redux";
import { ICreditCard } from "../../../core/modules/IUser";
import { UserSlice } from "../../../core/store/reducers/userReducer";
import './UserCardEdit.scss'

interface UserCardEditProps {
    className?: string;
}

const UserCardEdit: FC<UserCardEditProps> = ({ className }) => {
    const [ nameValue, setNameValue ] = useState('');
    const [ numberValue, setNumberValue ] = useState<number>(5555);
    const [ dateValue, setDateValue ] = useState('');

    const onChangeName = (event: ChangeEvent<HTMLInputElement>) => setNameValue(event.target.value);
    const onChangeNumber = (event: ChangeEvent<HTMLInputElement>) => setNumberValue(Number(event.target.value));
    const onChangeDate = (event: ChangeEvent<HTMLInputElement>) => setDateValue(event.target.value);

    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const { changeCard } = UserSlice.actions;

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newCard: ICreditCard = {
            type: 'master cart',
            name: nameValue,
            number: numberValue,
            date: dateValue,
        }

        dispatch(changeCard(newCard));
        navigate(-1)
    }

    return (
        <section className={`${className} user-card`}>
            <div className="user-card__main border">
                <div className="user-card__type logo-40">
                    <img src="" alt="" />
                </div>
                <h4 className="user-card__title ft-3">Virtual Card</h4>
                <form className="user-card__inputs" onSubmit={handleSubmit}>
                    <input
                        type='text'
                        className="user-card__input"
                        placeholder="name"
                        onChange={onChangeName}
                        value={nameValue} />
                    <input
                        type='number'
                        className="user-card__input"
                        placeholder="number"
                        onChange={onChangeNumber}
                        value={numberValue} />
                    <input
                        type='text'
                        className="user-card__input"
                        placeholder="date"
                        onChange={onChangeDate}
                        value={dateValue} />
                        <Button className="user-card__button" btnType="Primary">Change</Button>
                </form>
                <div className="user-card__chip logo-40">
                    <img src="" alt="" />
                </div>

                <svg className="user-card__circles">
                    <linearGradient id="svgColor" x1="1" y1="200" x2="150" y2="0">
                        <stop offset="0" stopColor="#fff" stopOpacity={0.1} />
                        <stop offset="1" stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <circle className="user-card__circle-big" cx="170" cy="290" r="190" fill="url(#svgColor)" />
                    <circle className="user-card__circle-small" cx="230" cy="40" r="130" fill="url(#svgColor)" />
                </svg>
            </div>
        </section>
    )
}   

export {UserCardEdit}