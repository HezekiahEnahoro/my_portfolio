import { useEffect, useState } from "react";
import Hero from "./pages/Hero";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { motion } from "framer-motion";
import Layout from "./layout/Layout";
import profilePic from "./assets/portfolio-image.jpeg";
const API = import.meta.env.SERVER_API || "http://localhost:5000";
export default function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    fetch(`${API}/api/profile`) // we'll build this later in Flask
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch(() => {
        // fallback if backend not running yet
        setProfile({
          name: "Orie Enahoro Hezekiah",
          bio: "Full-Stack Developer and Machine Learning Enthausiast",
          email: "enahoro@example.com",
          img: profilePic
        });
      });
    // Mock project data (replace with backend later)
    const Projects = [
      {
        title: "AI Resume Analyzer",
        description:
          "Scores resumes against job descriptions using NLP and cosine similarity.",
        link: "https://github.com/hezekiah/resume-analyzer",
      },
      {
        title: "Housing Price Predictor",
        description:
          "Predicts Boston housing prices using regression models and Flask API.",
        link: "https://github.com/hezekiah/boston-prices",
      },
      {
        title: "Portfolio Website",
        description:
          "This actual site — built with React, Flask, and Tailwind.",
        link: "https://github.com/hezekiah/my-portfolio",
      },
    ];
    setProjects(Projects);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
      } else {
        alert("Something went wrong: " + result.message);
      }
    } catch (err) {
      alert("Server error. Try again later.");
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Layout>
        <Hero profile={profile} motion={motion} />
        <About />
        <Project projects={projects} motion={motion} />
        <Contact
          formData={formData}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          motion={motion}
          showToast={showToast}
          sending={sending}
        />
      </Layout>
    </>
  );
}
