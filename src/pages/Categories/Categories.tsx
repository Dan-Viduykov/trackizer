import { FC } from "react";
import './Categories.scss';

import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import cool from '../../assets/svg/cool.svg'
import { CategoriesIndicator } from "./CategoriesIndicator/CategoriesIndicator";
import { CategoriesList } from "./CategoriesList/CategoriesList";
import { NavLink, useLocation } from "react-router-dom";
import { NewCategory } from "./NewCategory/NewCategory";
import Footer from "../../components/Footer/Footer";

const Categories: FC = () => {
    const location = useLocation()

    return (
        <main className="budgets section">
            <CategoriesIndicator className="budgets__indicator" />
            <p className="budgets__info">Your budgets are on track <img src={cool} alt="" /></p>
            {
                location.pathname === '/budgets' ?
                    <CategoriesList className={'budgets__categories'} /> :
                    <NewCategory className={'budgets__new-category'} />
            }
            <NavLink to={'/budgets/new'} className="budgets__add ft-2" >
                Add new category <FontAwesomeIcon style={{marginLeft: '8px'}} icon={faPlusCircle} />
            </NavLink>
            <Footer />
        </main>
    )
}

export default Categories