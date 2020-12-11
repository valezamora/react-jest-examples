import React, {useState} from 'react';

const OneClickButton = () => {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount(count+1)} disabled={count > 0}>One click button</button>
    );
}

export default OneClickButton;
