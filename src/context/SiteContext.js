import React, { useContext, useState, useEffect } from 'react'
import { bio, workExperience, education, projects } from './Text'

const SiteContext = React.createContext()

export function useSite() {
    return useContext(SiteContext)
}

export function SiteProvider({ children }) {
    const [browserHeight, setBrowserHeight] = useState()

    function updateDimensions() {
        setBrowserHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions(this));
        updateDimensions()
    }, [])


    const value = {
        browserHeight,
        bio,
        projects,
        workExperience,
        education
    }

    return (
        <SiteContext.Provider value={value}>
            {children}
        </SiteContext.Provider>
    )
}