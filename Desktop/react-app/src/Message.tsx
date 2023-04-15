function Message() {
    const getName = (name: string, age: number) => {
        return name + ' is ' + age + ' years old';
    }
    return <h1>Hello, {getName("Damilola", 20)}</h1>
};

export default Message;