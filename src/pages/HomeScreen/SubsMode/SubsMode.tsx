import { FC } from "react";
import './SubsMode.scss'

import { useAppDispatch } from "../../../core/hooks/redux";
import { AppSlice } from "../../../core/store/reducers/appReducer";

const SubsMode: FC = () => {
    const { changeMode } = AppSlice.actions
    const dispatch = useAppDispatch()

    return (
        <fieldset className="subs-mode">
            <input id="subscriptions" type="radio" name="mode" defaultChecked />
            <label className="subs-mode__item ft-1 border" htmlFor="subscriptions" onClick={() => dispatch(changeMode('imgs'))}>Your subscriptions</label>
            <input id="bills" type="radio" name="mode" />
            <label htmlFor="bills" className="subs-mode__item ft-1 border" onClick={() => dispatch(changeMode('dates'))}>Upcoming bills</label>
        </fieldset>
    )
}

export default SubsMode