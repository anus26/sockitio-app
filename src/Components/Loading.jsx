import React from 'react'

const Loading = () => {
  return (
<>

<div className="flex w-full h-screen items-center
 bg-slate-700 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
</>
  )
}

export default Loading