import { listener } from "./listener";

class Todo {
    init() {
        console.log("Todo App Start");
        listener();
    }
}

export default Todo;