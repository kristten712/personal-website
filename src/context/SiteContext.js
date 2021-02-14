import React, { useContext, useState, useEffect } from 'react'
import { bio, workExperience, education } from './Text'

const SiteContext = React.createContext()

export function useSite() {
    return useContext(SiteContext)
}

export function SiteProvider({ children }) {
    const [browserHeight, setBrowserHeight] = useState()
    const [browserWidth, setBrowserWidth] = useState()

    function updateDimensions() {
        setBrowserHeight(window.innerHeight)
        setBrowserWidth(window.innterWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions(this));
        updateDimensions()
    }, [])


    const value = {
        browserHeight,
        browserWidth,
        bio,
        workExperience,
        education
    }

    return (
        <SiteContext.Provider value={value}>
            {children}
        </SiteContext.Provider>
    )
}