import { useState } from "react";
import Winton from "./Images/SwordandShield/Winton.png";
import AttackGif from "./Images/SwordandShield/AttackGif.gif";
import SwordWalk from "./Images/SwordandShield/SwordWalk.gif";
import walk from "./Images/SwordandShield/Walk.gif";
import run from "./Images/SwordandShield/RunAnim.gif";
import HouseGuard from "./Images/SwordandShield/HouseGuard.png";
import SeniorOverseer from "./Images/SwordandShield/SeniorOverseer.png";

import GreenMeals from "./Images/GreenMeals/GreenMeals.png";
import GreenMealsMap from "./Images/GreenMeals/GreenMealsMap.png";

import DeepFake from "./Images/Hackathons/DeepFake.png";
import FinTrack from "./Images/Hackathons/FinTrack.jpg";

import RobloxRivals from "./Images/Roblox/RobloxRIvalsImg.png";
import cannons from "./Images/Roblox/Cannons.png";
import cheese from "./Images/Roblox/Cheese.png";
import logos from "./Images/Roblox/Logos.png";
import roblox from "./Images/Roblox/Roblox.png";
import showcase from "./Images/Roblox/RobloxRivalsShowcase.mp4";
import death from "./Images/Roblox/DeathTrap.mp4";

import AvalotTitle from "./Images/Avalot/AvalotTitle.png";
import AvalotEnd from  "./Images/Avalot/AvalotEnd.png";
import scum from "./Images/Avalot/ScummVm.png";
import six from "./Images/Avalot/avalot-6.png";

import Space from "./Images/GameDev/Space.png";
import Eyes from "./Images/GameDev/Eyes.png";
import OctTree from "./Images/GameDev/OctTree.png";
import impulse from "./Images/GameDev/impulse-er.mp4";

import VR from "./Images/Misc/VR.png";
import Food from "./Images/Misc/Food.png";
import Decryptoid from "./Images/Misc/Decryptoid.png";

import Project from "./Images/Backgrounds/Projects.jpg";

type TextSection = { type?: "text"; img: string; alt: string; heading: string; text: React.ReactNode };
type GalleryItem = { src: string; alt: string; type?: "image" | "video" | "youtube" };
type GallerySection = { type: "gallery"; heading: string; images: GalleryItem[] };
type Section = TextSection | GallerySection;

