import { FC, FormEvent, useState } from "react";
import './NewSubscription.scss'

import HeaderTopMenu from "../../components/HeaderTopMenu";

import UploadImage from "../../components/UploadImage";
import { NewSubForm } from "./NewSubForm";

import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../core/hooks/redux";
import { AppSlice } from "../../core/store/reducers/appReducer";
import { ISub } from "../../core/modules/IApp";

import Placeholder from "../../assets/img/placeholder.jpg";

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
        <main className="new-sub">
            <form onSubmit={handleSubmit}>
                <section className="new-sub__choose section bookmark">
                    <HeaderTopMenu angleLeft title="New" />
                    <h3 className="new-sub__title ft-7">Add new subscription</h3>
                    <UploadImage
                        className="new-sub__change-img"
                        setValueImage={setValueImage}
                        valueImage={valueImage} />
                    <div className="new-sub__sub-name ft-2">HGBO GO</div>             
                </section>
                <section className="section">
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