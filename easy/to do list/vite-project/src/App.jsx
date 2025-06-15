import React from 'react';
import './App.css';

function App() {
  const [lists, setLists] = React.useState([]);

  function addList(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('listName');

    const newList = {
      id: crypto.randomUUID(),
      name,
      elements: [],
    };

    setLists(prev => [...prev, newList]);
    event.currentTarget.reset();
  }

  function addElement(event, listId) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const task = formData.get('challenge');

    setLists(prevLists =>
      prevLists.map(list =>
        list.id === listId ? { ...list, elements: [...list.elements, task] } : list
      )
    );

    event.currentTarget.reset();
  }

  function deleteTask(listId, taskIndex) {
    setLists(prevLists =>
      prevLists.map(list =>
        list.id === listId
          ? {
              ...list,
              elements: list.elements.filter((_, i) => i !== taskIndex),
            }
          : list
      )
    );
  }

  function deleteList(listId) {
    setLists(prevLists => prevLists.filter(list => list.id !== listId));
  }

  return (
    <>
      <form onSubmit={addList} className="flex gap-2 mt-12 ml-8">
        <input
          type="text"
          name="listName"
          id="listName"
          placeholder="New list name"
          className="border-2 rounded-lg px-2 py-1"
        />
        <button className="border-2 border-green-700 rounded-lg px-4 py-1 bg-black text-green-300 buttonToAddList">
          Add new list
        </button>
      </form>

      <div className="w-full flex flex-wrap justify-evenly mt-8 gap-4">
        {lists.map(list => (
          <div key={list.id} className="w-96 border-2 rounded-xl p-4 bg-white shadow relative">
            <h2 className="text-2xl mb-2">{list.name}</h2>

            <button
              onClick={() => deleteList(list.id)}
              className="absolute top-2 right-2 text-red-500 hover:underline text-sm"
            >
              Delete list
            </button>

            <div className="mb-4 space-y-2 mt-4">
              {list.elements.map((task, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border p-2 rounded bg-gray-100"
                >
                  <p>{task}</p>
                  <button
                    className="text-red-500 hover:underline text-sm"
                    onClick={() => deleteTask(list.id, index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            <form
              onSubmit={(e) => addElement(e, list.id)}
              className="flex gap-2"
            >
              <input
                type="text"
                name="challenge"
                placeholder="New task"
                className="border rounded px-2 py-1 flex-grow"
              />
              <button className="border rounded px-4 py-1 bg-green-500 text-white">
                Add
              </button>
            </form>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;