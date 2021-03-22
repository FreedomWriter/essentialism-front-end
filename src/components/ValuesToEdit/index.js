import React from "react";
// import { useHistory } from "react-router-dom";

function ValuesToEdit() {
  // let history = useHistory();

  // const handleClick = id => {
  //   history.push(`/edit-values/${id}`);
  // };
  return (
    <section>
      <h2>Values To Edit Component</h2>
      {/* <div >
        <div >
          <h4>current values</h4>
          <div >
            {userValues
              ? userValues.map(val => {
                  return (
                    <div key={val.id} onClick={() => handleClick(val.id)}>
                      <p className={`${val.remove === true && "toggle"}`}>
                        {" "}
                        <strong>{val.name}</strong> because{" "}
                        <strong>{val.description}</strong>
                      </p>
                    </div>
                  );
                })
              : history.push("/home")}
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default ValuesToEdit;
