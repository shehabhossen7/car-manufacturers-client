import React, { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const curentUser = { email: email };
    if (email) {
      fetch(`https://hidden-harbor-39382.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(curentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("user information", data);
          const accessToken = data.accessToken;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
