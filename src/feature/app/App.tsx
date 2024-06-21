import React from 'react';
import s from './App.module.scss'
import {useSelector} from "react-redux";
import {SwitchButtons} from '../../common/components'
import {getCountState, useCounterActions} from '../../redux'
import {VariantType} from '../../common/types'
import {Layout} from './layout/layout'

export function App() {

  const countState = useSelector(getCountState)
  const actions = useCounterActions()

  const [counterVariant, setCounterVariant] = React.useState<VariantType>('counter')
  const changeVariant = (variant: VariantType) => {
    setCounterVariant(variant)
  }

  return (
    <div className={s.root}>
      <SwitchButtons currentVariant={counterVariant} changeVariant={changeVariant}/>
      <Layout counterVariant={counterVariant} actions={actions} countState={countState}/>
    </div>
  )
}