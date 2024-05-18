import React from 'react'
import GetApi from './GetApi'
import PostMethod from './PostMethod'
import UpdateMethod from './UpdateMethod'
import DeleteMethod from './DeleteMethod'

const AllAPI = () => {
  return (
    <h2>
        {/* <GetApi></GetApi> */}
        <PostMethod></PostMethod>
        <UpdateMethod></UpdateMethod>
        <DeleteMethod></DeleteMethod>
    </h2>
  )
}

export default AllAPI