import React from 'react'
import { Badge } from '@radix-ui/themes'

function CustomBadge({ label, value }) {
  return (
    <div className='flex'> 
      <div>
        <Badge style={{ width: "130px" }}>{label}</Badge>
      </div>
      <div className=''> 
      {/* //FIXME 3 digit number makes the badge grow */}
        <Badge >{value}</Badge>
      </div>
    </div>
  )
}

export default CustomBadge