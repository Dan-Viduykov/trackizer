import { FC } from "react";
import './Budgets.scss';

import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import cool from '../../assets/svg/cool.svg'
import BottomBar from "../../components/BottomBar";
import { BudgetsIndicator } from "./BudgetsIndicator";
import { Categories } from "./Categories";

const Budgets: FC = () => {
    return (
        <main className="budgets section">
            <BudgetsIndicator className="budgets__indicator" />
            <p className="budgets__info">Your budgets are on track <img src={cool} alt="" /></p>
            <Categories className={'budgets__categories'} />
            <button className="budgets__add ft-2">Add new category <FontAwesomeIcon icon={faPlusCircle} /></button>
            <BottomBar />
        </main>
    )
}

export default Budgets