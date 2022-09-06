import React from 'react'

//Icons
import BoxIcon from '../assets/icons/box-icon.svg'
import ColorIcon from '../assets/icons/color-icon.svg'
import FontIcon from '../assets/icons/font-icon.svg'

export default function SideNav({collections, setCollection}) {
    const [activatedCollection, setActivatedCollection] = React.useState('color');

  return (
    <nav className='side-nav'>
        <div className={`nav-option ${activatedCollection === "color"?"active":""}`} onClick={() => {setCollection(collections.color); setActivatedCollection('color')}}>
            <img src={ColorIcon} alt="" />
        </div>
        <div className={`nav-option ${activatedCollection === "boxShadow"?"active":""}`} onClick={() => {setCollection(collections.boxShadow); setActivatedCollection('boxShadow')}}>
            <img src={BoxIcon} alt="" />
        </div>
        <div className={`nav-option ${activatedCollection === "fonts"?"active":""}`} onClick={() => {setCollection(collections.fonts); setActivatedCollection('fonts')}}>
            <img src={FontIcon} alt="" />
        </div>
    </nav>
  )
}
