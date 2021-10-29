import React from "react";
import classNames from "classnames";
import style from "../UsersList/UsersListItem.module.scss";

function UsersListItem (props){
    const{
        user: {name, surname, photo, isSelected},
        clickHandler, deleteHandler,
    } = props;

    const containerStyle = classNames(style.container,{
        [style.blueColor]: !isSelected,
        [style.redColor]: isSelected,
    });

    return (
        <li>
            <div className={containerStyle}>
                <div>
                    <img src={photo} alt="userPhoto" />
                </div>
                <div>
                    <p>{name}</p>
                    <p>{surname}</p>
                </div>
                <button onClick={clickHandler}>Select / Unselect</button>
                <button onClick={deleteHandler}>Delete</button>
            </div>
         </li>
    );
}

export default UsersListItem;