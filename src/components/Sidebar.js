import React from 'react'
import { DASHBOARD_SIDEBAR_LINKS } from '../constants/indexes'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'

const linkClasses='flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-neutral-900 w-60 p-3 text-white'>
        <div>Icons</div>
        <div className='flex-1 py-8 flex flex-col gap-0.5'>
            {DASHBOARD_SIDEBAR_LINKS.map((item)=>(
              <SidebarLink key={item.key} item={item}/>
            ))}
        </div>
        <div>
            <span className='text-sm text-slate-100'>Jobie Job Portal Admin Dashboard </span>
            <span className='text-xs text-slate-100'>©2020 All Rights Reserved</span><br/>
            <span className='text-xs text-slate-100'>Made with ❤ by Harshdeep</span>
        </div>
    </div>
  )
}

function SidebarLink({item}){
    const {pathname}=useLocation()
    return(
        <Link to={item.path} className={classNames(pathname === item.path ? 'bg-neutral-700 text-white': 'text-neutral-400',linkClasses)}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}

export default Sidebar