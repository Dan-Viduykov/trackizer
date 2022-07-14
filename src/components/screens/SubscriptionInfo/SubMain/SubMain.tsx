import { FC } from "react";
import styles from './SubMain.module.scss'
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../../../core/hooks/redux";
import Button from "../../../Button";

interface SubMainProps {
    idx: number;
}

const SubMain: FC<SubMainProps> = ({ idx }) => {
    const { name, description, category, datePayment, currency } = useAppSelector(state => state.appReducer.subscriptions[idx]);
    const uniqid = require('uniqid')
    
    return (
        <section className={styles.sub}>
            <ul className={`${styles.sub__params} border`}>
                <li className={styles.sub__parameter} key={uniqid()}>
                    <p className={`${styles.sub__name} ft__2`}>name </p>
                    <p className={`${styles.sub__description} ft__body_s`}>{name} <FontAwesomeIcon icon={faAngleRight} /></p>
                </li>
                <li className={styles.sub__parameter} key={uniqid()}>
                    <p className={`${styles.sub__name} ft__2`}>Description</p>
                    <p className={`${styles.sub__description} ft__body_s`}>{description} <FontAwesomeIcon icon={faAngleRight} /></p>
                </li>
                <li className={styles.sub__parameter} key={uniqid()}>
                    <p className={`${styles.sub__name} ft__2`}>Category</p>
                    <p className={`${styles.sub__description} ft__body_s`}> {category} <FontAwesomeIcon icon={faAngleRight} /></p>
                </li>
                <li className={styles.sub__parameter} key={uniqid()}>
                    <p className={`${styles.sub__name} ft__2`}>Date payment</p>
                    <p className={`${styles.sub__description} ft__body_s`}>{datePayment} <FontAwesomeIcon icon={faAngleRight} /></p>
                </li>
                <li className={styles.sub__parameter} key={uniqid()}>
                    <p className={`${styles.sub__name} ft__2`}>Currency</p>
                    <p className={`${styles.sub__description} ft__body_s`}> {currency} <FontAwesomeIcon icon={faAngleRight} /></p>
                </li>
            </ul>
            <Button className={`${styles.sub__btn} border`} type="submit" btnType="Secondary" >Save</Button>
        </section>
    )
}

export { SubMain }