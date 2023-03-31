import { ChangeEvent, KeyboardEvent, useState } from "react";

function Todo(props: { id: string }) {
  const [todo, setTodo] = useState<string | null>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.currentTarget.value);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    setTodo(e.currentTarget.value);
  };
  return (
    <div>
      {todo}
      <input
        type="text"
        data-testid={`todo-input-${props.id}`}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default Todo;
