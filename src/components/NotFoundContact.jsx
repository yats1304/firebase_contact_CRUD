import React from "react";

const NotFoundContact = () => {
  return (
    <div className="flex m-auto h-[80vh] gap-4 justify-center items-center">
      <div>
        <img src="/contact.png" alt="not found" />
      </div>
      <h3 className="text-2xl text-white font-semibold">Contact Not Found</h3>
    </div>
  );
};

export default NotFoundContact;
