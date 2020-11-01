import React from "react";
import profiles from "./contents/execercice";
import Card from "./components/Card/Card";

const App = () => {
  return (
    <>
      <label style={{ marginLeft: 40 }}>
        Nous avons generer {profiles.length} profiles differents
      </label>
      {profiles.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              flexDirection: "row",
              justifyItems: "center",
            }}
          >
            <Card
              eyesColor={item.eyesColor}
              body={item.body}
              hairColor={item.hairColor}
              nationality={item.nationality}
              skinColor={item.skinColor}
            />
          </div>
        );
      })}
    </>
  );
};

export default App;
