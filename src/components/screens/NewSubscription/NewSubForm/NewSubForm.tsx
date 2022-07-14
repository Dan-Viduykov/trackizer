import { ChangeEvent, FC } from "react";
import styles from './NewSubForm.module.scss'

import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { DatePicker } from "antd";
import Select from 'react-select';
import { useAppSelector } from "../../../../core/hooks/redux";
import { ICategory } from "../../../../core/modules/IApp";

interface NewSubFormProps {
    setValuePrice: (value: string) => void;
    setValueDescription: (value: string) => void;
    setValueDate: (value: string) => void;
    setValueCategory: (value: string) => void;
}

const NewSubForm: FC<NewSubFormProps> = (props) => {
    const { setValuePrice, setValueDescription, setValueDate, setValueCategory } = props;

    const { categories } = useAppSelector(state => state.appReducer);

    const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => setValuePrice(event.target.value);
    const onChangeDescription = (event: ChangeEvent<HTMLInputElement>) => setValueDescription(event.target.value);
    const onChangeDate = (date: any, dateString: string) => setValueDate(dateString);
    const onChangeCategory = ({value}: any) => setValueCategory(value);

    const options = categories.map(({ title }: ICategory) => {
        return {value: title, label: title}
    })

    return (
        <div className={styles.form}>
            <fieldset className={styles.form__info}>
                <label htmlFor="sub-description" className={`ft__body_s`}>Description</label>
                <input
                    id="sub-description"
                    className={`${styles.form__description} ft__2 input`}
                    onChange={onChangeDescription} />
                <div className={styles.form__antd}>
                    <Select
                        className={styles.form__category}
                        onChange={onChangeCategory}
                        options={options} />
                    <DatePicker
                        placeholder="date payment"
                        onChange={onChangeDate}
                        className={styles.form__date} />
                </div>
            </fieldset>
            <fieldset className={styles.form__price}>
                <button className={`${styles.form__btn} border`} >
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                <input
                    className={`${styles.form__value} ft__5`}
                    onChange={onChangePrice}
                    type='number' />
                <button className={`${styles.form__btn} border`} >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </fieldset>
            <button
                className={styles.form__save}
                type="submit" >
                Add this platform
            </button>
        </div>
    )
}

export default NewSubForm