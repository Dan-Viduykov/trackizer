import React, { FC } from "react";
import './NewSubscription.scss'

import "antd/dist/antd.css";
import { Carousel } from "antd";

import HeaderTopMenu from "../../components/HeaderTopMenu";
import NewSubForm from "./NewSubForm";

const NewSubscription: FC = () => {
    return (
        <main className="new-sub">
            <section className="new-sub__choose section bookmark">
                <HeaderTopMenu angleLeft title="New" />
                <h3 className="new-sub__title ft-7">Add new subscription</h3>
                <Carousel dots={false}>
                    <div className="new-sub__item"><img className="img" src="#" alt="logo"></img></div>
                    <div className="new-sub__item"><img className="img" src="#" alt="logo"></img></div>
                    <div className="new-sub__item"><img className="img" src="#" alt="logo"></img></div>
                </Carousel>
                <div className="new-sub__sub-name ft-2">HGBO GO</div>             
            </section>
            <section className="section">
                <NewSubForm />
            </section>
        </main>
    )
}

export default NewSubscription 