import Form from "./Form";
import "./styles.css";
import ImperativeHandle from "./ImperativeHandle";
import ContextTutorial from "./ContextTutorial";
import MemoTutorial from "./MemoTutorial";

export default function App() {
  return (
    <>
      <div className="col-4">
        {/* <Form /> */}
        {/* <ImperativeHandle /> */}
        <MemoTutorial />
      </div>
    </>
  );
}
