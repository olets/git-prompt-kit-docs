import { ansiOrHexColor } from "./ansiToHex.js";

export default function (key, target, isColor = false) {
  const valid = !target.validity.patternMismatch;
  const pattern = target.getAttribute("pattern");

  target.setCustomValidity("");
  target.reportValidity();

  if (!valid) {
    target.setCustomValidity(`Invalid: must match the pattern /${pattern}/`);
    target.reportValidity();
    return;
  }

  if (isColor) {
    this.store.data[key].value.custom = ansiOrHexColor(target.value);
    return;
  }

  this.store.data[key].value.custom = target.value;
}
