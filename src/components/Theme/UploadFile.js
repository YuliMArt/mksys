import React, { useContext, useState } from "react";
import { SocketContext } from "../../context/SocketContext";

export const UploadFile = () => {
  const [file, setFile] = useState(null);

  const { socket } = useContext(SocketContext);
  const submitt = () => {
    console.log(file);

    socket.emit("upload", file, (status) => {
      console.log(status);
    });
  };
  const setFilef = (e) => {
    console.log(e.target.files[0].name);
    setFile({ file: e.target.files[0], name: e.target.files[0].name });
  };
  return (
    <div>
      <input
        type="file"
        onChange={setFilef}
        id="upload"
        accept=".jpg, .jpeg, .png, .pdf, .mp4,.JPG, .JPEG, .PNG "
      />
      <button type="button" onClick={submitt}>
        {" "}
        envi{" "}
      </button>
    </div>
  );
};
