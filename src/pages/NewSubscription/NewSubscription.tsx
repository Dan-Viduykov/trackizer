import React, { FC } from "react";
import './NewSubscription.scss'

import { Carousel } from "antd";
import "antd/dist/antd.css";
import Button from "../../components/Button";
import HeaderTopMenu from "../../components/HeaderTopMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const NewSubscription: FC = () => {
    return (
        <div className="new-sub wrap">
            <div className="new-sub__choose">
                <HeaderTopMenu angleLeft title="New" />
                <h3 className="new-sub__title ft-7">Add new subscription</h3>
                <Carousel dots={false}>
                    <div className="new-sub__item"><img className="img" src="#" alt="logo"></img></div>
                    <div className="new-sub__item"><img className="img" src="#" alt="logo"></img></div>
                    <div className="new-sub__item"><img className="img" src="#" alt="logo"></img></div>
                </Carousel>
                <div className="new-sub__sub-name ft-2">HGBO GO</div>             
            </div>
            <div className="new-sub__description">
                <p className="ft-body-s">Description</p>
                <input className="ft-2 input" type="text" />
            </div>
            <div className="new-sub__price">
                <button className="new-sub__price-btn border"><FontAwesomeIcon icon={faMinus} /></button>
                <p className="new-sub__choose-price ft-5">$5.99</p>
                <button className="new-sub__price-btn border"><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <Button className="new-sub__btn-save" type="submit" btnType="Primary">Add this platform</Button>
        </div>
    )
}

export default NewSubscription 