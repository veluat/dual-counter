import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Display} from "./Display";
import {Button} from "./Button";
import {DisplayValue} from "./DisplayValue";

function App() {
    const [STARTVALUE, setSTARTVALUE] = useState<number>(0);

    const [MAXVALUE, setMAXVALUE] = useState<number>(5);

    // useEffect на стартовое значение

    useEffect(() => {
        let newSTARTVALUE = localStorage.getItem('valueStart')
        if (newSTARTVALUE) {
            let newValue = JSON.parse(newSTARTVALUE)
            setSTARTVALUE(newValue)

        }
    }, [])

    useEffect(() => {
        localStorage.setItem('valueStart', JSON.stringify(STARTVALUE))
    }, [STARTVALUE])

    // useEffect на максимальное значение

    useEffect(() => {
        let newMAXVALUE = localStorage.getItem('valueMax')
        if (newMAXVALUE) {
            let newValue = JSON.parse(newMAXVALUE)
            setMAXVALUE(newValue)

        }
    }, [])

    useEffect(() => {
        localStorage.setItem('valueMax', JSON.stringify(MAXVALUE))
    }, [MAXVALUE])


    const [counter, setCounter] = useState<number>(STARTVALUE)

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCounter(newValue)

        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
    }, [counter])

    // добавлять +1
    const onClickAddHandler = () => {
        if (counter < MAXVALUE && counter >= STARTVALUE) {
            setCounter(count => count + 1)
        }
    }
    // сброс на 0
    const onClickResetHandler = () => {
        setCounter(STARTVALUE)
    }

    // выбор стартового и максимального значений
    const selectStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newStart = +e.currentTarget.value;
        setSTARTVALUE(newStart);
        setDisabled(false);
    }

    const selectMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newMax = +e.currentTarget.value
        setMAXVALUE(newMax);
        setDisabled(false);
    }

    // сетать новые параментры в счетчик
    const onClickSet = () => {
        setCounter(STARTVALUE);
        setDisabled(true)
    }

    const [disabled, setDisabled] = useState(true);

    const error = MAXVALUE <= 0 || STARTVALUE < 0 || MAXVALUE <= STARTVALUE || MAXVALUE > 10000 || STARTVALUE > 10000;

    return (
        <div>
            <div className="App">
                <div className='container'>
                    <DisplayValue maxValue={MAXVALUE} startValue={STARTVALUE}
                                  selectStartValue={selectStartValue}
                                  selectMaxValue={selectMaxValue}
                                  error={error}

                    />
                    <div className='display_button'>
                        <Button name={'Set'}
                                isDisabled={error || disabled}
                                callback={onClickSet}
                        />
                    </div>
                </div>
                <div className='container'>
                    <Display counter={counter} max={MAXVALUE} disabled={disabled} error={error}/>
                    <div className='display_button'>
                        <Button name={'Inc'} isDisabled={counter === MAXVALUE || !disabled}
                                callback={onClickAddHandler}/>
                        <Button name={'Reset'} isDisabled={counter === STARTVALUE || !disabled}
                                callback={onClickResetHandler}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
