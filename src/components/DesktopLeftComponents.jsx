import React from "react";

const userStats = [
  { name: "Posts", value: 230 },
  { name: "Followers", value: "2.5k" },
  { name: "Following", value: 330 },
];

const shortcuts = [
  { name: "Polo g" },
  { name: "lil durk" },
  { name: "21 savage" },
  { name: "Red.Head" },
];

export const DesktopProfileCard = () => {
  return (
    <>
      <div className="bg-white p-4 rounded-md">
        <div className="relative">
          <div className="bg-gradient-to-bl from-purple-800 to-blue-600 w-full h-[140px] rounded-3xl" />
          <div className="absolute -bottom-10 left-4 bg-gradient-to-bl from-purple-800 to-blue-600 w-20 h-20 rounded-full border-2 border-white" />
        </div>

        <div className="mt-15 text-center">
          <h2 className="font-bold text-gray-800">Lupo Oluwatobi</h2>
          <p className="text-gray-600">@Oluwatobi</p>
        </div>

        <div className="flex flex-wrap text-sm justify-evenly mt-7">
          {userStats.map((stat) => (
            <div className="text-center">
              <h2 className="font-bold text-gray-950">{stat.name}</h2>
              <p>{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="w-full mx-auto">
          <button className="bg-gradient-to-bl from-purple-800 to-blue-600 w-full mt-5 lg:p-3 md:p-2 rounded-xl text-white font-bold cursor-pointer hover:opacity-[0.6]">
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
};

export const DesktopFavoritesCard = () => {
  return (
    <>
      <div className="bg-white p-4 rounded-md">
        <div className="flex justify-between">
          <h2 className="font-bold text-gray-900">Your favotites</h2>
          <p className="text-gray-600 text-sm cursor-pointer">See all</p>
        </div>

        <div className="mt-7 text-center space-y-8">
          {shortcuts.map(({ name }) => (
            <div className="flex md:gap-1 lg:gap-3 items-center">
              <div className="bg-gradient-to-bl from-purple-800 to-blue-600 w-15 h-15 rounded-full border-2 border-white" />
              <p className="text-gray-950 font-bold md:text-xs lg:text-base">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
