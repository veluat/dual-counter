import React from 'react';
import s from './App.module.scss'
import {useSelector} from "react-redux";
import {SwitchButtons} from '../../common/components'
import {IntegratedCounter} from '../integrated-counter'
import {Counter} from '../counter'
import {useCounterActions} from '../../redux'
import {VariantType} from '../../common/types'
import {getCountState} from '../../redux'

export function App() {

  const countState = useSelector(getCountState);
  const actions = useCounterActions()

  const [counterVariant, setCounterVariant] = React.useState<VariantType>('counter')
  const changeVariant = (variant: VariantType) => {
    setCounterVariant(variant)
  }

  return (
    <div className={s.root}>
      <SwitchButtons currentVariant={counterVariant} changeVariant={changeVariant}/>
      {counterVariant === 'counter' &&
        (<Counter {...countState}
                  {...actions}/>)}

      {counterVariant === 'integrated counter' &&
        (<IntegratedCounter {...countState}
                            {...actions}/>)}
    </div>
  )
}