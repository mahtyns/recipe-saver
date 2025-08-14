"use client"

import React from 'react'
import Button from '../atoms/Button'

interface HeaderProps {
    page?: string
}

export const Header = (props: HeaderProps) => {
  return (
    <header className={`header ${props.page ? `header--${props.page}` : null}`}>
        <div className='header__wrapper'>
        <div className='header__logo'>Logo</div>
        <nav className='header__nav'>
            <div className='header__nav-wrapper'>
                <ul className='header__navlist'>
                    <li className='header__link'>Your recipes</li>
                    <li className='header__link'>Your pantry</li>
                    <li className='header__link'>Your shopping list</li>
                </ul>
                <Button buttonText='Add new recipe' buttonType='primary' handleClick={()=>null}/>
            </div>
        </nav>
        </div>
    </header>
  )
}
