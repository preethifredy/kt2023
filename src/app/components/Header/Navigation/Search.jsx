import React from 'react'
import { Button } from "react-bootstrap";

const Search = () => {
  return (
    <>
    <div className="nav-item position-relative searchBlock mx-3">
      <Button className="bg-transparent searchBtn border-0 py-0 font-normal">
        <i className="las la-search"></i>
      </Button>
    </div>
    </>
  )
}

export default Search
