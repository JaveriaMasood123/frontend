import { useState, useEffect } from "react";
import API from "../api";
import "./App.css";

export default function ProfilePreview() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/profile/me");
        setProfile(res.data);
      } catch (err) {
        console.error("Error fetching profile", err);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-preview">
      <h2>{profile.name}</h2>
      <p>{profile.email}</p>
      <p><strong>Skills:</strong> {Array.isArray(profile.skills) ? profile.skills.join(", ") : ""}</p>
      <p><strong>GitHub:</strong> <a href={profile.github} target="_blank" rel="noreferrer">{profile.github}</a></p>
      
      <h3>Projects:</h3>
      <ul>
        {profile.projects.map((proj, idx) => (
          <li key={idx}>
            <strong>{proj.title}</strong> - {proj.description}  
           
          </li>
        ))}
      </ul>
    </div>
  );
}
