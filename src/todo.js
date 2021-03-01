export default function Todo({ todo, toggleChecked }) {
    function handleToggleChecked() {
        toggleChecked(todo.id);
    }

    return (
        <div>
            <input type="checkbox" checked={todo.checked} onChange={handleToggleChecked} />
            { todo.name}
        </div>
    )
}