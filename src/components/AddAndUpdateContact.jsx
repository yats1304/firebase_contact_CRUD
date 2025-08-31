import React from "react";
import Modal from "./Modal";
import { Field, Form, Formik } from "formik";

const AddAndUpdateContact = ({ isOpen, onClose }) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik>
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 border" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field type="email" name="name" className="h-10 border" />
            </div>
            <button className="bg-[#F6820C] px-3 py-1.5 border self-end">
              Add Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
