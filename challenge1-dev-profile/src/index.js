import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  const skillStyle = {};
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

const Avatar = () => {
  return <img className="avatar" src="https://i.redd.it/n9qrywajuhc61.png" />;
};
const Intro = () => {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>

      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
};
const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" color="#123456" />
      <Skill skill="JavaScript" emoji="💪" color="orangered" />
      <Skill skill="Web Design" emoji="💪" color="yellow" />
      <Skill skill="Git and GitHub" emoji="👍" color="white" />
      <Skill skill="React" emoji="💪" color="#123457" />
      <Skill skill="Svelte" emoji="👶" color="#123457" />
    </div>
  );
};

const Skill = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
