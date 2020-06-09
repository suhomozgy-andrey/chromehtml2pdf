const getCookies = ({ url, ...params }) => [
  {
    name: "cookie1",
    value: "val1",
    url: url,
    ...params,
  },
  {
    name: "cookie2",
    value: "val2",
    url: url,
    ...params,
  },
  {
    name: "cookie3",
    value: "val3",
    url: url,
    ...params,
  },
];

module.exports = getCookies;
