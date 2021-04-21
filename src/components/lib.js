import styled from 'styled-components'

const style = '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)'
let MainPanel = styled.div(() => (
    {
        padding: '30px 0px',
        display:'grid',
        boxShadow: style,
        placeItems: 'center',
        backgroundColor: 'white', borderRadius: '15px',
    }
))

let Panel = styled.div`
    width: 70vw;
    height: 60vh;
    overflow-x: hidden;
    overflow-y: scroll;
`

let FullPageSpinner = () => {
    return (
        <div style={{display: 'grid', placeItems: 'center', height: '100vh'}}>
            <Loading>Loading...</Loading>
        </div>
    )
}

let FullPageErrorFallback = ({error}) => {
    return (
        <div style={{display: 'grid', placeItems: 'center', height: '100vh'}}>
            <p>There's a problem. Try refreshing the page.</p>
            <pre>{error.message}</pre>
        </div>
    )
}

let Loading = styled.h1`
    ${'' /* background-Image: linear-gradient(to bottom right, #b13cff,#fd9d52);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */}
    font-size: 28px;
`

let InfoList = styled.ul`
     line-height: 25px;
    li {
        list-style: none;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
    }
    
    span:nth-child(2){
        padding-left: ${({pl}) => pl ? pl : "5px"};
    }
`

let Button = styled.button`
    border: none;
    background: transparent;
    font-size: 45px;
    color: #a09898;
    font-weight: 700;
    transform: rotate(90deg);
    :hover {
        color: black;
        cursor: pointer;
    }
`

export {
    Panel,
    Button,
    InfoList,
    MainPanel,
    FullPageSpinner,
    FullPageErrorFallback,
}