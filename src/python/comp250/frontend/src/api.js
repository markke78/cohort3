const url = "http://127.0.0.1:5000/";
const getAccessToken = async (user) => {
  const authUrl = url + "/auth";
  const json = await postData(authUrl, user);
  return json.access_token;
};

const addUser = (username, password) => {
  const postUrl = url + "register";
  postData(postUrl, {
    username: username,
    password: password,
  }).then((json) => console.log(json));
};

const addItem = (name, amount) => {
  const itemUrl = url + `item/${name}`;
  postData(itemUrl, { price: amount }).then((json) => console.log(json));
};

async function getData(user) {
  const itemUrl = url + "items";
  const token = await getAccessToken(user);
  let data = await postData(itemUrl, {}, "GET", {
    Authorization: `JWT ${token}`,
  });
  console.log(data);
  return data;
}

async function postData(
  url = "",
  data = {},
  methods = "POST",
  header = { "Content-Type": "application/json" }
) {
  // Default options are marked with *
  let request = {
    method: methods, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: header,
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
  };
  if (methods !== "GET") {
    request.body = JSON.stringify(data); // body data type must match "Content-Type" header
  }
  const response = await fetch(url, request);
  if (response.error) {
    console.log("Error!");
    return;
  }

  const json = await response.json(); // parses JSON response into native JavaScript objects
  json.status = response.status;
  json.statusText = response.statusText;
  // console.log(json, typeof(json));
  return json;
}

export { postData, getAccessToken, addUser, getData, addItem };
