/* eslint-disable no-useless-escape */
/* eslint-disable prefer-regex-literals */

export const urlRegex = new RegExp(
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
);
