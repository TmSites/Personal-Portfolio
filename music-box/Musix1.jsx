import React, { useRef, useState, useEffect } from "react";
import "./Musix1.css"; // CSS file (same as below)

export default function MusicBox() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!isPlaying) audio.play();
    else audio.pause();
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio.duration) {
      const percent = (audio.currentTime / audio.duration) * 100;
      setProgress(percent);
    }
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const value = e.target.value;
    audio.currentTime = (value / 100) * audio.duration;
    setProgress(value);
  };

  const handleVolume = (e) => {
    const audio = audioRef.current;
    const value = e.target.value;
    audio.volume = value;
    setVolume(value);
  };

  // optional: reset progress when song ends
  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("ended", () => setIsPlaying(false));
  }, []);

  return (
    <div className="music-box">
      <div className="music-card">
        <div className="disc-container">
          <div className={`disc ${isPlaying ? "spin" : ""}`}></div>
        </div>
        <h2 className="title">Relaxing Melody</h2>

        <input
          type="range"
          className="progress-bar"
          value={progress}
          onChange={handleSeek}
        />

        <div className="controls">
          <button className="play-btn" onClick={togglePlay}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <input
            type="range"
            className="volume-slider"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolume}
          />
        </div>

        <audio
          ref={audioRef}
          src="/song.mp3"  // Put your song in public folder
          onTimeUpdate={handleTimeUpdate}
        ></audio>
      </div>
    </div>
  );
}
