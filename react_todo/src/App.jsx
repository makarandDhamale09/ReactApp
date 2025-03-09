import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import {
  faPen,
  faSquare,
  faSquareCheck,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const isComplete = true;
  return (
    <div className="h-screen bg-violet-50">
      <div className="flex justify-around">
        <h1 className="font-bold text-4xl py-4">Todo List</h1>
      </div>
      <div className="flex flex-col justify-around mx-auto w-200 rounded-lg h-auto mt-10 bg-violet-100 shadow">
        <div className="flex justify-between h-auto m-5 bg-white p-5 align-middle">
          <div className="flex p-2">
            {isComplete ? (
              <FontAwesomeIcon
                icon={faSquareCheck}
                className="text-2xl text-violet-400"
              />
            ) : (
              <FontAwesomeIcon
                icon={faSquare}
                className="text-2xl text-gray-300"
              />
            )}
            <div className="px-2 truncate w-120 text-lg">
              Create React Project
            </div>
          </div>
          <div className="flex">
            <FontAwesomeIcon icon={faTrash} className="text-2xl p-2" />
            <FontAwesomeIcon icon={faPen} className="text-2xl p-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
