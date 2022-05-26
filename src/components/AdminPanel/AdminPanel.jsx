import style from './AdminPanel.module.css'
import TaskCreator from '../TaskCreator/TaskCreator'

export const AdminPanel = (props) => {

    return (
        <div className={style.adminPanel}>
            <TaskCreator />
        </div>
    )
}

export default AdminPanel