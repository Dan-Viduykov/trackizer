import { FC } from "react";
import { useAppSelector } from "../../../core/hooks/redux";
import './UserCard.scss'

interface UserCardProps {
    className?: string;
}

const UserCard: FC<UserCardProps> = ({ className }) => {
    const { name, number, date } = useAppSelector(state => state.userReducer.creditCard)

    return (
        <section className={`${className} user-card`}>
            <div className="user-card__main border">
                <div className="user-card__type logo-40">
                    <img src="" alt="" />
                </div>
                <h4 className="user-card__title ft-3">Virtual Card</h4>
                <p className="user-card__name ft-1">{name}</p>
                <p className="user-card__number ft-3">{number}</p>
                <p className="user-card__date ft-2">{date}</p>
                <div className="user-card__chip logo-40">
                    <img src="" alt="" />
                </div>

                <svg className="user-card__circles">
                    <linearGradient id="SVGID_1" x1="1" y1="200" x2="150" y2="0">
                        <stop offset="0" stopColor="#fff" stopOpacity={0.1} />
                        <stop offset="1" stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <circle className="user-card__circle-big" cx="170" cy="290" r="190" fill="url(#SVGID_1)" />
                    <circle className="user-card__circle-small" cx="230" cy="40" r="130" fill="url(#SVGID_1)" />
                </svg>
            </div>
        </section>
    )
}

export {UserCard}