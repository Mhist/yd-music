import React, { memo } from 'react'
import { Link } from "react-router-dom"
export default memo(function YDAppHeader () {
  return (
    <div>
      <Link to="/mine">Visit mine</Link>
      <Link to="/discover">Visit discover</Link>
      <Link to="/friend">Visit friend</Link>
    </div>
  )
})

