import React from "react";
import classNames from "classnames";
import styles from "./User.module.scss";


function User (props){
    const {name, age, isSelected, clickHandler} = props;

    const switchSelected = () =>{
        clickHandler();
    }

    const userArticleStyles = classNames(styles.userCard, {[styles.selectedUser]: isSelected});
        
    const userArticleInlineStyles = {
        display: "flex",
        flexDirection: "column", 
        alignItems: "center",
    }
    return(
        <article style={userArticleInlineStyles} className={userArticleStyles} onClick={switchSelected}>
        <div>{name}</div>
        <div>{age}</div>
    </article>
    );
}

export default User;