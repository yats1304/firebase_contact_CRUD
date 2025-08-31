import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import { useState } from "react";
import useDisclose from "../hooks/useDisclose";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclose();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="text-[#F6820C] cursor-pointer"
          />
        </div>
      </div>
      <AddAndUpdateContact
        contact={contact}
        isUpdate
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  );
};

export default ContactCard;
