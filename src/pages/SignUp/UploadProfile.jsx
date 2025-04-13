import React, { useState, useRef, useEffect } from "react";
import ReactAvatarEditor from "react-avatar-editor";

const UploadProfile = ({ formData, setFormData }) => {
  const [image, setImage] = useState(null);
  const [localFinalImage, setLocalFinalImage] = useState(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 });
  const [rotate] = useState(0);
  const [borderRadius] = useState(50);
  const width = 330;
  const height = 330;
  const editorRef = useRef(null);

  useEffect(() => {
    if (formData.picture) {
      setLocalFinalImage(formData.picture);
    }
  }, [formData.picture]);

  const handleNewImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setLocalFinalImage(null);
      const file = e.target.files[0];
      const fileName = file.name.toLowerCase();
      const allowedExtensions = [".jpg", ".jpeg", ".png"];
      const isAllowed = allowedExtensions.some((ext) => fileName.endsWith(ext));
      if (!isAllowed) {
        alert("Only JPG, JPEG, and PNG files are allowed.");
        return;
      }
      setImage(file);
    }
  };

  const handleScale = (e) => {
    setScale(parseFloat(e.target.value));
  };

  const handlePositionChange = (pos) => {
    setPosition(pos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      const dataURL = canvas.toDataURL();
      setFormData({ ...formData, picture: dataURL });
      setLocalFinalImage(dataURL);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {localFinalImage ? (
        <div className="mt-4 flex flex-col items-center">
          <img
            src={localFinalImage}
            alt="Final Profile"
            className="w-32 h-32 rounded-full border border-[#D9D9D9] object-cover"
          />
          <div className="mt-2">
            <label className="cursor-pointer inline-block text-center px-4 py-2 bg-[#1658f9] text-white rounded-[14px]">
              Change Photo
              <input type="file" className="hidden" onChange={handleNewImage} />
            </label>
          </div>
        </div>
      ) : image ? (
        <div>
          <ReactAvatarEditor
            ref={editorRef}
            image={image}
            width={width}
            height={height}
            position={position}
            onPositionChange={handlePositionChange}
            scale={scale}
            rotate={rotate}
            borderRadius={width / (100 / borderRadius)}
            color={[255, 255, 255, 0.6]}
            className="editor-canvas"
          />
          <div className="mt-2 flex justify-center">
            <label className="cursor-pointer inline-block text-center px-4 py-2 bg-[#1658f9] text-white rounded-[14px]">
              Change Photo
              <input type="file" className="hidden" onChange={handleNewImage} />
            </label>
          </div>
          <div className="mt-4 w-full max-w-xs mx-auto text-center">
            <h3 className="text-sm">Zoom</h3>
            <input
              type="range"
              name="scale"
              min="1"
              max="2"
              step="0.01"
              value={scale}
              onChange={handleScale}
              className="w-full"
            />
          </div>
          <div className="mt-4 flex justify-center">
            <button
              onClick={handleSubmit}
              className="px-4 py-2 mb-2 bg-[#1658f9] text-white rounded-[14px]"
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-4 flex flex-col items-center">
          <div className="w-32 h-32 rounded-full border border-[#D9D9D9] flex items-center justify-center"></div>
          <div className="mt-2">
            <label className="cursor-pointer inline-block text-center px-4 py-2 mb-2 bg-[#1658f9] hover:bg-[#0F4AD0] text-white rounded-[14px]">
              Upload Photo
              <input type="file" className="hidden" onChange={handleNewImage} />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadProfile;
