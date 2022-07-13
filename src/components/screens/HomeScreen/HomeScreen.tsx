import { FC } from "react";
import styles from './HomeScreen.module.scss'

import SubsList from "../../../components/SubsList/SubsList";
import Header from "../../../components/Header/Header";

import Footer from "../../../components/Footer/Footer";
import HomeTotal from "./HomeTotal/HomeTotal";
import Statistics from "./Statistics/Statistics";
import SubsMode from "./SubsMode/SubsMode";

const HomeScreen: FC = () => {
    return (
        <main className={`${styles.home} shadow-screen`}>
            <section className={`section bookmark`}>
                <Header gear/>
                <div className={styles.home__counter}>
                    <HomeTotal />
                    <Statistics />
                </div>
            </section>
            <section className={`section`}>
                <div className={styles.home__subs}>
                    <SubsMode />
                    <div className={styles.home__list}>
                        <SubsList />
                    </div>
                </div>
                <Footer />
            </section>
        </main>
    )
}

export default HomeScreen