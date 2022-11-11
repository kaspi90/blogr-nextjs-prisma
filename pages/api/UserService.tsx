async function UserService(data = {}) {
  const response = await fetch(`http://localhost:7600/users`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  /*   const json = await response.json();
  return json; */
}

/* async function getresponse(data) {
  UserService("http://localhost:55331/", data).then((res) => {&73^6uLitG29JczN=C*w@6>u4>}3)xW;
    alert(res.body);
  });
}
 */
export const callOurApi = async () => {
  try {
    const res = await fetch(`http://localhost:7600/users`, {
      method: "GET",
    });
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export default UserService;
