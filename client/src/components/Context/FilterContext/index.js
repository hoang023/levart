import React from "react";

export const MContext = React.createContext();

function MyProvider({ children }) {
  const [state, setState] = React.useState([]);

  // console.log("statestate", state);

  return (
    <MContext.Provider
      value={{
        state: state,
        setMessage: (value) => {
          let stateData;
          let array;

          array = state.find((state) => state.title === value.title);
          if (array !== undefined) {
            state.find((states) => {
              if (states.title === value.title) {
                states.data = value.data;
              }
            });
            stateData = state.filter((item) => item.data.length !== 0);
            setState([...stateData]);
          } else {
            setState([...state, value]);
          }
        },
      }}
    >
      {children}
    </MContext.Provider>
  );
}

export default MyProvider;
