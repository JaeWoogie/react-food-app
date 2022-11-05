import React, { Fragment } from "react";

import mealsImage from '../../assets/meals.jpeg'
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Jae's React Fun!!</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Table food for our restaurant :)))"/>
        </div>
    </Fragment>
}

export default Header;