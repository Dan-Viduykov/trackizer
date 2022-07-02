import { ChangeEvent, FC, FormEvent, useState } from "react";
import './NewSubForm.scss'

import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAppDispatch } from "../../../core/hooks/redux";
import { AppSlice } from "../../../core/store/reducers/appReducer";
import { ISub } from "../../../core/modules/IApp";
import { useNavigate } from "react-router-dom";

const NewSubForm: FC = () => {
    const [ valuePrice, setValuePrice ] = useState('9.99');
    const [ valueDescription, setValueDescription ] = useState('');
    const navigate = useNavigate()

    const dispatch = useAppDispatch()
    const { addSub } = AppSlice.actions

    const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
        setValuePrice(event.target.value)
    }
    const onChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
        setValueDescription(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const date = `${new Date().getMonth() + 1}.${new Date().getDate()}.${new Date().getFullYear()}`;
        const newSub: ISub = {
            name: valueDescription,
            description: valueDescription,
            category: valueDescription,
            firstPayment: date,
            currency: 'USD ($)',
            price: Number(valuePrice),
        }

        dispatch(addSub(newSub))
        navigate('/')
    }

    return (
        <form className="sub-form" onSubmit={handleSubmit}>
            <fieldset className="sub-form__description">
                <p className="ft-body-s">Description</p>
                <input
                    className="ft-2 input"
                    value={valueDescription}
                    onChange={onChangeDescription} />
            </fieldset>
            <fieldset className="sub-form__price">
                <button className="sub-form__btn border" >
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                <input
                    className="sub-form__value ft-5"
                    value={valuePrice}
                    onChange={onChangePrice} />
                <button className="sub-form__btn border" >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </fieldset>
            <button
                className="sub-form__btn-save"
                type="submit" >
                Add this platform
            </button>
        </form>
    )
}

export default NewSubForm