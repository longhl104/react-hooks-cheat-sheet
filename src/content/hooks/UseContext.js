import { createContext, useContext, useState } from "react"

const NameContext = createContext();

const Component1 = () => {
    const [name] = useState("Duy Long Nguyen");

    return (
        <NameContext.Provider value={name}>
            <div className="border-round border-1 p-2">
                <h2>{`Hello ${name}!`}</h2>
                <Component2 />
            </div>
        </NameContext.Provider>
    )
}

const Component2 = () => {
    return (
        <div className="border-round border-1 p-2">
            <h2>Component2</h2>
            <Component3 />
        </div>
    )
}

const Component3 = () => {
    return (
        <div className="border-round border-1 p-2">
            <h2>Component3</h2>
            <Component4 />
        </div>
    )
}

const Component4 = () => {
    return (
        <div className="border-round border-1 p-2">
            <h2>Component4</h2>
            <Component5 />
        </div>
    )
}

const Component5 = () => {
    const name = useContext(NameContext);

    return (
        <div className="border-round border-1 p-2">
            <h2>{`Hello ${name}, again!`}</h2>
        </div>
    )
}

export default function UseContext() {
    return (
        <>
            <h1>useContext</h1>
            <p>useContext saves you the stress of having to rely on a Context consumer. React Context has a simpler API when compared to MyContext.Consumer and the render props API it exposes.</p>
            <p>Context is React's way of handling shared data between multiple components.</p>
            <Component1 />
        </>
    )
}