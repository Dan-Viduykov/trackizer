import { FC, ReactElement } from "react";
import SettingsItem from "../SettingsItem/SettingsItem";
import style from './SettingsCategory.module.scss';

interface SettingsCategoryProps {
    category: any;
    categoryTitle: string;
}

const SettingsCategory: FC<SettingsCategoryProps> = (props) => {
    const { category, categoryTitle } = props;
    
    let elements: ReactElement[] = [];

    const items = (obj: any) => {
        for (let key in obj) {
            if(obj.hasOwnProperty(key)){
                elements.push(<SettingsItem setup={obj[key]} key={obj[key].title} />)
            }
        }
    }

    items(category)

    return (
        <li className={style.item}>
            <h4 className={`${style.item__title} ft__2`} >{categoryTitle}</h4>
            <ul className={`${style.item__list} border`}>
                { elements.map(element => element) }
            </ul>
        </li>
    )
}

export default SettingsCategory