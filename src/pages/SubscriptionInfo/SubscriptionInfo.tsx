import React, { FC } from "react";
import './SubscriptionInfo.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";

const SubscriptionInfo: FC = () => {
    return (
        <div className="sub">
            <div className="sub__header">
                <div className="sub__actions">
                    <button className="sub__arrow-back"><FontAwesomeIcon icon={faAngleLeft} /></button>
                    <p className="sub__page-name">Subscription info</p>
                    <button className="sub__btn-delete"><FontAwesomeIcon icon={faTrashCan} /></button>
                </div>
                <div className="sub__img">
                    <img src="" alt="" />
                </div>
                <h2 className="sub__title">Spotify</h2>
                <p className="sub__price">$5.99</p>
            </div>
            <div className="sub__info">
                <ol className="sub__settings">
                    <li className="sub__settings-item">
                        <p className="sub__settings-name">Name</p>
                        <p className="sub__settings-description">Spotify <FontAwesomeIcon icon={faAngleRight} /></p>
                    </li>
                    <li className="sub__settings-item">
                        <p className="sub__settings-name">Description</p>
                        <p className="sub__settings-description">Music app <FontAwesomeIcon icon={faAngleRight} /></p>
                    </li>
                    <li className="sub__settings-item">
                        <p className="sub__settings-name">Category</p>
                        <p className="sub__settings-description">Enterteintment <FontAwesomeIcon icon={faAngleRight} /></p>
                    </li>
                    <li className="sub__settings-item">
                        <p className="sub__settings-name">First payment</p>
                        <p className="sub__settings-description">08.01.2022 <FontAwesomeIcon icon={faAngleRight} /></p>
                    </li>
                    <li className="sub__settings-item">
                        <p className="sub__settings-name">Currency</p>
                        <p className="sub__settings-description">USD ($) <FontAwesomeIcon icon={faAngleRight} /></p>
                    </li>
                </ol>
                <Button className="sub__btn-save" type="submit" btnType="Secondary">Save</Button>
            </div>
        </div>
    )
}

export default SubscriptionInfo