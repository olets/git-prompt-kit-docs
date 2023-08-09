export function configFromState(configObj) {
  let customizedEntries = [];

  for (let entry of Object.entries(configObj)) {
    const key = entry[0];
    const option = entry[1];

    if (option.value?.custom && option.value.default !== option.value.custom) {
      customizedEntries.push(`${key}="${option.value.custom}"`);
    }
  }

  console.log({ customizedEntries });
  return customizedEntries.join("\n");
}
