import React, { Component } from "react";

function Header(props) {
    return <header>
        <h1>
            <a href="/" onClick={event => {
                event.preventDefault();
                props.setSelectedID(null);
                props.setSelectedController(null);
            }}>WEB</a>
        </h1>
    </header>
}

export default Header;