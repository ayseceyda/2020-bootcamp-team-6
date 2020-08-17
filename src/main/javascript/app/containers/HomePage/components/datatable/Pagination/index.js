import React from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationComponent = () => {
    return( <Pagination>
        <Pagination.Prev/>
        <Pagination.Item>1</Pagination.Item>
        <Pagination.Item>2</Pagination.Item>
        <Pagination.Item>3</Pagination.Item>
        <Pagination.Next/>
    </Pagination>
    );
};

export default PaginationComponent;