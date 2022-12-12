import style from './style.module.css';

export interface StepProps{
  current: number,
  state?: 'default' | 'active',
}

export function Step({current, state = 'default'}: StepProps){
  return <span className={style.step} data-state={state} aria-label="step">{current}</span>
}