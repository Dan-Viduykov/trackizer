import { FC } from "react";
import { useAppDispatch } from "../../../../core/hooks/redux";
import { AppSlice } from "../../../../core/store/reducers/appReducer";
import styles from './SubsMode.module.scss'

const SubsMode: FC = () => {
    const { changeMode } = AppSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <fieldset className={styles.modes}>
            <input id="subscriptions" type="radio" name="mode" defaultChecked />
            <label
                htmlFor="subscriptions"
                className={`${styles.modes__item} ft__1 border`}
                onClick={() => dispatch(changeMode('imgs'))}>
                Your subscriptions
            </label>
            <input id="bills" type="radio" name="mode" />
            <label
                htmlFor="bills"
                className={`${styles.modes__item} ft__1 border`}
                onClick={() => dispatch(changeMode('dates'))}>
                Upcoming bills
            </label>
        </fieldset>
    )
}

export default SubsMode