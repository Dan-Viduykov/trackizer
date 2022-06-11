import React, { FC } from "react";
import './Settings.scss'

import { faAngleLeft, faAngleRight, faCloudUploadAlt, faUsersViewfinder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Switch } from 'antd';
import "antd/dist/antd.css";
import Button from "../../components/Button";

const Settings: FC = () => {
    return (
        <div className="settings">
            <div className="settings__header">
                <div className="settings__top">
                    <button className="settings__arrow-back"><FontAwesomeIcon icon={faAngleLeft} /></button>
                    <p className="settings__page-name">Settings</p>
                </div>
                <div className="settings__user">
                    <div className="settings__img">
                        <img src="" alt="" />
                    </div>
                    <p className="settings__user-name">John Doe</p>
                    <p className="settings__mail" >j.doe@gmail.com</p>
                    <Button className="settings__btn-edit" type="submit" btnType="Secondary" >Edit profile</Button>
                </div>
            </div>
            <ul className="settings__category">
                <li className="settings__category-item">
                    <h4 className="settings__category-title" >General</h4>
                    <ul className="settings__list">
                        <li className="settings__item">
                            <FontAwesomeIcon className="settings__item-icon" icon={faUsersViewfinder} />
                            <p className="settings__item-name">Security</p>
                            <p className="settings__item-description">FaceID <FontAwesomeIcon className="angle-right" icon={faAngleRight} /></p>
                        </li>
                        <li className="settings__item">
                            <FontAwesomeIcon className="settings__item-icon" icon={faCloudUploadAlt} />
                            <p className="settings__item-name">iCloud Sync</p>
                            <Switch defaultChecked />
                        </li>
                    </ul>
                </li>
                <li className="settings__category-item">
                    <h4 className="settings__category-title" >My subscriptions</h4>
                    <ul className="settings__list">
                        <li className="settings__item">
                            <FontAwesomeIcon className="settings__item-icon" icon={faUsersViewfinder} />
                            <p className="settings__item-name">Security</p>
                            <p className="settings__item-description">FaceID <FontAwesomeIcon className="angle-right" icon={faAngleRight} /></p>
                        </li>
                        <li className="settings__item">
                            <FontAwesomeIcon className="settings__item-icon" icon={faUsersViewfinder} />
                            <p className="settings__item-name">Security</p>
                            <p className="settings__item-description">FaceID <FontAwesomeIcon className="angle-right" icon={faAngleRight} /></p>
                        </li>
                        <li className="settings__item">
                            <FontAwesomeIcon className="settings__item-icon" icon={faUsersViewfinder} />
                            <p className="settings__item-name">Security</p>
                            <p className="settings__item-description">FaceID <FontAwesomeIcon className="angle-right" icon={faAngleRight} /></p>
                        </li>
                    </ul>
                </li>
                <li className="settings__category-item">
                    <h4 className="settings__category-title" >Appearance</h4>
                    <ul className="settings__list">
                        <li className="settings__item">
                            <FontAwesomeIcon className="settings__item-icon" icon={faUsersViewfinder} />
                            <p className="settings__item-name">Security</p>
                            <p className="settings__item-description">FaceID <FontAwesomeIcon className="angle-right" icon={faAngleRight} /></p>
                        </li>
                        <li className="settings__item">
                            <FontAwesomeIcon className="settings__item-icon" icon={faUsersViewfinder} />
                            <p className="settings__item-name">Security</p>
                            <p className="settings__item-description">FaceID <FontAwesomeIcon className="angle-right" icon={faAngleRight} /></p>
                        </li>
                        <li className="settings__item">
                            <FontAwesomeIcon className="settings__item-icon" icon={faUsersViewfinder} />
                            <p className="settings__item-name">Security</p>
                            <p className="settings__item-description">FaceID <FontAwesomeIcon className="angle-right" icon={faAngleRight} /></p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Settings