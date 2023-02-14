import { useReducer } from "react";
import formReducer from "./FormReducer";

export default function Form() {
  const initialState = {
    name: "",
    age: "",
    isAlive: true
  };
  const [formData, dispatch] = useReducer(formReducer, initialState);

  const handleformChanges = (e) => {
    dispatch({
      type: "CHANGE INPUT",
      field: e.target.name,
      payload: e.target.value
    });
    console.log(formData);
  };

  return (
    <>
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Fullname</label>
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Enter name"
            onChange={(e) => handleformChanges(e)}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Age</label>
          <input
            type="number"
            className="form-control"
            placeholder="Age"
            name="age"
            onChange={(e) => handleformChanges(e)}
          />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" />
          <label
            className="form-check-label"
            for="exampleCheck1"
            name="isAlive"
            onChange={(e) => dispatch({ type: "CHANGE ISALIVE" })}
          >
            Alive
          </label>
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
    </>
  );
}
