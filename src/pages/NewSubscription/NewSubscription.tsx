import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import Button from "../../components/Button";
import './NewSubscription.scss'

const NewSubscription: FC = () => {
    return (
        <div className="new-sub wrap">
            <div className="new-sub__choose">
            <div className="new-sub__top">
                    <button className="new-sub__arrow-back"><FontAwesomeIcon icon={faAngleLeft} /></button>
                    <p className="new-sub__page-name font-body-large">New</p>
                </div>
                <div className="new-sub__title">Add new subscription</div>
                <div className="new-sub__carousel">
                    <ul className="new-sub__list">
                        <li className="new-sub__item"><img src="" alt="" /></li>
                        <li className="new-sub__item"><img src="" alt="" /></li>
                        <li className="new-sub__item"><img src="" alt="" /></li>
                    </ul>
                </div>
                <div className="new-sub__sub-name">HGBO GO</div>             
            </div>
            <div className="new-sub__description">
                <p className="new-sub__text">Description</p>
                <input type="text" />
            </div>
            <div className="new-sub__price">
                <button className="new-sub__subtract">-</button>
                <div className="new-sub__choose-price">$5.99</div>
                <button className="new-sub__add">+</button>
            </div>
            <Button className="new-sub__btn-save" type="submit" btnType="Primary">Add this platform</Button>
        </div>
    )
}

export default NewSubscription 