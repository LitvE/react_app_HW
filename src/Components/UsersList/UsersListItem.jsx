import React from "react";
import style from "../UsersList/UsersListItem.module.scss";

function UsersListItem (props){
    const{
        user: {name, surname, photo},
        clickHandler,
    } = props;

    return (
        <li onClick={clickHandler}>
            <div className={style.container}>
                <div>
                    <img src={photo} alt="photo" />
                </div>
                <div>
                    <p>{name}</p>
                    <p>{surname}</p>
                </div>
            </div>
         </li>
    );
}

export default UsersListItem;