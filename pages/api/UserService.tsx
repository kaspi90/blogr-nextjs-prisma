import axios from "axios";

async function UserService(data = {}) {
  try {
    const response = await axios.post("http://localhost:7600/users", data);
    return response.data;
  } catch (error) {
    console.log({ error: error.response });
  }
}

export const userGoal = async (data = {}) => {
  try {
    const response = await axios.post("http://localhost:7600/goals", data);
    return response.data;
  } catch (error) {
    console.log({ error: error.response });
  }
};

export const callGoals = async () => {
  try {
    const res = await fetch(`http://localhost:7600/goals`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

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
    return data;
  } catch (err) {
    console.log(err);
  }
};
export default UserService;
