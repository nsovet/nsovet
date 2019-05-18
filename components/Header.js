import React from 'react';

import css from '../css/header.scss'

class Header extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            closed: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({closed: !this.state.closed})
    }
    
    render(){
        return(
            <div className={css.headerWrapper}>
                <div className={css.header}>
                    <a className={css.headerLogo} href='/'><img src='/static/logo.svg' /></a>
                    <div className={css.headerMenuWrapper}>
                        <div className={css.headerMenu}>
                            <a 
                                // className={css.headerMenuActive}
                                href='/#about'>О нас</a>
                            <a href='/#promises'>Приемущества</a>
                            <a href='/#services'>Услуги</a>
                            <a href='/#map'>Контакты</a>
                        </div>
                        <a className={css.headerCallWrapper} href='tel:8-499-323-43-95'>
                            <img src='/static/phone.svg' />
                            <span>8 (499) 323-43-95</span>
                        </a>
                    </div>
                </div>
                <div className={css.mobileHeader}>
                    <div className={this.state.closed ? css.headerStripe : css.none}>
                        <img src='/static/hamburger.svg' className={css.hamburger} onClick={this.handleClick}/>
                        <img src='/static/logo.svg' className={css.logo}/>
                    </div>
                    <div className={this.state.closed ? css.none : css.headerMenu}>
                        <div className={css.heading}>
                            <img src='/static/closeMenu.svg' className={css.close} onClick={this.handleClick}/>
                            <a href='/'><img src='/static/logoWhite.svg' className={css.logo}/></a>
                        </div>
                        <div className={css.headerContent}>
                            <div className={css.menuLinks}>
                                <a 
                                    // className={css.headerMenuActive}
                                    href='/#about' onClick={this.handleClick}>О нас</a>
                                <a href='/#promises' onClick={this.handleClick}>Приемущества</a>
                                <a href='/#services' onClick={this.handleClick}>Услуги</a>
                                <a href='/#map' onClick={this.handleClick}>Контакты</a>
                            </div>
                            <a className={css.headerCallWrapper} href='tel:8-499-323-43-95'>
                                <img src='/static/phone.svg' />
                                <span>8 (499) 323-43-95</span>
                            </a>
                            <div className={css.adress}>Москва, Каширское шоссе,<br/>дом 44, корп. 1 </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header