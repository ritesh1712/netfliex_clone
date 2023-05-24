import React from 'react'

function Header() {

const activeClass = {
    color: 'white',
    opacity: 1,
    fontWeight: 500,
}

  return (
    <div  >
    <div className='bg-black flex justify-between items-center max-w-[1270px] w-full m-auto fixed top-0 right-0' >
<div className='flex space-x-16'>
    <img src="https://otakukart.com/wp-content/uploads/2020/12/Netflix.png" alt="" className='h-20' />

</div>
<div className='text-white flex w-32 items-center justify-between pr-3'>
<i className="material-icons cursor-pointer">search</i>
<i className="material-icons cursor-pointer">notifications</i>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="" className='h-8 cursor-pointer' />
</div>
    </div>
    </div>
  )
}

export default Header