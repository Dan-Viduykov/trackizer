import { FC } from "react";
import './BudgetsIndicator.scss'

import HeaderTopMenu from "../../../components/HeaderTopMenu";

interface BudgetsIndicatorProps {
    className: string
}

const BudgetsIndicator: FC<BudgetsIndicatorProps> = ({ className }) => {
    return (
        <section className={`${className} indicator`}>
            <HeaderTopMenu title="Spending & Budgets" gear/>
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

export { BudgetsIndicator }