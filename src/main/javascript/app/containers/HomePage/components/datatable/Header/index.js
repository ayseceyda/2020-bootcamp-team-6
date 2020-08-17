import React from "react";

const Header = ({headers}) =>{

    return(
        <thead className = "thead-dark">
        <tr>
            {headers.map(head => (<th key= {head.field}>{head.name}</th>))}

        </tr>
    </thead>
    );
};


export default Header;