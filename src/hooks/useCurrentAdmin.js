import { useState, useEffect } from "react";
import axios from "axios";

const useCurrentAdmin = () => {
  const currentUserAPI = "http://localhost:2323/api/v1/admin/currentAdmin";

  console.log("Inside useCheckUser");
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    if (!currentUser) {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");
      if (token && role.toString() === "Admin") {
        axios
          .get(currentUserAPI, {
            headers: {
              authorization: `bearer ${token}`,
            },
          })
          .then((res) => {
            if (res.data) {
              if (res.data.success) {
                setCurrentUser(res.data.admin);
              }
            }
          });
      } else {
        window.location.replace("/admin/login");
      }
    }
  });

  return currentUser;
};

export default useCurrentAdmin;


// import { useState, useEffect } from "react";
// import axios from "axios";

// const useCurrentAdmin = () => {
//   const currentUserAPI = "http://localhost:2323/api/v1/admin/currentAdmin";

//   console.log("Inside useCheckAmin");
//   const [currentAdmin, setCurrentAdmin] = useState();
//   useEffect(() => {
//     if (!currentAdmin) {
//       const token = localStorage.getItem("token");
//       const role = localStorage.getItem("role");
//       if (token && role.toString() === "Admin") {
//         axios
//           .get(currentUserAPI, {
//             headers: {
//               authorization: `bearer ${token}`,
//             },
//           })
//           .then((res) => {
//             if (res.data) {
//               if (res.data.success) {
//                 setCurrentAdmin(res.data.user);
//               }
//             }
//           });
//       } else {
//           window.location.replace("/admin/login");
//       }
//     }
//   });
//   return currentAdmin;
// };

// export default useCurrentAdmin;
