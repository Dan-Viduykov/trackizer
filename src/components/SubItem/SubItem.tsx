import { FC } from "react";
import styles from './SubItem.module.scss'
import { ISub } from "../../core/modules/IApp";
import { Link } from "react-router-dom";

interface SubItemProps {
    sub: ISub;
    logoMode: string;
    typeList?: boolean;
    className?: string;
}

const SubItem: FC<SubItemProps> = ({ sub, logoMode, typeList, className}) => {
    const { name, price, id, image } = sub;

    const logoImg = (
        <div className={`${styles.sub__image} img`}>
            {image.length !== 0 ? <img src={image} alt="name" /> : <img src="" alt="" />}
        </div>
    )
    const logoDate = (
        <div className={styles.sub__date}>
            <p className="ft__4">Jun</p>
            <p className="ft__2">25</p>
        </div>
    ) 
    return (
        <li className={`${styles.sub} ${typeList ? styles.sub_flex : null} ${className}`} key={id}>
            <Link className={styles.sub__link} to={`/sub-info/${name}`} >
                {logoMode === 'imgs' ? logoImg : logoDate}
                <p className={`${styles.sub__name} ft__2`}>{name}</p>
                <p className={`${styles.sub__price} ${typeList ? 'ft__4' : 'ft__2'}`}>${price}</p>
            </Link>
        </li>
    )
}

export {SubItem}