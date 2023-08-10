export default function (data) {
  let value;

  const type = data?.type || "string";

  if (data?.value?.custom !== undefined && data?.value?.custom !== null) {
    value = data?.value?.custom;
  } else {
    value = data?.value?.default || null;
  }

  if (type.includes("integer")) {
    value = parseInt(value);
  }

  return value;
}
