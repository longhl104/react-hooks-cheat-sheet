import { Button } from "primereact/button";
import React, { useCallback, useState } from "react";

const Apple = ({ numApples, handleClick }) => {
    console.log("Apple is rendering");
    return (
        <>
            <div className="border-round border-1 p-2">
                I have {numApples} apples.
            </div>
            <div>
                <Button label="Add an apple" onClick={handleClick}></Button>
            </div>
        </>
    );
}

const Instructions = React.memo(props => {
    console.log("Instructions is rendering");

    return (
        <div className="text-color-secondary">
            Follow the instructions above
        </div>
    )
});

export default function UseCallback() {
    const [numApples, setNumApples] = useState(99);
    const someValue = "someValue";

    // const doSomething = () => {
    //     return someValue;
    // };
    const doSomething = useCallback(() => {
        return someValue;
    }, [someValue]);

    return (
        <>
            <h1>useCallback</h1>
            <p>
                useCallback returns a memoized callback. Wrapping a component with React.Memo() signals the intent to reuse code. This does not automatically extend to functions passed as parameters.
            </p>
            <p>
                React saves a reference to the function when wrapped with useCallback. Pass this reference as a property to new components to reduce rendering time.
            </p>

            <div className="flex flex-column gap-2">
                <Apple numApples={numApples} handleClick={() => setNumApples(numApples + 1)} />
                <Instructions doSomething={doSomething} />
            </div>
        </>
    );
}