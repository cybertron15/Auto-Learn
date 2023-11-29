import React from 'react'
import {Badge} from '@radix-ui/themes'

function CustomBadge({label,value}) {
  return (
    <div className='flex'>
    <div>
      <Badge color="lime" style={{width:"130px"}}>{label}</Badge>
    </div>
    <div className=''>
      <Badge color="lime">{value}</Badge>
    </div>
  </div>
  )
}

export default CustomBadge