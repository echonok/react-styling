import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';
import { IGoal } from '../../../interfaces/goal.interface';

const CourseGoalList: React.FC<{ items: IGoal[], onDeleteItem: (id: string) => void }> = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
