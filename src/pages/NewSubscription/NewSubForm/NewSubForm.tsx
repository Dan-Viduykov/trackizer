import { ChangeEvent, FC } from "react";
import './NewSubForm.scss'

import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { DatePicker } from "antd";

interface NewSubFormProps {
    setValuePrice: (value: string) => void
    setValueDescription: (value: string) => void
    setValueDate: (value: string) => void
}

const NewSubForm: FC<NewSubFormProps> = (props) => {
    const {setValuePrice, setValueDescription, setValueDate} = props

    const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
        setValuePrice(event.target.value)
    }
    const onChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
        setValueDescription(event.target.value)
    }
    const onChangeDate = (date: any, dateString: string) => {
        setValueDate(dateString)
    }

    return (
        <div className="sub-form">
            <fieldset className="sub-form__info">
                <label htmlFor="sub-description" className="ft-body-s">Description</label>
                <input
                    id="sub-description"
                    className="sub-form__description ft-2 input"
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
        </div>
    )
}

export default NewSubForm