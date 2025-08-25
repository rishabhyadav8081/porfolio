import React from "react";

// Example video data
const videos = [
  {
    id: 1,
    title: "Viverra turpis pretium",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // preview image
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Cinematography Shots",
    thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
  },
  {
    id: 3,
    title: "Drone Landscape",
    thumbnail: "https://img.youtube.com/vi/kXYiU_JCYtU/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=kXYiU_JCYtU",
  },
  {
    id: 4,
    title: "Behind The Scenes",
    thumbnail: "https://img.youtube.com/vi/2Vv-BfVoq4g/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
  },
];

const Projects = () => {
  return (
    <section id="Projects" className="w-full min-h-screen bg-black flex flex-col items-center justify-center py-10 px-4">
    <h2 className="text-white text-3xl md:text-4xl font-bold mb-10">
        My Projects
      </h2>
      <div className="max-w-3xl w-full flex flex-col gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative group rounded-xl overflow-hidden shadow-lg"
          >
            {/* Thumbnail */}
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-56 md:h-72 object-cover transform group-hover:scale-105 transition duration-300"
            />

            {/* Overlay */}
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition"
            >
              {/* Play Button */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-black text-3xl">
                ▶
              </div>
              <p className="mt-3 text-lg font-semibold text-center px-2">
                {video.title}
              </p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default  Projects;
