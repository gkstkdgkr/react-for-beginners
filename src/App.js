import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]); // ...배열 을 쓸 시 [todo, [currentArray]] 가 아닌 [todo, currentArray]가 반환됨
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item,index) => (
          <li key={index}>{item}</li> // item앞에 index +1 을 붙치면 순서를 만들 수 있음 / 그리고 12번 라인의 toDo, ...currentArray의 순서를 바꾸면 신규 요소는 아래에 추가됨
        ))}
      </ul>
    </div>
  );
}

export default App;