const projects = [
  {
    id: "sword-and-shield",
    text: "Sword and Shield",
    img: Winton,
    alt: "Sword and Shield",
    sections: [{
      img: Winton, alt: "Sword and Shield", heading: "Overview",
      text: (
        <>
          Sword and Shield is a 3D action-adventure game. The main goal is to fight through hordes of enemies and eventually defeat Lord Winton.
          The game follows the riveting story of a knight traveling through an island filled with danger and mystery. Lord Winton has taken control
          of the island and is exploting a mystical extradimensional resource, <em>the Rift</em>. The game is being developed using Krita for 2D art,
          Blender for 3D modeling, and Godot for game development. The game is being developed by a small team of 2 people, including myself. It is still
          in the very early stages of development and no major work has been completed yet. But it is an ongoing project and the team hopes to bring it to full fruition.
        </>),
      },
    {
      img: AttackGif, alt: "Sword and Shield", heading: "My Contributions",
      text: "I've worked diligently with the game story, level design, and game mechanics. More specifically, I started on the development of the game's combat system, including the enemy awareness states, combat AI, and combat director. I've also helped write mutliple story drafts and scuplt key moments, designed for character growth and player immersion. Lastly, I have drawn up a variety of different enemy NPCs, including the main villian himself, Lord Winton (pictured above). I am currently working on 3d animations, including idle, walking, attacking, and so many more."
    },
  {
    type: "gallery",
    heading: "Gallery",
    images: [
      { src: SwordWalk, alt: "Walking animation" },
      { src: walk, alt: "Walk cycle" },
      { src: run, alt: "Run animation" },
      { src: HouseGuard, alt: "HouseGuard" },
      { src: SeniorOverseer, alt: "SeniorOverseer" },
    ],
  },
] as Section[],
  },
  {
    id: "GreenMeals",
    text: "GreenMeals",
    img: GreenMeals,
    alt: "GreenMeals",
    sections: [
      { img: GreenMeals, alt: "GreenMeals", heading: "Overview", 
        text: "GreenMeals was created as a final project for a college course and was built by a group of four including me. The purpose of GreenMeals is to allow buisness owners to sell produce that is visually defective or near expired, thus reducing the carbon foot print. It was made using using JavaScript, CSS, and HTML with a MySQL database." },
      { img: GreenMealsMap, alt: "GreenMeals Map", heading: "My Contribution",
        text: (
          <>
            My role in this project was to develop the front end map of the project. I implemented it using the Leaflet JavaScript Library. I also created the navigation bar at the top so users could switch tabs. Next, I created the search bar and connected the search functionality with the map to have it display real time results. You can find the project {" "}
            <a href="https://github.com/fungjessica/CS160-GreenMeals" target="_blank" rel="noopener noreferrer">
              here
            </a>
          </>
        ),
      }
    ] as Section[],
  },
  {
    id: "safeguard",
    text: "Hackathon Projects",
    img: DeepFake,
    alt: "Hackathons",
    sections: [
      { img: DeepFake, alt: "SafeGuard", heading: "SafeGuard", 
        text: (<>With the rise of AI and AI created content, the risk of misinformation and propaganda are higher than ever. SafeGuard 
          helps protects Instagram users from such AI generated content. It is a chrome extension that scanns images and provides a prediction 
          with the chance of an image being AI and why. This was created in a team of three, including me using JavaScript, HTML, and 
          CSS with API's to both OpenAI and Google Gemini. It is a submission for HackMercedXI. My contributions to this project
          included intial project set up, video scanning functionality, and testing.
          You can find the project  <a href="https://github.com/YengHer919/HackMercedXI" target="_blank" rel="noopener noreferrer"> here</a> and <a href="https://devpost.com/software/safeguard-ln43bp" target="_blank" rel="noopener noreferrer"> here </a></>) },
      {img: FinTrack, alt: "FinTrack", heading: "Fintrack",
        text: (<>Keep track of your finances with FinTrack! The only digital wallet you'll ever need. FinTrack keeps track of spending, 
        investments, and even keeps watch of the biggest influencers on the market, allowing users to invest and trade while using the app. 
        It was built using JavaScript, HTML, CSS, and the AlphaVantage API for realtime market data. It was built in a team of 4 including me.
        My contributions to this project include integrating the AlphaVantage AI and creating the first draft of the homepage and widget navigation.
        You can find the project <a href="https://github.com/YengHer919/HackMercedX" target="_blank" rel="noopener noreferrer"> here</a> and 
        <a href="https://devpost.com/software/fintrack-szyr9m" target="_blank" rel="noopener noreferrer"> here </a></>) },
    ] as Section[],
  },
  {
    id: "roblox-rivals",
    text: "Varous Roblox Projects",
    img: RobloxRivals,
    alt: "Roblox Rivals and Tacos Incremental",
    sections: [
      { img: RobloxRivals, alt: "Roblox Rivals", heading: "Roblox Rivals", text: "Roblox Rivals is a multiplayer first person hero shooter. It is in the very early stages of development and is not yet published. It incorporates linear algebra and 3D rays for gun and ability functionalities. I've worked on this project solo on and off for about one year. This project has strengthened my game developing skills, particularly in Roblox animation, scripting, events, character design, etc." },
      { img: roblox, alt: "Tacos Incremental", heading: "Taco Rain Incremental", text: "Taco Rain Incremental is a game where players collect tacos raining from the sky and gain points, using those points to buy upgrades and accelerate their taco collecting spree! Players can explore various taco islands and taco variants. This is in early prodcution and has not been released. It is currently being developed in a team of 2 including me." },
      { img: logos, alt: "Guess the Logo Deathtraps", heading: "Guess the Logo Deathtraps", text: "Guess the Logo Deathtraps is a game I designed while private tutoring. It showcases Roblox Game Design fundamentals in a fun and exciting way. The premise of the game is to move forward while correctly guessing which logos are real. Upon failure to do so, the player will be teleported to a death trap where they will fight for a chance at redemption" },
      {
      type: "gallery",
      heading: "Gallery",
      images: [
        { src: cannons, alt: "Walking animation" },
        { src: cheese, alt: "Walk cycle" },
        { src: showcase, alt: "Run animation", type: "video"  },
        { src: death, alt: "HouseGuard", type: "video"  },
      ],
    },
    ] as Section[],
  },
  {
    id: "vr-lab",
    text: "Virtual Reality Interaction Application Lab",
    img: VR,
    alt: "Virtual Reality Application",
    sections: [
      { img: VR, alt: "Virtual Reality Application", heading: "Overview", 
        text: (<>This project was built to teach myself how to develop an interactive VR enviornment in Unity. It features different physics 
        for block grabbing, even activation through remote interaction, socket interactables, ray and touch pointers for UI interaction, and 
        interaction contraints. You can find the project <a href="https://github.com/YengHer919/VR_Tutorial" target="_blank" rel="noopener noreferrer"> here</a></>) },
    ] as Section[],
  },
  {
    id: "scummvm",
    text: "ScummVM GSOC Qualifier Submission", // https://github.com/scummvm/scummvm/pull/7371
    img: scum,
    alt: "Avalot Title Screen",
    sections: [
      { img: scum, alt: "Avalot Title Screen", heading: "Overview", 
        text:(<>This project was a part of the Google Summer of Code qualifying submission. I chose to implement the ending screen to the game,
        Lord Avalot d'Argent in the Avalanche Engine from ScummVM. This project involved finding and analyzing source code, then translating it into
        C++. A main challenge I faced was having to read a file with an unfamiliar data type and then display its contents to render the final
        ending screen. I had a lot of help from various mentors within the program. 
        You can find my contribution <a href="https://github.com/scummvm/scummvm/pull/7371" target="_blank" rel="noopener noreferrer"> here</a></>) },
        {
      type: "gallery",
      heading: "Gallery",
      images: [
        { src: AvalotTitle, alt: "Walking animation" },
        { src: six, alt: "Walk cycle" },
        { src: AvalotEnd, alt: "Walk cycle" },
      ],
    },
    ] as Section[],
  },
  {
    id: "space-landing",
    text: "Space Landing Simulation Game",
    img: Space,
    alt: "Space Landing Simulation Game",
    sections: [
      { img: Space, alt: "Space Landing Simulation Game", heading: "Overview", 
        text: (<>This game is my final project for Video Game Design. It incorportates real time physics to simulate extraterrestrial 
        gravity, space shuttle lift, and collisions. The game requires players to pilot and land in the landing areas as softly as possible
        failure to land in the landing zone at a safe speed results in an explosion and loss. This game was made in a team of two including 
        me and was built in C++ using the OpenFrameworks. My contribution to this project included all the 3d modeling and rendering, creating
        the fuel system, testing, particle simulation, and more.
        You can find the project <a href="https://github.com/lesandra007/3D-Landing-Simulation-Game" target="_blank" rel="noopener noreferrer"> here</a></>) },
      {type: "gallery",
      heading: "Gallery",
      images: [
        { src: Eyes, alt: "Walking animation" },
        { src: OctTree, alt: "Walk cycle" },
        { src: impulse, alt: "Run animation", type: "video" },
        { src: "KdpQkL-xq_g", alt: "Trailer", type: "youtube" },
      ]
      },
    ] as Section[],
  },
  {
    id: "calorie-planner",
    text: "Calories Deficit Planner",
    img: Food,
    alt: "Calories Deficit Planner",
    sections: [
      { img: Food, alt: "Calories Deficit Planner", heading: "Overview", 
        text: (<>This project was created in a group of three including me. It is a showcase of our proficeincy in relational database usage and organization
        This project was made in Java, launched using Apache Tomcat, and uses MySQL as its database. The purpose of the app is to keep track of 
        various user health metrics and generate unique diets and exercise plans optimal to each user. My role in this project was implementing
        the dietary and exercise calculation and generation logic as well as the front end design for each of the pages. 
        You can find the project <a href="https://github.com/NamNgHH/CS-157-Project" target="_blank" rel="noopener noreferrer"> here</a></>) },
    ] as Section[],
  },
  {
    id: "decryptoid",
    text: "Decryptoid Website",
    img: Decryptoid,
    alt: "Decryptoid Website",
    sections: [
      { img: Decryptoid, alt: "Decryptoid Website", heading: "Overview", 
        text: (<>This website was created as a final to my web design course. This was made in a team of two including me and its function
        is to encrypt and decrypt three different cyphers, Simple Substitution, RC4, and Double Transposition. I contributed the double transposition
        functionality and made the input and output for the website. This was created in PHP and was launched using XAMPP.
        You can find the project <a href="https://github.com/YengHer919/CS174Decryptoid" target="_blank" rel="noopener noreferrer"> here</a></>) },
    ] as Section[],
  },
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const backgroundStyle = {
    padding: "20px",
    boxSizing: "border-box" as const,
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${Project})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    width: "100%",
    margin: 0,
  };

  if (selectedId) {
    const selected = projects.find((p) => p.id === selectedId);
    if (!selected) return null;

    return (
      <div style={backgroundStyle}>
        <button
          onClick={() => setSelectedId(null)}
          style={{ marginBottom: "20px", padding: "8px 16px", cursor: "pointer" }}
        >
          ← Back to Projects
        </button>

        <div>
          <h1 style={{ padding: "15px" }}>{selected.text}</h1>
        </div>

        {selected.sections.map((s, i) => {
          if (s.type === "gallery") {
            return (
              <div key={i} style={{ marginTop: "40px", textAlign: "center" }}>
                <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>
                  {s.heading}
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "20px",
                  }}
                >
                  {s.images.map((image, j) => {
                    if (image.type === "youtube") {
                      return (
                        <iframe
                          key={j}
                          src={`https://www.youtube.com/embed/${image.src}`}
                          title={image.alt}
                          style={{ width: "100%", height: "250px", borderRadius: "8px", border: "none" }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      );
                    }

                    if (image.type === "video") {
                      return (
                        <video
                          key={j}
                          src={image.src}
                          controls
                          style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }}
                        />
                      );
                    }

                    return (
                      <img
                        key={j}
                        src={image.src}
                        alt={image.alt}
                        style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }}
                      />
                    );
                  })}
                </div>
              </div>
            );
          }

          const isEven = i % 2 === 0;
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "20px",
                marginTop: "40px",
                flexDirection: isEven ? "row" : "row-reverse",
              }}
            >
              <img
                src={s.img}
                alt={s.alt}
                style={{ maxWidth: "50%", height: "auto" }}
              />
              <div>
                <h2 style={{ padding: "10px" }}>{s.heading}</h2>
                <p className="left-half-text">{s.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div style={backgroundStyle}>
      <h1 style={{ paddingBottom: "25px" }}>Projects</h1>
      <p>Here are some of my projects, Click the image to view more details</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          rowGap: "30px",
          columnGap: "20px",
          alignItems: "center",
          paddingTop: "20px",
        }}
      >
        {projects.map((p) => (
          <div key={p.id} style={{ display: "contents" }}>
            <p style={{ margin: 0, textAlign: "left", paddingLeft: "150px", fontWeight: "bold", fontSize: "20px" }}>
              {p.text}
            </p>
            <img
              src={p.img}
              alt={p.alt}
              onClick={() => setSelectedId(p.id)}
              style={{ width: "800px", height: "600px", objectFit: "cover", padding: "10px", cursor: "pointer" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}