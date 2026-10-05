import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
  return (
    <header>
      <h1>Giới thiệu bản thân</h1>
      <p>Sinh viên AIoT - PTIT</p>
    </header>
  );
}

function Section(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      {props.children}
    </section>
  );
}

function SkillList(props) {
  return (
    <ul>
      {props.skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
}

function ProjectList(props) {
  return (
    <ul>
      {props.projects.map((project, index) => (
        <li key={index}>{project}</li>
      ))}
    </ul>
  );
}

function Footer() {
  return <footer>Trang CV cá nhân</footer>;
}

function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React cơ bản"];
  const projects = [
    "Trang giới thiệu bản thân",
    "Máy tính đơn giản"
  ];

  return (
    <div className="cv">
      <Header />

      <main>
        <Section title="Giới thiệu">
          <p>
            Xin chào, tôi là sinh viên ngành AIoT tại PTIT.
            Tôi đang học lập trình web và React cơ bản.
          </p>
        </Section>

        <Section title="Kỹ năng">
          <SkillList skills={skills} />
        </Section>

        <Section title="Dự án">
          <ProjectList projects={projects} />
        </Section>
      </main>

      <Footer />
    </div>
  );
}

const style = document.createElement("style");
style.innerHTML = `
  body {
    font-family: Arial;
    margin: 0;
    background-color: #f2f2f2;
  }

  .cv {
    max-width: 650px;
    margin: 30px auto;
    background-color: white;
  }

  header {
    background-color: #4CAF50;
    color: white;
    text-align: center;
    padding: 20px;
  }

  main {
    padding: 20px;
  }

  section {
    margin-bottom: 20px;
  }

  footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 12px;
  }
`;
document.head.appendChild(style);

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
