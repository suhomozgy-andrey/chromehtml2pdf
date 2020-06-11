const getCookies = ({ url, ...params }) => [
  {
    url: url,
    domain: "..domain.com",
    name: "__cid",
    value: "2a3d5d64-3df4-4ef2-a267-95f97547e168-832203ce65f1cd77c30204d2",
    ...params,
  },
];

module.exports = getCookies;
