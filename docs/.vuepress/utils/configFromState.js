export function configFromState(configObj) {
  let customizedEntries = [];

  for (let entry of Object.entries(configObj)) {
    const key = entry[0];
    const values = entry[1];

    if (values?.custom && values.default !== values.custom) {
      customizedEntries.push(`${key}="${values.custom}"`);
    }
  }

  console.log({ customizedEntries });
  return customizedEntries.join("\n");
}
