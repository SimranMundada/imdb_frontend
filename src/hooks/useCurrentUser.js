import { useState, useEffect } from "react";
import axios from "axios";

const useCurrentUser = () => {
  const currentUserAPI = "http://localhost:2323/api/v1/user/currentUser/";

  console.log("Inside useCheckUser");
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    if (!currentUser) {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");
      if (token && role.toString() === "User") {
        axios
          .get(currentUserAPI, {
            headers: {
              authorization: `bearer ${token}`,
            },
          })
          .then((res) => {
            if (res.data) {
              if (res.data.success) {
                setCurrentUser(res.data.user);
              }
            }
          });
      } else {
        window.location.replace("/user/login");
      }
    }
  });

  return currentUser;
};

export default useCurrentUser;

// import { useState, useEffect } from "react";
// import axios from "axios";

// const useCurrentUser = () => {
//   const [user, setUser] = useState();
//     useEffect(() => {
//         if (!user) {
//             const token = localStorage.getItem("token");
//             const checkUser = async () => {

//                 try {
//                     if (token) {
//                         const res = await axios.get(
//                             "http://localhost:2323/api/v1/user/currentUser",
//                             {
//                                 headers: {
//                                     authorization: `bearer${token}`,
//                                 },
//                             }
//                         );
//                         if (res) {
//                             if (res.data.success) {
//                                 setUser(res.data.user)
//                             }
//                         }
//                     }
//                 } catch (err) {
//                     setUser(err);
//                 }
//             };
//             checkUser();
//         }
//   });
//   return user;
// };

// export default useCurrentUser;
