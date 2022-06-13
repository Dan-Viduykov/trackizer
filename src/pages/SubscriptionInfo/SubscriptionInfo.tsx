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
                    <p className="sub__page-name font-body-large">Subscription info</p>
                    <button className="sub__btn-delete"><FontAwesomeIcon icon={faTrashCan} /></button>
                </div>
                <div className="sub__img">
                    <img src="" alt="" />
                </div>
                <h2 className="sub__title font-headline-6">Spotify</h2>
                <p className="sub__price font-headline-4">$5.99</p>
            </div>
            <div className="sub__info">
                <ol className="sub__settings border">
                    <li className="sub__settings-item">
                        <p className="sub__settings-name font-headline-2">Name</p>
                        <p className="sub__settings-description font-body-small">Spotify <FontAwesomeIcon icon={faAngleRight} /></p>
                    </li>
                    <li className="sub__settings-item">
                        <p className="sub__settings-name font-headline-2">Description</p>
                        <p className="sub__settings-description font-body-small">Music app <FontAwesomeIcon icon={faAngleRight} /></p>
                    </li>
                    <li className="sub__settings-item">
                        <p className="sub__settings-name font-headline-2">Category</p>
                        <p className="sub__settings-description font-body-small">Enterteintment <FontAwesomeIcon icon={faAngleRight} /></p>
                    </li>
                    <li className="sub__settings-item">
                        <p className="sub__settings-name font-headline-2">First payment</p>
                        <p className="sub__settings-description font-body-small">08.01.2022 <FontAwesomeIcon icon={faAngleRight} /></p>
                    </li>
                    <li className="sub__settings-item">
                        <p className="sub__settings-name font-headline-2">Currency</p>
                        <p className="sub__settings-description font-body-small">USD ($) <FontAwesomeIcon icon={faAngleRight} /></p>
                    </li>
                </ol>
                <Button className="sub__btn-save border" type="submit" btnType="Secondary">Save</Button>
            </div>
        </div>
    )
}

export default SubscriptionInfo