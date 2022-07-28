import React from "react";

function Main({ addDiv, handleRemove }) {
  const removeHandler = (e) => {
    handleRemove(Number(e.target.id));
  };

  return (
    <div className="main">
      <div className="main_box">
        {addDiv &&
          addDiv.map((el, index) => {
            return (
              <div key={el.id} className="box">
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <p
                    id={el.id}
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                    onClick={removeHandler}
                  >
                    X
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <p style={{ fontSize: "40px", fontWeight: "bold" }}>
                    {el.number}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Main;
