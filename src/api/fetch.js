const baseUrl = process.env.REACT_APP_APIEND;

export const fetchSinToken = async (endpoint, data, method) => {
  const url = `${baseUrl}/${endpoint}`;

  if (method === "GET") {
    console.log("resp");
    const resp = await fetch(url);
    return await resp.json();
  } else {
    const resp = await fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await resp.json();
  }
};

export const fetchConToken = async (endpoint, data, method = "GET") => {
  try {
    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem("token") || "";
    if (method === "GET") {
      const resp = await fetch(url, {
        headers: {
          "x-token": token,
        },
      });
      return await resp.json();
    } else {
      const resp = await fetch(url, {
        method,
        headers: {
          "Content-type": "application/json",
          "x-token": token,
        },
        body: JSON.stringify(data),
      });

      return await resp.json();
    }
  } catch (error) {
    // console.log(error);
    return { ok: false, error };
  }
};

export const uploadFile = async (bodyContent, endpoint, method = "PUT") => {
  // console.log(datos);
  const url = `${baseUrl}/${endpoint}`;
  try {
    let headersList = {
      Accept: "*/*",
    };
    let response = await fetch(`${url}`, {
      method,
      body: bodyContent,
      headers: headersList,
    });
    return await response.json();
  } catch (error) {
    return { ok: false, error };
  }
};
