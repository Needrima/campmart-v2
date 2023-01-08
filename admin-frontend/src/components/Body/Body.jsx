import React from 'react'
import './body.scss'
import adminUser from '../../assets/images/admin-user.jpeg'

const Header = ({children}) => {
  return (
    <section id='interface'>
        <div className='navigation'>
            <div className='nl'>
                <div className='search'>
                    <i className='far fa-search'></i>
                    <input type='text' placeholder='Enter Product ID' />
                </div>
            </div>

            <div className='profile'>
                <i className='far fa-bell'></i>
                <img src={adminUser} alt=""/>
            </div>
        </div>

        {children}
    </section>
  )
}

export default Header