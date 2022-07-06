import { FC } from "react";
import './NewSubscription.scss'

import HeaderTopMenu from "../../components/HeaderTopMenu";
import { UploadImage } from "./UploadImage";
import NewSubForm from "./NewSubForm";

const NewSubscription: FC = () => {
    return (
        <main className="new-sub">
            <section className="new-sub__choose section bookmark">
                <HeaderTopMenu angleLeft title="New" />
                <h3 className="new-sub__title ft-7">Add new subscription</h3>
                <UploadImage />
                <div className="new-sub__sub-name ft-2">HGBO GO</div>             
            </section>
            <section className="section">
                <NewSubForm />
            </section>
        </main>
    )
}

export default NewSubscription 