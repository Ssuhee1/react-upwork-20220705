import styles from './task.module.css';
const Task = ({
  task = 'No task name',
  onEdit = () => {},
  onDelete = () => {},
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.taskname}>{task.name}</h3>
      <div>
        <button className={styles.deleteBtn} onClick={() => onDelete(task.id)}>
          Delete
        </button>
        <button className={styles.editBtn} onClick={() => onEdit(task.id)}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Task;
