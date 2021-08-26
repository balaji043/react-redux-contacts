import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  setIncrementAmount
} from './counterSlice';
import './Counter.module.css';

export function Counter() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className='row'>
        <Button
          className='button'
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
          label='-' />
        <Count />
        <Button
          className='button'
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
          label='+' />
      </div>
      <div className='row'>
        <Input />
        <Button
          className='button'
          onClick={() => dispatch(incrementByAmount())}
          label='Add Amount' />
        <Button
          className={'asyncButton'}
          onClick={() => dispatch(incrementAsync(null))}
          label='Add Async' />
        <Button
          className='button'
          onClick={() => dispatch(incrementIfOdd())}
          label='Add If Odd' />
      </div>
    </div>
  );
}

export default function Button(props: {
  onClick(): void;
  className: string;
  label: string;
}) {
  const { label } = props;

  return (
    <button {...props}>
      {label}
    </button>
  );
}

function Count(): JSX.Element {
  return <span className='value'>{useAppSelector(selectCount)}</span>;
}

function Input(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <input
      className='textbox'
      aria-label='Set increment amount'
      inputMode="numeric"
      defaultValue='2'
      onChange={(e) => {
        const s = parseInt(e.target.value);
        if (isNaN(s)) {
          return;
        }
        dispatch(setIncrementAmount(s));
      }}
    />
  );
}
