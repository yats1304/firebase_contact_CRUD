import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";

const ContactCard = ({ contact }) => {
  return (
    <div
      key={contact.id}
      className="bg-[#FFEAAE] flex justify-between items-center p-2 rounded-lg"
    >
      <div className="flex gap-1">
        <HiOutlineUserCircle className="text-[#F6820C] text-4xl" />
        <div>
          <h2 className="font-medium">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
        </div>
      </div>
      <div className="flex text-3xl gap-2">
        <RiEditCircleLine />
        <IoMdTrash className="text-[#F6820C]" />
      </div>
    </div>
  );
};

export default ContactCard;
