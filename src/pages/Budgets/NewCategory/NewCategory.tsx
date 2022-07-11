import { FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { useAppDispatch, useAppSelector } from "../../../core/hooks/redux";
import { AppSlice } from "../../../core/store/reducers/appReducer";
import './NewCategory.scss'

interface NewCategoryProps {
    className: string
}


const NewCategory: FC<NewCategoryProps> = ({ className }) => {
    const { colors } = useAppSelector(state => state.appReducer);
    const dispatch = useAppDispatch();
    const { addCategory } = AppSlice.actions;
    const navigate = useNavigate();


    const [ valueTitle, setValueTitle ] = useState('');
    const [ valueLimit, setValueLimit ] = useState<number>(100);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const randomColor = colors[ Math.floor(Math.random() * colors.length) ];
        const newCategory = {
            title: valueTitle,
            limit: valueLimit,
            color: randomColor,
            icon: ''
        };

        dispatch(addCategory(newCategory))
        navigate(-1);
    }
    
    return (
        <form className={`new-category ${className}`} onSubmit={handleSubmit} >
            <input 
                className="new-category__input input"
                placeholder="title"
                type="text"
                value={valueTitle}
                onChange={(event) => setValueTitle(event.target.value)} />
            <input 
                className="new-category__input input"
                placeholder="price"
                type="number"
                value={valueLimit}
                onChange={(event) => setValueLimit(Number(event.target.value))} />
            <Button className="new-category__button-save" btnType="Primary">Save</Button>
        </form>
    )
}

export {NewCategory}