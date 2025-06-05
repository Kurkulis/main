import { useTodoStore } from "../store/store";


const Filter = () => {
    const { filter, setFilter } = useTodoStore();


    return (
        <div className="filters">
            <span className={filter === 'all' ? 'active' : ''}
                onClick={() => setFilter('all')}>All</span>
            <span className={filter === 'completed' ? 'active' : ''}
                onClick={() => setFilter('completed')}>Completed</span>
            <span className={filter === 'incompleted' ? 'active' : ''}
                onClick={() => setFilter('incompleted')}>Incomplete</span>
        </div>
    )
};

export default Filter;