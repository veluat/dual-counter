import React from 'react';
import './App.css';
import {Display} from "./Display";
import {Button} from "./Button";
import {DisplayValue} from "./DisplayValue";
import {
    changeMaxValueAC,
    changeStartValueAC,
    counterSettingsAC,
    increaseCountAC,
    resetCountAC,
    StateType
} from "./store/counterReducer";
import {AppRootStateType} from "./store/store";
import {useDispatch, useSelector} from "react-redux";

export function App() {
    /* const [startValue, setStartValue] = useState<number>(0);
     const [maxValue, setMaxValue] = useState<number>(5);*/
    // useEffect на стартовое значение
    /*useEffect(() => {
        let newStartValue = localStorage.getItem('valueStart')
        if (newStartValue) {
            let newValue = JSON.parse(newStartValue)
            newStartValue(newValue)
        }
    }, [])*/
    /*useEffect(() => {
        localStorage.setItem('valueStart', JSON.stringify(startValue))
    }, [startValue])*/

    // useEffect на максимальное значение

    /*useEffect(() => {
        let newMaxValue = localStorage.getItem('valueMax')
        if (newMaxValue) {
            let newValue = JSON.parse(newMaxValue)
            setMaxValue(newValue)
        }
    }, [])*/
    /*useEffect(() => {
        localStorage.setItem('valueMax', JSON.stringify(maxValue))
    }, [maxValue])*/
    /* const [counter, setCounter] = useState<number>(startValue)*/
    const state = useSelector<AppRootStateType, StateType>(state => state.count)
    const dispatch = useDispatch()
    /*useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCounter(newValue)
        }
    }, [])*/
    /*useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
    }, [counter])*/
    // добавлять +1
    /*const onClickAddHandler = () => {
        if (counter < maxValue && counter >= startValue) {
            setCounter(count => count + 1)
        }
    }*/
    const increaseCount = () => {
        dispatch(increaseCountAC())
    }
    // сброс на 0
    /*const onClickResetHandler = () => {
        setCounter(startValue)
    }*/
    const resetCount = () => {
        dispatch(resetCountAC())
    }
    // выбор стартового и максимального значений
    /* const selectStartValue = (e: ChangeEvent<HTMLInputElement>) => {
         let newStart = +e.currentTarget.value;
         setStartValue(newStart);
         setDisabled(false);
     }*/
    const changeStartValue = (start: number) => {
        dispatch(changeStartValueAC(start))
    }
    /*const selectMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newMax = +e.currentTarget.value
        setMaxValue(newMax);
        setDisabled(false);
    }*/
    const changeMaxValue = (max: number) => {
        dispatch(changeMaxValueAC(max))
    }
    // сетать новые параментры в счетчик
    /* const onClickSet = () => {
         setCounter(startValue);
         setDisabled(true)
     }*/
    const counterSet = () => {
        dispatch(counterSettingsAC())
    }
    //   const [disabled, setDisabled] = useState(true);

    const error = state.maxValue <= 0 || state.startValue < 0 || state.maxValue < state.startValue || state.maxValue > 10000 || state.startValue > 10000;

    return (
        <div>
            <div className="App">
                <div className='container'>
                    <DisplayValue maxValue={state.maxValue} startValue={state.startValue}
                                  changeStartValue={changeStartValue}
                                  changeMaxValue={changeMaxValue}
                                  error={error}
                    />
                    <div className='display_button'>
                        <Button name={'Set'}
                                isDisabled={error || state.disabled}
                                counterSettings={counterSet}
                        />
                    </div>
                </div>
                <div className='container'>
                    <Display counter={state.count} max={state.maxValue} disabled={state.disabled}
                             error={error}/>
                    <div className='display_button'>
                        <Button name={'Inc'} isDisabled={state.count === state.maxValue || !state.disabled}
                                counterSettings={increaseCount}/>
                        <Button name={'Reset'}
                                isDisabled={state.count === state.startValue || !state.disabled}
                                counterSettings={resetCount}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

