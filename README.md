# MyResume

## Input
The program takes static data as input, which is hardcoded into the `Resume.js` file. This data includes:
- **Personal Information**: Name, address, phone number, and email address.
- **Education Details**: Information about degrees, universities, graduation dates, and GPA.
- **Skills**: A comprehensive list of programming languages, frameworks, databases, and tools.
- **Work Experience**: Job roles, organizations, durations, and descriptions of responsibilities.
- **Projects**: Summaries of projects with links to GitHub repositories for more details.

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
