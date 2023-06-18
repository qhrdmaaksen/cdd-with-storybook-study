import {useState} from "react";

// count button component
export const Button = () => {
    // count is a state variable
    const [count, setCount] = useState(0)
    // onClickHandler는 상태 변수를 업데이트하는 함수입니다.
    const onClickHandler = () => {
        setCount((count) => count + 1)
    }
    return (
        <button onClick={onClickHandler}>count is {count}</button>
    );
}