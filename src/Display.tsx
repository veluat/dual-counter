import React from 'react';

type DisplayPropsType = {
    counter: number
    max: number
    error: boolean
    disabled: boolean

}

const text = "Enter values and press 'set'"
const text2 = 'Danger! Incorrect value!'


export const Display = (props: DisplayPropsType) => {
    return (
        <div className='display'>
            <div
                className={props.counter === props.max ? 'red' : props.error ? 'text_2' : !props.disabled ? 'text_3' : 'text'}>
                <div>
                    {props.error ? text2
                        : !props.disabled && props.counter !== props.max ? text
                            : props.counter}
                </div>
            </div>
        </div>
    )
}