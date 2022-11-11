import axios from "axios";

async function UserService(data = {}) {
  try {
    const response = await axios.post("http://localhost:7600/users", data);
    return response.data;
  } catch (error) {
    console.log({ error: error.response });
  }
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
