import Roblox from "./Images/Roblox/Roblox.png";
import UCSD from "./Images/Selfies/UCSD.jpg";
import GreenMeals from "./Images/GreenMeals/GreenMealsalt.png";
import Circuit from "./Images/Backgrounds/Circuit.png";

const textBoxStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: "10px",
  padding: "20px",
};

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${Circuit})`,        
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

      {/* Title */}
      <div style={{ ...textBoxStyle, display: "inline-block" }}>
        <h1 style={{ padding: "15px", margin: 0 }}>Welcome to My Portfolio</h1>
      </div>

      {/* Top part */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", padding: "40px 0" }}>
        <div style={textBoxStyle}>
          <p className="home-text" style={{ textIndent: "40px" }}>
            Hi! My name is Yeng Her. I am passionate about developing video games, building websites, and creating technology that connects people. I have a built a strong understanding of computer science principles and programming languages through my education, personal projects, hackathons, and professional research. Some outstanding experieces I've had include winning 2nd place at HackMerced VIII, being a research assistant for a project at UCSD, and teaching a course in Roblox Studio Game Development with iDtech.
          </p>
          <p style={{ marginTop: "40px", fontWeight: "bold", fontSize: "10px", marginLeft: "40px" }}>
            To the right is an image of me graduating from my research program, UCSD STARS in the summer of 2023
          </p>
        </div>
        <img
          src={UCSD}
          alt="Nice picture of me"
          style={{ height: "auto", maxWidth: "50%", paddingLeft: "7%", paddingRight: "7%" }}
        />
      </div>

      {/* Middle part */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", padding: "40px 0" }}>
        <img
          src={GreenMeals}
          alt="GreenMeals picture"
          style={{ height: "auto", maxWidth: "50%", paddingLeft: "3%", paddingRight: "3%", paddingTop: "30px" }}
        />
        <div style={textBoxStyle}>
          <h1 style={{ padding: "15px" }}> Project Highlights </h1>
          <p className="home-text">
            I have worked on a variety of projects, some of my favorite projects include:
            <ul style={{ marginTop: "20px", fontSize: "18px", textIndent: "40px" }}>
              <li>
                SafeGaurd: A chrome extension which incorporates a deep learning model that can detect deepfake videos with high accuracy (HackMercedXi){" "}
                <a href="https://github.com/YengHer919/HackMercedXi" target="_blank" rel="noopener noreferrer">
                  https://github.com/YengHer919/HackMercedXi
                </a>
              </li>
              <li>Roblox Rivals: A multiplayer heroshooter game developed in Roblox Studio. It is unpublished, and still in development</li>
              <li>
                Green Meals: A website developed with three peers that helps businesses sell visually defective or near-expired produce at discounted prices (SJSU).{" "}
                <a href="https://github.com/fungjessica/CS160-GreenMeals" target="_blank" rel="noopener noreferrer">
                  https://github.com/fungjessica/CS160-GreenMeals
                </a>
              </li>
            </ul>
          </p>
          <p style={{ fontSize: "10px", textIndent: "40px", fontWeight: "bold", marginTop: "70px" }}>
            Photo to the left is the login page for GreenMeals
          </p>
        </div>
      </div>

      {/* Bottom part */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", padding: "40px 0" }}>
        <div style={textBoxStyle}>
          <h1 style={{ padding: "15px" }}>Quick Links:</h1>
          <p style={{ marginTop: "35px", fontWeight: "bold", fontSize: "22px", textIndent: "40px" }}>
            LinkedIn
          </p>
          <p style={{ fontSize: "18px", textIndent: "40px" }}>
            <a href="https://www.linkedin.com/in/yeng-her-095b38248" target="_blank" rel="noopener noreferrer">
              www.linkedin.com/in/yeng-her-095b38248
            </a>
          </p>
          <p style={{ marginTop: "35px", fontWeight: "bold", fontSize: "22px", textIndent: "40px" }}>
            GitHub
          </p>
          <p style={{ fontSize: "18px", textIndent: "40px" }}>
            <a href="https://github.com/YengHer919" target="_blank" rel="noopener noreferrer">
              www.github.com/YengHer919
            </a>
          </p>
          <p style={{ fontSize: "10px", marginLeft: "40px", marginTop: "70px", fontWeight: "bold" }}>
            Image to the right is an Roblox game I've been working on based on raining tacos, it is not currently published.
          </p>
        </div>
        <img
          src={Roblox}
          alt="Nice picture of me"
          style={{ height: "auto", maxWidth: "70%", paddingLeft: "5%" }}
        />
      </div>
    </div>
  );
}