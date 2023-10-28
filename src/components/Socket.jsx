import React, { memo, useEffect } from "react";
// import useLoggedInUser from "@hooks/useLoggedInUser";
// import { updateMessages } from "@store/slices/chatSlice";
// import { useQueryClient } from "@tanstack/react-query";
// import { useDispatch } from "react-redux";
import { io } from "socket.io-client";
import { useRouter } from "next/router";

// const Socket = () => {
//   const { asPath } = useRouter();
//   const queryClient = useQueryClient();
//   const socketURL =
//     process.env.NODE_ENV === "development"
//       ? "ws://localhost:5000"
//       : process.env.NEXT_PUBLIC_SERVICE_HOST;
//   const dispatch = useDispatch();
//   const { userProfile } = useLoggedInUser();
//   const socket = io(socketURL, {
//     transports: ["websocket"],
//   });
//   useEffect(() => {
//     if (socket && userProfile?._id) {
//       socket.emit("addUser", userProfile?._id);
//     }
//   }, [socket, userProfile?._id]);
//   useEffect(() => {
//     if (socket && userProfile?._id) {
//       socket.on(userProfile?._id, (data) => {
//         if (data.event === "newMessage") {
//           // console.log("/////NEW", data.message);
//           dispatch(updateMessages(data.message));
//           if (data.senderId === userProfile?._id) return;
//           queryClient.invalidateQueries(["getConversations"]);
//         }
//         if (
//           data.event === "presenceStatus" &&
//           asPath.startsWith("/dashboard/conversations")
//         ) {
//           let lastId = null;
//           if (lastId !== data?.data) {
//             lastId = data?.data;
//             queryClient.invalidateQueries(["getConversations"]);
//           }
//         }
//         if (data.event === "currentFair") {
//           queryClient.invalidateQueries(["getAttendeeFair"]);
//         }
//         if (data.event === "connectionRequest") {
//           queryClient.invalidateQueries(["getInvitations"]);
//           queryClient.invalidateQueries(["getConnections"]);
//         }
//       });
//     }
//   }, [socket, userProfile?._id]);
//   return <div />;
// };

const Socket = () => {
  const socket = io("ws://localhost:5000", {
    transports: ["websocket"],
  });

  const { asPath } = useRouter();
  //   const queryClient = useQueryClient();
  const socketURL =
    process.env.NODE_ENV === "development"
      ? "ws://localhost:5000"
      : process.env.NEXT_PUBLIC_SERVICE_HOST;
  //   const dispatch = useDispatch();
  //   const { userProfile } = useLoggedInUser();

  //   useEffect(() => {
  //     if (socket && userProfile?._id) {
  //       socket.emit("addUser", userProfile?._id);
  //     }
  //   }, [socket, userProfile?._id]);
  useEffect(() => {}, [socket]);
  return <div />;
};

export default memo(Socket);
