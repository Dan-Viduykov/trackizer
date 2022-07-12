import { FC } from "react";
import './CategoriesIndicator.scss'
import Header from "../../../components/Header/Header";

interface CategoriesIndicatorProps {
    className: string;
}

const CategoriesIndicator: FC<CategoriesIndicatorProps> = ({ className }) => {
    return (
        <section className={`${className} indicator`}>
            <Header title="Spending & Budgets" gear/>
            <div className="indicator__lines">
                <div className="indicator__line"></div>
                <div className="indicator__line"></div>
                <div className="indicator__line"></div>
            </div>
            <p className="indicator__total ft-5">$82,97</p>
            <p className="indicator__capital ft-body-s">of $2,000 budget</p>
        </section>
    )
}

export { CategoriesIndicator }