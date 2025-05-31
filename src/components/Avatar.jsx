import React from "react";

function AvatarComponent({ src, alt = "Avatar", styles = "w-10 h-10" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${styles} rounded-full object-cover`}
    />
  );
}

export default AvatarComponent;
// This component renders an avatar image with a circular shape and customizable size.
