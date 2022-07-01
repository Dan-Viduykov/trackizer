import { faAutomobile, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import BottomBar from "../../components/BottomBar";
import HeaderTopMenu from "../../components/HeaderTopMenu";
import './Budgets.scss'
import cool from '../../assets/svg/cool.svg'

const Budgets: FC = () => {
    return (
        <main className="budgets section">
            <HeaderTopMenu title="Spending & Budgets" gear/>
            <section className="budgets__indicator">
                <div className="budgets__lines">
                    <div className="budgets__line"></div>
                    <div className="budgets__line"></div>
                    <div className="budgets__line"></div>
                </div>
                <p className="budgets__total ft-5">$82,97</p>
                <p className="budgets__capital ft-body-s">of $2,000 budget</p>
            </section>
            <p className="budgets__info">Your budgets are on track <img src={cool} alt="" /></p>
            <ul className="budgets__categories">
                <li className="budgets__category category border">  
                    <div className="category__content">
                        <FontAwesomeIcon icon={faAutomobile} />
                        <div className="category__title">
                            <p className="ft-2" >Auto & Transport</p>
                            <p className="ft-body-s" >$375 left to spend</p>
                        </div>
                        <div className="category__price">
                            <p className="ft-2" >$25.99</p>
                            <p className="ft-body-s" >of $400</p>
                        </div>
                    </div>
                    <div className="category__indicator">
                        <div></div>
                    </div>
                </li>
                <li className="budgets__category category border">  
                    <div className="category__content">
                        <FontAwesomeIcon icon={faAutomobile} />
                        <div className="category__title">
                            <p className="ft-2" >Auto & Transport</p>
                            <p className="ft-body-s" >$375 left to spend</p>
                        </div>
                        <div className="category__price">
                            <p className="ft-2" >$25.99</p>
                            <p className="ft-body-s" >of $400</p>
                        </div>
                    </div>
                    <div className="category__indicator">
                        <div></div>
                    </div>
                </li>
            </ul>
            <button className="budgets__add ft-2">Add new category <FontAwesomeIcon icon={faPlusCircle} /></button>
            <BottomBar budgets />
        </main>
    )
}

export default Budgets