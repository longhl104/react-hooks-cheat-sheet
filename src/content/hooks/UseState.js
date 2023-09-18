import { useEffect, useState } from "react";
import { Button } from 'primereact/button';

export default function UseState() {
    useEffect(() => {
        document.title = "useState Hook";
    }, []);

    const [numApples, setNumApples] = useState(5);
    const [company, setCompany] = useState({
        numEmployees: 10,
        numDepartments: 2,
    });

    const increaseByCompanyField = field => {
        setCompany({
            ...company,
            [field]: company[field] + 1,
        });
    }

    return (
        <>
            <h1> useState </h1>
            <p> useState lets you use local state within a function component. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
            <p> I have {numApples} apples. </p>
            <Button label="Add an apple" onClick={() => setNumApples(numApples => numApples + 1)}></Button>
            <p>React useState and setState don’t make changes directly to the state object; they create queues to optimize performance, which is why the changes don’t update immediately.</p>

            <h2> Use object state variable </h2>
            <p> The company has {company.numEmployees} employees.</p>
            <p> The company has {company.numDepartments} departments.</p>
            <div className="flex flex-wrap gap-2">
                <Button label="Add an employee" onClick={() => increaseByCompanyField("numEmployees")}></Button>
                <Button label="Add a department" onClick={() => increaseByCompanyField("numDepartments")}></Button>
            </div>
        </>
    );
}