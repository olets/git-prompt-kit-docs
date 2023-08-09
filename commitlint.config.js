// eslint-disable-next-line no-undef
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-max-line-length": [1, "always", 100],
    "subject-full-stop": [1, "never", "."],
    "subject-case": [0, "always"],
  },
};
