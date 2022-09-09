import React, { useState } from "react"
import { CloseIcon, HamburgerIcon } from "@manskuy/icons"
import { HeaderDrawerWrapper, HeaderNavigationWrapper } from "../styles"

const HeaderDrawer = ({ children } = {}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <HeaderDrawerWrapper>
            {
                isOpen
                ? <HeaderNavigationWrapper>
                    <CloseIcon onClick={() => setIsOpen(false)} className='icon' />
                    {children}
                  </HeaderNavigationWrapper>
                : <HamburgerIcon onClick={() => setIsOpen(true)} />
            }
        </HeaderDrawerWrapper>
    )
}

export default HeaderDrawer
