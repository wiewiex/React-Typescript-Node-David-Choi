import React, { useState, FC } from "react";
import UserTodos from "./UserTodos";

interface DisplayTextProps {
    getUserFullName: (username: string) => Promise<string>;
}

const DisplayText: FC<DisplayTextProps> = ({ getUserFullName }) => {
    const [txt, setTxt] = useState("");
    const [msg, setMsg] = useState("");
    const [todoControl, setTodoControl] = useState<ReturnType<typeof UserTodos>>();

    const onChangeTxt = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTxt(e.target.value);
    }    

    const onClickShowMsg = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();    
        setMsg(`Witaj na zajęciach z testowania Reacta, ${await getUserFullName(txt)}!`);
        setTodoControl(<UserTodos username={txt} />);        
    }    

    return (
        <form>
            <div>
                <label>Jak masz na imie?</label>
            </div>
            <div>
                <input data-testid="user-input"
                    value={txt} onChange={onChangeTxt} />
            </div>
            <div>
                <button data-testid="input-submit"
                    onClick={onClickShowMsg}>Wyswietl komunikat</button>
            </div>
            <div>
                <label data-testid="final-msg">{msg}</label>
            </div>
            {todoControl}            
        </form>
    )
}

export default DisplayText;