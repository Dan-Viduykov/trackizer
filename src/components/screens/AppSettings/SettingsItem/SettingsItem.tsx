import { faAngleRight, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import styles from './SettingsItem.module.scss';

interface SettingsItemProps {
    setup: {
        icon: IconDefinition,
        title: string,
        mods: any
    }
}

const SettingsItem: FC<SettingsItemProps> = ({ setup }) => {
    const { icon, title, mods } = setup
    return (
        <li className={styles.item}>
            <FontAwesomeIcon className={styles.item__icon} icon={icon} />
            <p className={`${styles.item__name} ft__2`}>{title}</p>
            <p className={`${styles.item__description} ft__body_s`}>{mods} <FontAwesomeIcon className={styles.item__angle} icon={faAngleRight} /></p>
        </li>
    )
}

export default SettingsItem