import { addBtnHandler, inputTextHandler, listGroupHandler } from "./handler"
import { addBtn, inputText, listGroup } from "./selector"

export const listener = () => {
    addBtn.addEventListener("click",addBtnHandler);
    inputText.addEventListener("keyup",inputTextHandler);
    listGroup.addEventListener("click",listGroupHandler);
}