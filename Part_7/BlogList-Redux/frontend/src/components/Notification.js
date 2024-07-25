import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {
  const notification = useSelector(state => state.notifications);

  if (!notification) {
    return null;
  }

  return (
    <div>
      {notification}
    </div>
  );
};

export default Notification;
