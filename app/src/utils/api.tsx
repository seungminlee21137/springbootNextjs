// import jwt from "jsonwebtoken";

export default async function apiAuthProvider(credentials: any) {
  try {
    console.log(
      "process.env.NEXT_PUBLIC_BACKEND_SERVER== " +
        process.env.NEXT_PUBLIC_BACKEND_API
    );
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/api/auth/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );

    if (!response.ok) {
      throw new Error("Invalid credentials");
    }

    const data = await response.json();
    //verify jwt access token
    // const decoded = jwt.verify(data.accessToken, process.env.NEXT_PUBLIC_JWT_SECRET);
    if (data.error) {
      return { error: data.message };
    }

    const userID = data.userID;
    return { ...data, userID };
  } catch (err: any) {
    return { error: err.message };
  }
}

export const BACKEND_SERVER = process.env.NEXT_PUBLIC_BACKEND_API as string;
export const API_VER = process.env.NEXT_PUBLIC_BACKEND_API_VER as string;

export const Token = process.env.BEARER as string;

export async function apiProvider({
  method = "POST",
  requestURL,
  params = {},
}: any) {
  // const response = await fetch(`${BACKEND_API}${requestURL}`, {
  //   method: "GET",
  // });
  // const jsonData = await response.json();
  // console.log(jsonData);

  const headers = {
    "Content-Type": "application/json",
  };

  let options = null;

  if (method == "POST") {
    // options.body = JSON.stringify(params);
    options = {
      method: `${method}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    };
  } else {
    options = {
      method: `${method}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  try {
    console.log(`${method}::${BACKEND_SERVER}${API_VER}${requestURL}`);

    const response = await fetch(`${BACKEND_SERVER}${API_VER}${requestURL}`, {
      ...options,
    });
    console.log(`response:${response}`);
    if (!response.ok) {
      throw new Error("Invalid credentials");
    }

    const data = await response.json();
    //verify jwt access token
    // const decoded = jwt.verify(data.accessToken, process.env.NEXT_PUBLIC_JWT_SECRET);

    // console.log(`data:${data}`);

    if (data.error) {
      return { error: data.message };
    }

    // const userID = data.userID;
    return { ...data };
  } catch (err: any) {
    console.log(`err:${err}`);

    return { error: err.message };
  }
}
