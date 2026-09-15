import selfie from "./Images/Selfies/Selfie.jpg";
import LA from "./Images/Selfies/LA1.jpg";
import Circuit from "./Images/Backgrounds/AboutCirc2.jpg";

const textBoxStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: "10px",
  padding: "20px",
};

export default function About() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${Circuit})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "80px" }}>
        <div style={textBoxStyle}>
          <h1 style={{ padding: "15px" }}>About Me</h1>
          <p className="left-half-text">
            Welcome, my name is Yeng Her! I am a software engineer. I specialize in computer science, particularly in physics, game development, and education.
          </p>
          <p className="left-half-text">
            I began my education at Merced College, where I earned enough credits to transfer to San José State University and earned my bachelor’s degree in Computer Science. My experience spans software development, web applications, game development, technical instruction, and AI research.
          </p>
          <p className="left-half-text">My technical strengths include Java and Python programming, problem-solving, and effective teamwork. I also enjoy sharing my knowledge with others through teaching and technical instruction. Beyond my coursework and professional experience, I have participated in hackathons, led student organizations, and worked on projects ranging from web applications to game development.
          </p>
          <p className="left-half-text">
            I am always looking for opportunities to grow as a software engineer, take on new challenges, and use technology to create meaningful solutions.
          </p>
        </div>
        <img
          src={selfie}
          alt="Nice picture of me"
          style={{ height: "auto", maxWidth: "50%" }}
        />
      </div>

        <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
          <img
            src={LA}
            alt="Another cool pic of me"
            style={{ maxWidth: "50%", height: "auto" }}
          />
          <div style={textBoxStyle}>
            <h1 style={{ padding: "15px" }}>Socials</h1>
            <p className="left-half-text">
              I don't post too much, but here are some of my social media accounts. You can find me on LinkedIn and GitHub.
            </p>
            <p style={{ marginTop: "35px", fontWeight: "bold", fontSize: "22px" }}>
              LinkedIn
            </p>
            <p style={{ fontSize: "18px" }}>
              <a href="https://www.linkedin.com/in/yeng-her-095b38248" target="_blank" rel="noopener noreferrer">
                www.linkedin.com/in/yeng-her-095b38248
              </a>
            </p>
            <p style={{ marginTop: "35px", fontWeight: "bold", fontSize: "22px" }}>
              GitHub
            </p>
            <p style={{ fontSize: "18px", paddingBottom: "330px" }}>
              <a href="https://github.com/YengHer919" target="_blank" rel="noopener noreferrer">
                www.github.com/YengHer919
              </a>
            </p>
          </div>
        </div>
    </div>
  )
}