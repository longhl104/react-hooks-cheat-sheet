import { Button } from "primereact/button";
import React, { useMemo, useState } from "react";

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

export default function UseMemo() {
    const [numApples, setNumApples] = useState(99);
    // const doSomething = () => {
    //     console.log("Do something!")
    // }
    const doSomething = useMemo(() => {
        console.log("Do something!")
    }, [])

    return (
        <>
            <h1>useMemo</h1>
            <p>
                The useMemo function returns a memoized value. useMemo is different from useCallback in that it internalizes return values instead of entire functions. Rather than passing a handle to the same function, React skips the function and returns the previous result, until the parameters change.
            </p>
            <p>
                This allows you to avoid repeatedly performing potentially costly operations until necessary. Use this method with care, as any changing variables defined in the function do not affect the behavior of useMemo. If you’re performing timestamp additions, for instance, this method does not care that the time changes, only that the function parameters differ.
            </p>

            <div className="flex flex-column gap-2">
                <Apple numApples={numApples} handleClick={() => setNumApples(numApples + 1)} />
                <Instructions doSomething={doSomething} />
            </div>
        </>
    );
}