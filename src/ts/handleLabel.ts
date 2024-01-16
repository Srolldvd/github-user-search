import { userSearcherElem } from "./printUser";
const label = userSearcherElem.previousElementSibling;

userSearcherElem.addEventListener("focus", () => {
  if (!label) return;
  label.classList.add("move-top");
});

userSearcherElem.addEventListener("blur", () => {
  if (!label) return;
  if (userSearcherElem.value === "") {
    label.classList.remove("move-top");
  }
});
