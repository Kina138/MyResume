# MyResume

## Input
The program takes static data as input, which is hardcoded into the `Resume.js` file. This data includes:
- **Personal Information**: Name, address, phone number, and email address.
- **Education Details**: Information about degrees, universities, graduation dates, and GPA.
- **Skills**: A comprehensive list of programming languages, frameworks, databases, and tools.
- **Work Experience**: Job roles, organizations, durations, and descriptions of responsibilities.
- **Projects**: Summaries of projects with links to GitHub repositories for more details.

The input data is structured into different sections in the `Resume.js` file, ready to be styled and displayed.

---

## Process
The program processes the input data in the following steps:

1. **React Component Structure**:
   - The `Resume.js` file organizes the data into sections like **Education**, **Skills**, **Work Experience**, and **Projects** using JSX syntax.
   - These sections are then imported and rendered within the `App.js` file, which acts as the main entry point for the application.

2. **Styling**:
   - The `Resume.css` file applies styles to format the resume. Key features include:
     - A bright green background (`rgba(189, 251, 4, 1)`).
     - Default black text color for readability.
     - Proper margins, spacing, and alignment to create a clean and professional look.

3. **Dynamic Rendering**:
   - React compiles the code and renders the resume as a web page in real-time.
   - The development server, started with `npm start`, allows live updates in the browser. Any changes made to the input data are reflected dynamically without the need to refresh the page.

---

## Output
The output is a fully functional and visually appealing resume web page with the following features:
- **Header**: Displays the user's name and contact information prominently at the top of the page.
- **Education Section**: Lists academic qualifications, universities, graduation dates, and GPA.
- **Skills Section**: Highlights programming languages, frameworks, and tools in a clear, bullet-point format.
- **Work Experience Section**: Describes job roles, responsibilities, and durations in a structured manner.
- **Projects Section**: Provides clickable links to GitHub repositories along with brief project descriptions.
- **Responsive Design**: The resume is styled to match the assignment’s sample output, featuring proper alignment, spacing, and a bright, professional look.
- **Browser Compatibility**: The resume is rendered dynamically and is viewable on any modern web browser.

This project successfully transforms static input into a polished, dynamic resume web application that fulfills all assignment requirements.

---

## Steps to Run the Application
Follow these steps to run the application on your local machine:

1. **Clone the Repository**:
   - Clone this repository to your local machine using:
     ```bash
     git clone https://github.com/Kina138/MyResume.git
     ```

2. **Navigate to the Project Directory**:
   - Move into the project folder:
     ```bash
     cd MyResume/client
     ```

3. **Install Dependencies**:
   - Ensure all the required dependencies are installed by running:
     ```bash
     npm install
     ```

4. **Start the Development Server**:
   - Run the following command to start the application:
     ```bash
     npm start
     ```
   - This will open the application in your default web browser. If it doesn't open automatically, navigate to `http://localhost:3000`.

5. **View and Test**:
   - You should see the resume web page displayed in the browser.
   - Any changes you make to `Resume.js` or `Resume.css` will be automatically reflected in the browser.

6. **Troubleshooting**:
   - If you encounter any issues, try running:
     ```bash
     npm install
     ```
     - This ensures all dependencies are properly installed.
   - Restart the server with:
     ```bash
     npm start
     ```

With these steps, you can easily run and test the resume application locally.
