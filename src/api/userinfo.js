const userinfo = [
  {
    label: "email",
    key: "email",
    value: "",
    pattern: /.+/,
  },
  {
    label: "First Name",
    key: "first_name",
    value: "",
    pattern: /^[a-zA-Z ]{2,30}$/,
  },
  {
    label: "Last Name",
    key: "last_name",
    value: "",
    pattern: /^[a-zA-Z ]{2,30}$/,
  },
  {
    label: "Link to the avatar ",
    key: "avatar",
    value: "",
    pattern: /.+/,
  },
];

export function listUserInfo() {
  return userinfo;
}
