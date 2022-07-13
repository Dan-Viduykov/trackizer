import { FC } from "react";
import styles from './Categories.module.scss';

import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useLocation } from "react-router-dom";
import cool from '../../../assets/svg/cool.svg'

import Footer from "../../Footer/Footer";
import CategoriesList from "../../CategoriesList/CategoriesList";
import NewCategory from "../../NewCategory/NewCategory";
import CategoriesIndicator from "../../CategoriesIndicator/CategoriesIndicator";


const Categories: FC = () => {
    const location = useLocation()

    return (
        <main className={`${styles.budgets} section`}>
            <CategoriesIndicator className={styles.budgets__indicator} />
            <p className={styles.budgets__info}>Your budgets are on track <img src={cool} alt="" /></p>
            {
                location.pathname === '/budgets' ?
                    <CategoriesList className={styles.budgets__categories} /> :
                    <NewCategory className={styles.budgets__new} />
            }
            <NavLink to={'/budgets/new'} className={`${styles.budgets__btn} ft__2`} >
                Add new category <FontAwesomeIcon style={{marginLeft: '8px'}} icon={faPlusCircle} />
            </NavLink>
            <Footer />
        </main>
    )
}

export default Categories