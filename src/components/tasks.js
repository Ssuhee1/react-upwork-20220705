import { useState } from 'react';
import styles from './tasks.module.css';
import Task from './task';
import Notification from './notification';
const initialTasks = [
  { name: 'Task name 1', id: 1 },
  { name: 'Task name 2', id: 2 },
  { name: 'Task name 3', id: 3 },
  { name: 'Task name 4', id: 4 },
  { name: 'Task name 5', id: 5 },
  { name: 'Task name 6', id: 6 },
];
const Tasks = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');
  const [notify, setNotify] = useState(false);
  const [notificationText, setNotificationText] = useState('');
  const [isEditing, setIsEditing] = useState(null);
  const onAdd = () => {
    if (newTask) {
      const id = Date.now();
      setTasks([...tasks, { name: newTask, id: id }]);
      setNewTask('');
      setNotificationText(`Successfully added! Task id : ${id}`);
      setNotify(true);
    }
  };
  const onClose = () => {
    setNotificationText('');
    setNotify(false);
  };
  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setNotificationText(`Successfully deleted! Task id : ${id}`);
    setNotify(true);
  };
  const onEdit = (id) => {
    setIsEditing(id);
    setNewTask(tasks.filter((task) => task.id === id)[0].name);
  };

  const onSave = () => {
    setTasks(
      tasks.map((task) =>
        task.id === isEditing ? { name: newTask, id: isEditing } : task
      )
    );
    setNewTask('');
    setNotificationText(`Successfully edited! Task id : ${isEditing}`);
    setIsEditing(null);
    setNotify(true);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Tasks list</h1>
          <div>
            <input
              placeholder='Enter your new task'
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            {isEditing ? (
              <button className={styles.addBtn} onClick={onSave}>
                Save
              </button>
            ) : (
              <button className={styles.addBtn} onClick={onAdd}>
                Add
              </button>
            )}
          </div>
        </div>
        <div className={styles.body}>
          {tasks?.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      </div>
      {notify ? <Notification text={notificationText} close={onClose} /> : null}
    </>
  );
};
export default Tasks;
