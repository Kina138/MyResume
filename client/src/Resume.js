import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Anh (Kina) Bui</h1>
        <p>
          (206) 234 3680 | vananhkina123@gmail.com |{" "}
          <a href="https://linkedin.com/in/buithivananh138/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{" "}
          |{" "}
          <a href="https://github.com/Kina138" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </header>

      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Master of Computer Science</h3>
          <p>City University of Seattle | Anticipated: Dec 2025</p>
          <p>Dean’s List | Relevant Courses: Database Technologies, Data Mining, Artificial Intelligence for Data Science, Machine Learning & Deep Learning, Discrete Math and Algorithms, Cloud Computing Overview.</p>

          <h3>Bachelor of Science in Business Administration</h3>
          <p>City University of Seattle | June 2023</p>
          <p>GPA: 3.94/4.0, Dean’s List | Relevant Courses: Business Analytics Decision Making, Managing Organizational Systems.</p>

          <h3>Bachelor of Art in Business Administration</h3>
          <p>Banking Academy of Vietnam | June 2023</p>
          <p>GPA: 3.86/4.0, Valedictorian | Relevant Courses: Organizational Behavior & Leadership, Strategic Management.</p>
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul className="skills">
          <li><strong>Tools:</strong> MS Office, Tableau, Pivot Tables, Power BI, Google Workspace, Jira, Canva, Notion, WordPress, Figma.</li>
          <li><strong>Technical:</strong> Python, SQL, R, AWS (S3, Glue, Lambda, DynamoDB, SageMaker, CloudWatch), Git, API, Data Analysis.</li>
          <li><strong>Analytical Methods:</strong> Regression, Hypothesis Testing, Linear Programming, Time Series Analysis, Predictive Modeling.</li>
          <li><strong>Project Management:</strong> Product Roadmap Development, Backlog Management, Agile, Lean, Six Sigma.</li>
        </ul>
      </section>

      <section className="section">
        <h2>Work Experience</h2>
        <div className="experience">
          <h3>Program Data Coordinator</h3>
          <p>City University of Seattle, WA | Jan 2024 – Present</p>
          <ul>
            <li>Processed and visualized 500+ WOWI responses, translating insights into actionable career advising.</li>
            <li>Boosted website views by 33% and LinkedIn impressions by 3,900+ through data-driven content strategies.</li>
            <li>Designed and optimized course analytics for 15+ course shells on Bright Space, improving academic operations.</li>
            <li>Organized 25+ events, engaging 100+ participants through data collection and strategic planning.</li>
            <li>Supported and tutored 50+ students in Database System Management using SQLite and Python.</li>
          </ul>

          <h3>Streaming Data Analyst</h3>
          <p>Nimo TV (HUYA Inc.), Vietnam | Jul 2021 – Apr 2023</p>
          <ul>
            <li>Grew a 5,000+ followers base through audience segmentation and engagement analysis.</li>
            <li>Increased revenue by $1,000–$7,000 by transitioning 10% of followers to Discord with targeted strategies.</li>
          </ul>

          <h3>Brand Analytics Specialist (F&B)</h3>
          <p>DOO DOO Production, Vietnam | Oct 2020 – Jul 2021</p>
          <ul>
            <li>Developed targeted marketing strategies, enhancing brand visibility for NYX, Dios, Blake’s House of Jazz, and O2O.</li>
            <li>Optimized resource allocation, leading to a 20% average revenue increase across projects.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="projects">
          <h3>Health Data Analysis: Stroke Prediction</h3>
          <p>Achieved 95.15% accuracy in stroke prediction using logistic regression and data exploration.</p>
          <p>Tech stack: Tableau, Excel (StatTools), Pivot Tables, Histograms.</p>

          <h3>Customer Segmentation on Amazon</h3>
          <p>Segmented 601 Amazon customers into five clusters using Random Forest and GBM to recommend targeted promotions.</p>
          <p>Tech stack: R, randomForest, ggplot2, corrplot, k-means clustering.</p>

          <h3>Check My Ingredients</h3>
          <p>Developed an AI-powered solution to analyze product data and provide health insights for consumers.</p>
          <p>Tech stack: AWS (SageMaker, Lambda, DynamoDB, S3, Cognito, ECS), Google Gemini, VPC, Load Balancer.</p>
        </div>
      </section>

      <section className="section">
        <h2>Achievements</h2>
        <ul>
          <li>3rd Place - UKC 2024 Paper Award (CIT): "AI-assisted, Cloud-based, Comment-first, Context-aware Conversational Programming Practices".</li>
          <li>2nd Place - SET Pitch Competition 2024: "AI-powered sleep pattern analysis".</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
