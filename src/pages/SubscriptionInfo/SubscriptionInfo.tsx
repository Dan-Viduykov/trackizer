import { FC } from "react";
import './SubscriptionInfo.scss' 

import { useAppSelector } from "../../core/hooks/redux";
import { useParams } from "react-router-dom";
import { ISub } from "../../core/modules/IApp";

import {SubHeader} from "./SubHeader/SubHeader";
import {SubMain} from "./SubMain/SubMain";

const SubscriptionInfo: FC = () => {
    const params = useParams();

    const { subscriptions } = useAppSelector(state => state.appReducer);
    const idx = subscriptions.findIndex((sub: ISub) => sub.name === params.title);

    return (
        <main className="subscription">
            <SubHeader idx={idx} />
            <SubMain idx={idx} />
        </main>
    )
}

export default SubscriptionInfo