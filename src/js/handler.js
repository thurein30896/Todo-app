import { createList, deleteList, editText, listCheck, updateCounter } from "./function"
import { addBtn, inputText, listGroup } from "./selector"



export const addBtnHandler = () => {
    if(inputText.value === ""){
        inputText.classList.add("animate__shakeX");
        addEventListener('animationend',() => {
            inputText.classList.remove("animate__shakeX");
        })
    }else{
        listGroup.append(createList(inputText.value));
        updateCounter();
        inputText.value = null;
    }
}

export const inputTextHandler = (e) => {
    if(e.key === "Enter"){
        addBtnHandler();
    }
}

export const listGroupHandler = (e) => {
    if(e.target.classList.contains("list-del-btn")){
        deleteList(e);
    }else if(e.target.classList.contains("list-edit-btn")){
        editText(e);
    }else if(e.target.classList.contains("list-check")){
        listCheck(e);
    }
}