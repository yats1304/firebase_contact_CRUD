# React Firebase Contact App

A responsive React application for managing contacts with real-time Firebase Firestore integration. Easily add, edit, delete, and search contacts through a clean and intuitive user interface styled with Tailwind CSS.

---

## Features

- Add, update, delete contacts
- Real-time syncing with Firebase Firestore
- Search contacts by name
- Responsive design using Tailwind CSS
- Form validation with Formik and Yup
- User notifications with react-toastify

---

## Screenshots

![Contact List](https://github.com/user-attachments/assets/b8919368-0d30-443d-82c8-8687abbfede8)  
*View all contacts and search*

![Add Contact Modal](https://github.com/user-attachments/assets/bec0cbe2-a4ba-416d-8c4e-c76f7eef8f7a)  
*Add or update a contact*


## Installation

1. Clone the repository:
- https://github.com/yats1304/firebase_contact_CRUD

2. Navigate into the project directory:
- firebase_contact_CRUD

3. Install dependencies:
npm install


4. **Set up Firebase:**
- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
- Enable Firestore database.
- Create a `.env` file in the project root and add your Firebase config:
  ```
  VITE_FIREBASE_API_KEY=your_api_key
  VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
  VITE_FIREBASE_PROJECT_ID=your_project_id
  VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
  VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
  VITE_FIREBASE_APP_ID=your_app_id
  ```
- Ensure `.env` is in `.gitignore` to keep your keys secure.


5. Start the development server:
- npm run dev
