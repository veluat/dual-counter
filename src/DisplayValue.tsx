import React, {ChangeEvent} from 'react';

type SelectButtonPropsType = {
    startValue: number
    maxValue: number
    selectStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    selectMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    error: boolean

}


export const DisplayValue = (props: SelectButtonPropsType) => {

    return (

        <div className='display'>
            <div className='input'>max value:
                <input className={props.error ? 'input_error' : 'input'}
                    type="number"
                    min={1}
                    max={100000}
                    onChange={props.selectMaxValue}
                    step="1"
                    value={props.maxValue}/>
            </div>

            <div className='input'>
                <div>start value:
                    <input className={props.error ? 'input_error' : 'input'}
                        type="number"
                        min={-1}
                        max={100000}
                        onChange={props.selectStartValue}
                        step="1"
                        value={props.startValue}/>
                </div>
            </div>

        </div>
    )
}