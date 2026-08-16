"use client"

import { Button } from '@/app/components/shared/button/Button';
import { siteContent } from '@/app/lib/content/en/site-content'

export const Header = () => {
    return (
        <div className="header">
            <div className="header__wrapper">
                <div className="header__logo">{siteContent.navbar.logo}</div>
                <div className="header__navigation">
                    <ul className="header__navigation__list">
                        {
                            siteContent.navbar.navigation.map(item => <li className="header__navigation__item" key={item.linkName}><a href={item.linkUrl}>{item.linkName}</a></li>)
                        }
                    </ul>
                    <Button text={siteContent.navbar.button} variant={'primary'} handleClick={() => null} />
                    <button className="header__burger"><img src={'/assets/images/ui/menu.png'} /></button>
                </div>
            </div>
        </div>
    )
}
