//------------------------------ v1

// import React, { useContext } from "react";
// import { UserContext } from "../../../../contexts";

// function UserData() {
//   const user = useContext(UserContext);

//   return (
//     <div style={{ padding: "20px", border: "2px solid white" }}>
//       <h2>UserData</h2>
//       <h3>
//         {user.firstName} {user.lastName}
//       </h3>
//     </div>
//   );
// }

// export default UserData;

//------------------------------ v2

import { UserContext } from "../../../../contexts";

function UserData() {
  return (
    <UserContext.Consumer>
      {(user) => (
        <div style={{ padding: "20px", border: "2px solid white" }}>
          <h2>UserData</h2>
          <h3>
            {user.firstName} {user.lastName}
          </h3>
        </div>
      )}
    </UserContext.Consumer>
  );
}

export default UserData;
