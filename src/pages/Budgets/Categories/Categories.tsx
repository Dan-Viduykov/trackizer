import { FC } from "react";
import './Categories.scss'

import { faAutomobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CategoriesProps {
    className: string;
}

const Categories: FC<CategoriesProps> = ({ className }) => {
    return (
        <ul className={`${className} categories`}>
                <li className="categories__category category border">  
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
    )
}

export {Categories}