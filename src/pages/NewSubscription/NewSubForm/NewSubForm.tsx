import { ChangeEvent, FC, FormEvent, useState } from "react";
import './NewSubForm.scss'

import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAppDispatch } from "../../../core/hooks/redux";
import { AppSlice } from "../../../core/store/reducers/appReducer";
import { ISub } from "../../../core/modules/IApp";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "antd";

const NewSubForm: FC = () => {
    const [ valuePrice, setValuePrice ] = useState('9.99');
    const [ valueDescription, setValueDescription ] = useState('');
    const [ valueDate, setValueDate ] = useState('')
    
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const uniqid = require('uniqid'); 

    const { addSubscription } = AppSlice.actions

    const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
        setValuePrice(event.target.value)
    }
    const onChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
        setValueDescription(event.target.value)
    }
    const onChangeDate = (date: any, dateString: string) => {
        setValueDate(dateString)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newSub: ISub = {
            name: valueDescription,
            description: valueDescription,
            category: valueDescription,
            datePayment: valueDate,
            currency: 'USD ($)',
            price: Number(valuePrice),
            id: uniqid(),
        }

        dispatch(addSubscription(newSub))
        navigate('/')
    }

    return (
        <form className="sub-form" onSubmit={handleSubmit}>
            <fieldset className="sub-form__info">
                <label htmlFor="sub-description" className="ft-body-s">Description</label>
                <input
                    id="sub-description"
                    className="sub-form__description ft-2 input"
                    value={valueDescription}
                    onChange={onChangeDescription} />
                <DatePicker
                    placeholder="date payment"
                    onChange={onChangeDate}
                    className="sub-form__date" />
            </fieldset>
            <fieldset className="sub-form__price">
                <button className="sub-form__btn border" >
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                <input
                    className="sub-form__value ft-5"
                    value={valuePrice}
                    onChange={onChangePrice}
                    type='number' />
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