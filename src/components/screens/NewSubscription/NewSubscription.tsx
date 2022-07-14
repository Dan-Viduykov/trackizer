import { FC, FormEvent, useState } from "react";
import styles from './NewSubscription.module.scss'
import Header from "../../Header/Header";
import UploadImage from "../../UploadImage";
import NewSubForm from "./NewSubForm/NewSubForm";
import Placeholder from "../../../assets/img/placeholder.jpg";

import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../core/hooks/redux";
import { AppSlice } from "../../../core/store/reducers/appReducer";
import { ISub } from "../../../core/modules/IApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NewSubscription: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const uniqid = require('uniqid');
    const { addSubscription } = AppSlice.actions;

    const [ valuePrice, setValuePrice ] = useState('9.99');
    const [ valueDescription, setValueDescription ] = useState('');
    const [ valueCategory, setValueCategory ] = useState('');
    const [ valueDate, setValueDate ] = useState('');
    const [ valueImage, setValueImage ] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newSub: ISub = {
            name: valueDescription,
            description: valueDescription,
            category: valueCategory,
            datePayment: valueDate,
            image: valueImage === '' ? Placeholder : valueImage,
            currency: 'USD ($)',
            price: Number(valuePrice),
            id: uniqid(),
        }
        
        console.log(newSub);
        dispatch(addSubscription(newSub))
        navigate('/')
    }

    return (
        <main className={styles.sub}>
            <form onSubmit={handleSubmit}>
                <section className={`${styles.sub__choose} section bookmark`}>
                    <Header angleLeft title="New" />
                    <h3 className={`${styles.sub__title} ft__7`}>Add new subscription</h3>
                    <UploadImage
                        className={styles.sub__img}
                        setValueImage={setValueImage}
                        valueImage={valueImage}>
                        <FontAwesomeIcon className={styles.sub__plus} icon={faPlus} />
                        <span>Upload Image</span>
                    </UploadImage>
                    <div className={`${styles.sub__name} ft__2`}>HGBO GO</div>             
                </section>
                <section className={`section`}>
                    <NewSubForm
                        setValuePrice={setValuePrice}
                        setValueDescription={setValueDescription}
                        setValueDate={setValueDate}
                        setValueCategory={setValueCategory} />
                </section>
            </form>
        </main>
    )
}

export default NewSubscription 