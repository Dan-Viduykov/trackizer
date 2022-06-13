import { faCreditCardAlt } from "@fortawesome/free-regular-svg-icons";
import { faCalendarDays, faHouse, faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import './BottomBar.scss'

const BottomBar: FC = () => {
    return (
        <div>
           BottomBar 
           <FontAwesomeIcon icon={faListUl} />
           <FontAwesomeIcon icon={faHouse} />
           <FontAwesomeIcon icon={faCalendarDays} />
           <FontAwesomeIcon icon={faCreditCardAlt} />
        </div>
    )
}

export default BottomBar