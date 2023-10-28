import React from "react";

const MessageItem = ({ message, sender }) => {
  return (
    <div
      style={{
        margin: "1rem .5rem",
        display: "flex",
        // width: "100%",
        justifyContent: sender ? "flex-end" : "flex-start",
      }}
    >
      <h3
        style={{
          color: "whitesmoke",
          textAlign: sender ? "right" : "left",
          backgroundColor: "rgba(24, 22, 22, .8)",
          width: "70%",
          padding: ".2rem 0.5rem",
          borderRadius: 10,
          fontWeight: 300,
        }}
      >
        {message}
      </h3>
    </div>
  );
};

export default MessageItem;
