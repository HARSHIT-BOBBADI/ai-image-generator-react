import React, { useRef, useState } from "react";
import "./ImageGenerator.css";
import default_image from "../Assets/default_image.svg";
import loading_image from "../Assets/loading_image.jpg"; // Import your loading image

export default function ImageGenerator() {
  const [image_url, setImage_url] = useState("/");
  const [loading, setLoading] = useState(false); // State for loading indicator
  const inputRef = useRef(null);

  const imageGenerator = async () => {
    if (!inputRef.current.value.trim()) {
      alert("Please enter a prompt to generate an image.");
      return;
    }

    try {
      setLoading(true); // Show loading screen
      const prompt = encodeURIComponent(inputRef.current.value.trim());
      const apiUrl = `https://image.pollinations.ai/prompt/${prompt}?width=512&height=512&nologo=true`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const blob = await response.blob(); // Retrieve the image as a blob
      const imageObjectURL = URL.createObjectURL(blob); // Convert the blob to a local URL
      setImage_url(imageObjectURL); // Update the image URL state
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Something went wrong. Please check the console for details.");
    } finally {
      setLoading(false); // Hide loading screen
    }
  };

  return (
    <div className="ai-image-generator">
      <div className="header">
        AI IMAGE <span>GENERATOR</span>
      </div>
      <div className="image-loading">
        {loading ? ( // Show loading image when loading
          <div className="loading-image">
            <img src={loading_image} alt="Loading..." />
          </div>
        ) : (
          <div className="image">
            <img
              src={image_url === "/" ? default_image : image_url}
              alt="Generated"
            />
          </div>
        )}
      </div>
      <div className="search-box">
        <input
          type="text"
          ref={inputRef}
          className="search-input"
          placeholder="Describe what you want to see"
        />
        <div className="generate-btn" onClick={imageGenerator}>
          Generate
        </div>
      </div>
      {image_url !== "/" && !loading && (
        <div className="download-btn">
          <a href={image_url} download="generated_image.png">
            Download Image
          </a>
        </div>
      )}
    </div>
  );
}
