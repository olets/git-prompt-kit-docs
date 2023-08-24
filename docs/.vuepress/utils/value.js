import { optionsData } from "../stores/options";

function getDefault(data) {
  let ret = data?.value?.default || null;

  if (
    data?.value?.verboseDefault !== undefined &&
    data?.value?.verboseDefault !== null &&
    getValue(optionsData.GIT_PROMPT_KIT_VERBOSE_DEFAULT_SYMBOLS)
  ) {
    ret = data.value.verboseDefault;
  }

  return ret;
}

function getValue(data) {
  let value;

  const type = data?.type || "string";

  if (data?.value?.custom !== undefined && data?.value?.custom !== null) {
    value = data?.value?.custom;
  } else {
    value = getDefault(data);
  }

  if (type.includes("integer")) {
    value = parseInt(value);
  }

  return value;
}

export { getDefault, getValue };
