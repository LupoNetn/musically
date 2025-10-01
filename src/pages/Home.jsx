import React from "react";
import {
  SmileIcon,
  Share,
  ImageIcon,
  VideoIcon,
  AudioLines,
  Heart,
  MessageCircle,
  PlayCircle,
  MoreHorizontal,
} from "lucide-react";

// 🎵 Dummy feed data (replace later with DB/API)
const posts = [
  {
    id: 1,
    user: "John Doe",
    username: "@john",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Currently vibing to Burna Boy’s new album 🔥",
    song: "Last Last - Burna Boy",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
    likes: 120,
    comments: 35,
  },
  {
    id: 2,
    user: "Jane Smith",
    username: "@jane",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "Afrobeats to the world 🌍 Who’s your favorite artist right now?",
    song: null,
    image: null,
    likes: 80,
    comments: 20,
  },
  {
    id: 3,
    user: "Alex",
    username: "@alexmusic",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    content: "This live performance gave me chills!",
    song: "Essence - Wizkid ft. Tems",
    image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=800",
    likes: 200,
    comments: 50,
  },
  {
    id: 4,
    user: "Maya",
    username: "@mayavibes",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    content: "Music is therapy 💜 What’s your healing song?",
    song: "Good Days - SZA",
    image: null,
    likes: 140,
    comments: 18,
  },
  {
    id: 5,
    user: "Chris",
    username: "@chrisbeats",
    avatar: "https://randomuser.me/api/portraits/men/19.jpg",
    content: "Produced this beat today. Who wants to freestyle on it?",
    song: null,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800",
    likes: 95,
    comments: 12,
  },
  {
    id: 6,
    user: "Ella",
    username: "@ellasingz",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    content: "This concert was unforgettable 🎤✨",
    song: null,
    image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=900",
    likes: 210,
    comments: 45,
  },
  {
    id: 7,
    user: "Tunde",
    username: "@tunde",
    avatar: "https://randomuser.me/api/portraits/men/70.jpg",
    content: "Anyone down for a collaborative playlist? Drop suggestions 🎶",
    song: null,
    image: null,
    likes: 67,
    comments: 14,
  },
];

const Home = () => {
  return (
    <div className="pt-32 max-w-2xl mx-auto">
      {/* 🔝 Fixed input bar */}
      <div className="fixed top-16 w-[90%] md:max-w-[400px] xl:max-w-[724px] z-40 bg-white sm:p-3 p-2 flex items-start sm:gap-3 gap-2 shadow-sm mx-auto left-0 right-0">
        {/* Avatar */}
        <div>
          <div className="bg-gradient-to-bl from-purple-800 to-blue-600 w-10 h-10 rounded-full border-2 border-white" />
        </div>

        {/* Input wrapper */}
        <div className="flex-1">
          {/* Input field */}
          <div className="bg-gray-100 relative rounded-lg w-full max-w-2xl">
            <input
              className="w-full pl-3 pr-16 py-3 outline-none bg-transparent rounded-lg text-sm sm:text-base"
              type="text"
              placeholder="Share Your Fav songs..."
            />
            {/* Icons inside input */}
            <div className="absolute inset-y-0 right-3 flex items-center gap-2 text-gray-500">
              <SmileIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              <Share className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>

          {/* Post options (Image / Video / Songs) */}
          <div className="flex gap-3 mt-3 sm:mt-5 text-gray-500 text-xs sm:text-sm">
            <div className="flex gap-2 items-center cursor-pointer">
              <ImageIcon className="w-5 h-5" />
              <p>Image</p>
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <VideoIcon className="w-5 h-5" />
              <p>Video</p>
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <AudioLines className="w-5 h-5" />
              <p>Songs</p>
            </div>
          </div>
        </div>
      </div>

      {/* 📌 Feed Section */}
      <div className="mt-5 space-y-6 px-2 sm:px-0">
        <hr className="text-gray-600" />

        {/* Loop through posts */}
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-4 rounded-lg shadow-sm space-y-3"
          >
            {/* User Info */}
            <div className="flex items-center gap-3">
              <img
                src={post.avatar}
                alt={post.user}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-sm">{post.user}</h3>
                <p className="text-xs text-gray-500">{post.username}</p>
              </div>
            </div>

            {/* Post Content */}
            <p className="text-sm sm:text-base">{post.content}</p>

            {/* Song preview */}
            {post.song && (
              <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
                <PlayCircle className="w-6 h-6 text-blue-500" />
                <p className="text-sm font-medium">{post.song}</p>
              </div>
            )}

            {/* Post Image */}
            {post.image && (
              <img
                src={post.image}
                alt="Post"
                className="w-full rounded-lg object-cover"
              />
            )}

            {/* Action Buttons */}
            <div className="flex justify-between text-gray-500 text-sm mt-2">
              <button className="flex items-center gap-1 hover:text-red-500 transition">
                <Heart className="w-4 h-4" />
                {post.likes}
              </button>
              <button className="flex items-center gap-1 hover:text-blue-500 transition">
                <MessageCircle className="w-4 h-4" />
                {post.comments}
              </button>
              <button className="flex items-center gap-1 hover:text-green-500 transition">
                <Share className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        ))}

        {/* ⬇️ More posts loader */}
        <div className="flex justify-center py-6">
          <MoreHorizontal className="w-6 h-6 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Home;
