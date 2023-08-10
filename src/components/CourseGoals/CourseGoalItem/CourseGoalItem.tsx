import React, { ReactNode } from 'react';

import './CourseGoalItem.css';

const CourseGoalItem: React.FC<{ onDelete: (id: string) => void; children: ReactNode, id: string }> = (props) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
