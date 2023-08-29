/**
 * <type>(<scope>): <subject> // this whole thing is <header>
 *
 * <body>
 *
 * <footer>
 */

// eslint-disable-next-line no-undef
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-max-line-length": [1, "always", 100], // warn if body length exceeds 100 characters (default is error)
    "header-max-length": [1, "always", 72], // warn if message length exceeds 72 characters (default is error over 100)
    "subject-case": [0, "always"], // support any case in message (default is error on lowercase)
    "subject-full-stop": [1, "never", "."], // support ending a message with `...` (default is error when ending in `.`)
  },
};
