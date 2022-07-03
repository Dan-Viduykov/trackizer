import { FC } from "react";
import './SubMain.scss'
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../../../components/Button";
import { useAppSelector } from "../../../core/hooks/redux";

interface SubMainProps {
    idx: number;
}

const SubMain: FC<SubMainProps> = ({ idx }) => {
    const { name, description, category, firstPayment, currency } = useAppSelector(state => state.appReducer.subscriptions[idx]);
    
    return (
        <section className="sub-info">
            <ul className="sub-info__settings sub-settings border">
                <li className="sub-settings__item" key={100}>
                    <p className="sub-settings__name ft-2">name </p>
                    <p className="sub-settings__description ft-body-s">{name} <FontAwesomeIcon icon={faAngleRight} /></p>
                </li>
                <li className="sub-settings__item" key={101}>
                    <p className="sub-settings__name ft-2">Description</p>
                    <p className="sub-settings__description ft-body-s">{description} <FontAwesomeIcon icon={faAngleRight} /></p>
                </li>
                <li className="sub-settings__item" key={102}>
                    <p className="sub-settings__name ft-2">Category</p>
                    <p className="sub-settings__description ft-body-s"> {category} <FontAwesomeIcon icon={faAngleRight} /></p>
                </li>
                <li className="sub-settings__item" key={103}>
                    <p className="sub-settings__name ft-2">First payment</p>
                    <p className="sub-settings__description ft-body-s">{firstPayment} <FontAwesomeIcon icon={faAngleRight} /></p>
                </li>
                <li className="sub-settings__item" key={104}>
                    <p className="sub-settings__name ft-2">Currency</p>
                    <p className="sub-settings__description ft-body-s"> {currency} <FontAwesomeIcon icon={faAngleRight} /></p>
                </li>
            </ul>
            <Button className="sub-info__btn-save border" type="submit" btnType="Secondary" >Save</Button>
        </section>
    )
}

export { SubMain }