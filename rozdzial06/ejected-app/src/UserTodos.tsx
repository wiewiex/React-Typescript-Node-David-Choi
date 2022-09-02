import { FC, useState, useEffect } from 'react';

interface UserTodosProps {
    username: string;
}

const UserTodos: FC<UserTodosProps> = ({ username }) => {
    const [todos, setTodos] = useState<Array<JSX.Element>>();

    const setUserTodos = async () => {
        console.log("wewnątrz faktycznej funckcji UserTodos.setUsersTodos");        
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');

        if (userResponse.ok) {
            const users = await userResponse.json();
            const userByName = users.find((usr: any) => {
                return usr.username.toLowerCase() === username;
            });
            console.log("uzytkownik pobrany po nazwie", userByName);
            
            const todosResponse = await
                fetch('https://jsonplaceholder.typicode.com/todos');

            if(userByName && todosResponse.ok) {
                const todos = await todosResponse.json();
                const usersTodos = todos.filter((todo: any) => {
                    return todo.userId === userByName.id;
                });
                const todoList = usersTodos.map((todo: any) => {
                    return (
                        <li key={todo.id}>{todo.title}</li>
                    )
                });
                setTodos(todoList);
                console.log("lista zadań użytkownika", usersTodos);
                
            }   
        }
    }

    useEffect(() => {
        if (username) {
            setUserTodos();
        }
    },[username]);

    return (
        <ul style={{marginTop: '1rem', listStyleType: 'none'}}>
            {todos}
        </ul>
    )
}

export default UserTodos;