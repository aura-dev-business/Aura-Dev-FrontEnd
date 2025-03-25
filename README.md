# Aura-Dev-FrontEnd

## Project Setup Guide

This guide will help you set up the project on your local machine and contribute effectively.

### **Prerequisites**
Before starting, ensure you have the following installed:

1. **Install Node.js and npm** (Node.js includes npm):  
   Download and install from [Node.js official website](https://nodejs.org/en)

2. **Install Visual Studio Code (VS Code)**:  
   Download and install from [VS Code official website](https://code.visualstudio.com/)

---

### **Setting up the Project**

#### **1. Fork the Repository**
- Navigate to the repository on GitHub and click the **Fork** button to create a copy under your account.

#### **2. Clone the Forked Repository**
- Open a terminal and run:
  ```sh
  git clone "your-forked-repo-link"
  ```

#### **3. Open the Project in VS Code**
- Open VS Code and navigate to the project folder:
  ```sh
  cd Aura-Dev-FrontEnd
  ```

#### **4. Install Dependencies**
- Run the following command to install project dependencies:
  ```sh
  npm install
  ```

#### **5. Start the Development Server**
- Run the project locally:
  ```sh
  npm run dev
  ```

---

### **Contributing to the Project**

#### **1. Create a New Branch**
- Switch to a new branch for your changes:
  ```sh
  git checkout -b "your-branch-name-react-init"
  ```

#### **2. Make Changes**
- Edit the required files and implement changes as needed.

#### **3. Add Changes Before Commit**
- Stage your changes:
  ```sh
  git add .
  ```

#### **4. Commit Changes**
- Write a meaningful commit message:
  ```sh
  git commit -m "Changed index page"
  ```

#### **5. Push to Your Forked Repository**
- Push the new branch to your forked repo:
  ```sh
  git push origin "your-branch-name-react-init"
  ```

#### **6. Create a Pull Request (PR)**
- Go to your **forked repository** on GitHub.
- Click **Compare & pull request**.
- Ensure you are merging into the main repository.
- Provide a meaningful PR title and description.
- Submit the pull request for review.

---

### **Keeping Your Fork Up-to-Date**
If the original repository gets updated, you should keep your fork in sync:

1. Add the original repository as a remote (only needed once):
   ```sh
   git remote add upstream https://github.com/original-repo/Aura-Dev-FrontEnd.git
   ```

2. Fetch the latest changes from the original repo:
   ```sh
   git fetch upstream
   ```

3. Merge the latest changes into your main branch:
   ```sh
   git checkout main
   git merge upstream/main
   ```

4. Push the updated main branch to your fork:
   ```sh
   git push origin main
   ```

Now your fork is up-to-date with the original repo!

---


