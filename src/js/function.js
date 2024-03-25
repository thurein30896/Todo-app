import { doneCount, listGroup, templateList, totalCount } from "./selector";
import Swal from "sweetalert2";

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const makeRandomId = (length) => {
  let char = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

  let result = "";
  for (let i = 1; i <= length; i++) {
    result += char[getRndInteger(0, char.length)];
  }
  return result;
};

export const createList = (text) => {
  const id = Date.now();
  const checkerId = makeRandomId(10);
  const list = templateList.content.cloneNode(true);
  const listText = list.querySelector(".list-name");
  const listCheck = list.querySelector(".list-check");
  const listUi = list.querySelector(".list");
  listUi.setAttribute("list-id", id);
  listUi.classList.add("animate__fadeInDown");
  listText.innerText = text;
  listText.htmlFor = checkerId;
  listCheck.setAttribute("id", checkerId);

  listUi.addEventListener("animationend",() => {
    listUi.classList.remove("animate__fadeInDown");
  })
  return list;
};

export const deleteList = (e) => {
  const listUi = e.target.closest(".list");

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      // Swal.fire({
      //   title: "Deleted!",
      //   text: "Your file has been deleted.",
      //   icon: "success",
      // });
      listUi.classList.add("animate__lightSpeedOutRight");
      listUi.addEventListener("animationend",() => {
        listUi.remove();
        updateCounter();
      })
    }
  });
};

export const editText = (e) => {
  const listUi = e.target.closest(".list");
  const listName = listUi.querySelector(".list-name");
  const editBtn = e.target;
  // editBtn.disabled = true;
  editBtn.classList.add("hidden")

  const input = document.createElement("input");
  listName.classList.add("hidden");
  input.classList.add("border","focus-visible:outline-none","border-slate-500","ps-2");
  listName.after(input);
  input.value = listName.innerText;

  input.addEventListener("blur",() => {
    input.classList.add("hidden");
    listName.classList.remove("hidden");
    listName.innerText = input.value
    // editBtn.disabled = false;
    editBtn.classList.remove("hidden")
  })
};

export const listCheck = (e) => {
  const listUi = e.target.closest(".list");
  const listName = listUi.querySelector(".list-name");
  const listEditBtn = listUi.querySelector(".list-edit-btn");
  if (e.target.checked === true) {
    listName.classList.add("line-through");
    updateCounter();
    listEditBtn.classList.add("hidden");
  } else {
    listName.classList.remove("line-through");
    updateCounter();
  }
};

export const updateCounter = () => {
  const totalList = listGroup.querySelectorAll(".list").length;
  totalCount.innerText = totalList;
    doneCount.innerText = listGroup.querySelectorAll(".list-checker [type='checkbox']:checked").length;
};
