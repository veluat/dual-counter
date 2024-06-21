export type VariantType = 'counter' | 'integrated counter'

export type SwitchButtonsPropsType = {
  currentVariant: VariantType;
  changeVariant: (variant: VariantType) => void;
}

export type ErrorType = {
  startValueError: boolean;
  maxValueError: boolean;
}

export type InitialStateType = {
  count: number;
  maxValue: number;
  startValue: number;
  error: Partial<ErrorType>;
  disabled: boolean;
  isEditMode: boolean;
}

export type ButtonPropsType = {
  name: string
  triggerCounterSet: () => void
  isDisabled?: boolean
}

export type DisplayPropsType = {
  counter: number
  maxValue: number
  error: Partial<ErrorType>
  disabled: boolean
}

export type SettingsDisplayPropsType = {
  startValue: number
  maxValue: number
  error: Partial<ErrorType>
  changeStartValue: (start: number) => void
  changeMaxValue: (max: number) => void
  handleSettingsChange?: () => void
}

export type CounterPropsType = InitialStateType & {
  triggerCounterSet: () => void;
  changeStartValue: (start: number) => void
  changeMaxValue: (max: number) => void
  increaseCount: () => void
  resetCount: () => void
}

export type CounterSettingsPropsType = CounterPropsType & {
  isEditMode: boolean;
  setEditMode: (isEditMode: boolean) => void
}

export type LayoutPropsType = {
  counterVariant: VariantType
  countState: Omit<CounterPropsType,
    'triggerCounterSet' | 'changeStartValue' |
    'changeMaxValue' | 'increaseCount' | 'resetCount'>
  actions: {
    triggerCounterSet: () => void
    changeStartValue: (start: number) => void
    changeMaxValue: (max: number) => void
    increaseCount: () => void
    resetCount: () => void
    setEditMode: (isEditMode: boolean) => void
  }
}