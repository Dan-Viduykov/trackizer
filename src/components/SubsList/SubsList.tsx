import { FC } from "react";
import styles from './SubsList.module.scss'
import { SubItem } from "../SubItem/SubItem";
import { useAppSelector } from "../../core/hooks/redux";
import { Empty } from "antd";

interface SubsListProps {
    typeList?: boolean;
}

const SubsList: FC<SubsListProps> = ({ typeList }) => {
    const { subscriptions, logoMode } = useAppSelector(state => state.appReducer);

    return (
        <ul className={`${styles.subs} ${typeList ? styles.subs_flex : null}`}>
            {
                subscriptions.length > 0 ?
                subscriptions.map(sub => <SubItem className={styles.subs__item} sub={sub} logoMode={logoMode} key={sub.id}/>) : 
                <Empty />
            }
        </ul>
    )
}

export default SubsList