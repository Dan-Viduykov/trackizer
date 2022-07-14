import { FC } from "react";
import styles from './SubscriptionInfo.module.scss' 

import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../core/hooks/redux";
import { ISub } from "../../../core/modules/IApp";
import { SubHeader } from "./SubHeader/SubHeader";
import { SubMain } from "./SubMain/SubMain";

const SubscriptionInfo: FC = () => {
    const params = useParams();

    const { subscriptions } = useAppSelector(state => state.appReducer);
    const idx = subscriptions.findIndex((sub: ISub) => sub.name === params.title);

    return (
        <main className={styles.subscription}>
            <SubHeader idx={idx} />
            <SubMain idx={idx} />
        </main>
    )
}

export default SubscriptionInfo