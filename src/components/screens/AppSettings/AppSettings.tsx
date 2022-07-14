import { FC } from "react";
import styles from './AppSettings.module.scss'

import { useAppSelector } from "../../../core/hooks/redux";
import Header from "../../Header/Header";
import UserInfo from "./UserInfo/UserInfo";
import SettingsCategory from "./SettingsCategory/SettingsCategory";

const AppSettings: FC = () => {
    const { subscriptions, appearance } = useAppSelector(state => state.appSettingsReducer)

    return (
        <main className={`${styles.settings} section`}>
            <section className={styles.settings__header}>
                <Header style={{marginBottom: '44px'}} angleLeft title="Settings" />
                <UserInfo />
            </section>
            <ul className={styles.settings__categories}>
                <SettingsCategory category={subscriptions} categoryTitle="My Subscriptions" />
                <SettingsCategory category={appearance} categoryTitle="Appearance" />
            </ul>
        </main>
    )
}

export default AppSettings