import Todo from "./todo";

export default function TodoList({ todos, toggleChecked }) {
    return (
        todos.map(todo => {
            return <Todo todo={todo} key={todo.id} toggleChecked={toggleChecked} />
        })
    )
}