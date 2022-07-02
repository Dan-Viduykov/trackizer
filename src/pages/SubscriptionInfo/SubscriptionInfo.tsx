import React, { FC } from "react";
import './SubscriptionInfo.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import Button from "../../components/Button";
import HeaderTopMenu from "../../components/HeaderTopMenu";

import { useAppSelector } from "../../core/hooks/redux";
import { useParams } from "react-router-dom";

const SubscriptionInfo: FC = () => {
    const { subscriptions } = useAppSelector(state => state.appReducer)
    const params = useParams();

    const idx = subscriptions.findIndex(sub => sub.name === params.title)
    const { name, description, category, firstPayment, currency, price  } = subscriptions[idx]

    return (
        <div className="sub">
            <div className="sub__header">
                <HeaderTopMenu angleLeft title="Subscription info" trash/>
                <div className="sub__img">
                    <img src="" alt="" />
                </div>
                <h2 className="sub__title ft-6">{name}</h2>
                <p className="sub__price ft-4">${price}</p>
            </div>
            <div className="sub__info">
                <ul className="sub__settings border">
                    <li className="sub__settings-item" key={100}>
                        <p className="sub__settings-name ft-2">name </p>
                        <p className="sub__settings-description ft-body-s">{name} <FontAwesomeIcon icon={faAngleRight} /></p>
                    </li>
                    <li className="sub__settings-item" key={101}>
                        <p className="sub__settings-name ft-2">Description</p>
                        <p className="sub__settings-description ft-body-s">{description} <FontAwesomeIcon icon={faAngleRight} /></p>
                    </li>
                    <li className="sub__settings-item" key={102}>
                        <p className="sub__settings-name ft-2">Category</p>
                        <p className="sub__settings-description ft-body-s"> {category} <FontAwesomeIcon icon={faAngleRight} /></p>
                    </li>
                    <li className="sub__settings-item" key={103}>
                        <p className="sub__settings-name ft-2">First payment</p>
                        <p className="sub__settings-description ft-body-s">{firstPayment} <FontAwesomeIcon icon={faAngleRight} /></p>
                    </li>
                    <li className="sub__settings-item" key={104}>
                        <p className="sub__settings-name ft-2">Currency</p>
                        <p className="sub__settings-description ft-body-s"> {currency} <FontAwesomeIcon icon={faAngleRight} /></p>
                    </li>
                </ul>
                <Button className="sub__btn-save border" type="submit" btnType="Secondary">Save</Button>
            </div>
        </div>
    )
}

export default SubscriptionInfo