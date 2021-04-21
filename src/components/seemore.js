import * as React from 'react'
import Grade from './grade'

const SeeMoreContext = React.createContext()

let SeeMoreProvider = (props) => {
    let [isOpen, setIsOpen] = React.useState(false)
    let toggle = () => setIsOpen(!isOpen)
    return <SeeMoreContext.Provider value={[isOpen, toggle]}  {...props}/>
}

let useSeeMore = () => {
    const context = React.useContext(SeeMoreContext)
    if(context === undefined){
        throw new Error("useSeeMore must be used within a SeeMoreProvider")
    }
    return context
}

let SeeMoreOpenButton = ({children: child}) => {
    let [, toggle] = useSeeMore()
    return React.cloneElement(child, {
        onClick: () => toggle()
    })
}

let SeeMoreCloseButton = ({children: child}) => {
    let [, toggle] = useSeeMore()
    return React.cloneElement(child, {
        onClick: () => toggle()
    })
}

let SeeMoreToggle = ({open, close}) => {
    let [isOpen] = useSeeMore()
    return !isOpen ? open : close
}

let SeeMoreContent = ({children: child, grades}) => {
    let [isOpen] = useSeeMore()
    return <Grade isOpen={isOpen} grades={grades} />
}


export {

    SeeMoreToggle,
    SeeMoreContent,
    SeeMoreProvider,
    SeeMoreOpenButton,
    SeeMoreCloseButton,

}