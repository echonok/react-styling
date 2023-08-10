import React, { BaseSyntheticEvent, useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput: React.FC<{ onAddGoal: (enteredValue: string) => void }> = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event: BaseSyntheticEvent) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(() => false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles['invalid']}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
