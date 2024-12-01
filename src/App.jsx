/* eslint-disable react/prop-types */
import React from "react";

// Class Component
// class ButtonBlack extends React.Component {
//   render() {
//     return (
//       <button
//         className="h-10 px-6 font-semibold rounded-md bg-black text-white"
//         type="submit"
//       >
//         Buy now
//       </button>
//     );
//   }
// }

// functional Component
const Button = (props) => {
  const { background = "bg-black", children = "..." } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md text-white ${background}`}
      type="submit"
    >
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center bg-green-500 font-bold gap-x-2">
      <Button background="bg-red-500">Login</Button>
      <Button background="bg-sky-500">Register</Button>
      <Button></Button>
    </div>
  );
}

export default App;
