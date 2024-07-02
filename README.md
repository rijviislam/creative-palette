
# Creative Palette

This project is for individuals or families looking to purchase Art and Craft item!


## Features
This project have those following Features:

- Fullscreen mode
- Mobile Responsive 
- Tablet Responsive
- Login and Log out Authentication
- when you log in  you can add a product update a product and also delete your product 
- when you log in you can see the details of product information 
- And if you don't have an account then you can create your account and then Login
- To create a account you can go our register page 
- Also you can Login with your social accounts





## Packages and Component Librarys

These packages and component librarys are used in this project

- Swiper slider
- React Hook Form
- React-tooltip
- React-simple-typewriter
- DaisyUI
- Tailwind CSS
- Mamba UI

## Live Site Link
- https://arts-and-craft-3009e.web.app/

## Getting Started

To get a local copy of this project up and running, follow these steps:

### Prerequisites

- Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
- Ensure you have your Firebase and MongoDB configurations ready.

### Installation

1. **Clone the repository** or **download the ZIP file**:
   - **Clone**:
     ```bash
     https://github.com/rijviislam/creative-palette.git
     ```
   - **Download ZIP**:
     - Click on the green "Code" button at the top right of this repository.
     - Select "Download ZIP".
     - Extract the downloaded ZIP file.

2. **Navigate to the project directory**:
   ```bash
   cd your-repository
3. **Install the necessary dependencies:**
     ```bash
     npm install
4. **Set up Firebase and MongoDB configurations:**
- Create a firebaseConfig.js file in the src/config directory (if not already present)
- Add your Firebase configuration
  ```bash // src/config/firebaseConfig.js
  const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
export default firebaseConfig;


5. **MongoDB**
- Create a .env file in the root directory of your project
- Add your MongoDB configuration
  ```bash
  MONGODB_URI=your_mongodb_connection_string
