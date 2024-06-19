export type StateType = {
  count: number
  maxValue: number
  startValue: number
  disabled: boolean
  isEditMode: boolean
}

export type ActionsType = ReturnType<typeof increaseCountAC>
  | ReturnType<typeof resetCountAC>
  | ReturnType<typeof changeStartValueAC>
  | ReturnType<typeof changeMaxValueAC>
  | ReturnType<typeof counterSettingsAC>
  | ReturnType<typeof setCountFromLocalStorageAC>
  | ReturnType<typeof changeEditModeAC>

export const initialState: StateType = {count: 0, maxValue: 5, startValue: 0, disabled: true, isEditMode: true}

export const counterReducer = (state = initialState, action: ActionsType): StateType => {
  switch (action.type) {
    case 'INC-COUNT' :
      return (state.count < state.maxValue && state.count >= state.startValue)
        ? {...state, count: state.count + 1}
        : state
    case 'SET-COUNT' :
      return {...state, count: action.value}
    case 'RESET-COUNT' :
      return {...state, count: state.startValue}
    case 'CHANGE-START-VALUE' :
      return {...state, startValue: Math.floor(action.start), disabled: false}
    case 'CHANGE-MAX-VALUE' :
      return {...state, maxValue: Math.floor(action.max), disabled: false}
    case 'COUNTER-SETTINGS' :
      return {...state, count: state.startValue, disabled: true}
    case 'CHANGE-EDIT-MODE':
      return {...state, isEditMode: !state.isEditMode}
    default:
      return state;
  }
}

export const increaseCountAC = () => ({type: 'INC-COUNT'} as const)
export const setCountFromLocalStorageAC = (value: number) => ({type: 'SET-COUNT', value} as const)
export const resetCountAC = () => ({type: 'RESET-COUNT'} as const)
export const changeStartValueAC = (start: number) => ({type: 'CHANGE-START-VALUE', start} as const)
export const changeMaxValueAC = (max: number) => ({type: 'CHANGE-MAX-VALUE', max} as const)
export const counterSettingsAC = () => ({type: 'COUNTER-SETTINGS'} as const)
export const changeEditModeAC = (isEditMode: boolean) => ({type: 'CHANGE-EDIT-MODE', isEditMode} as const)