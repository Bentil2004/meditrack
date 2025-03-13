import React, { useState } from "react";

function NavSettings({ onSelect }) {
  const [activeTab, setActiveTab] = useState("Account");

  const tabs = ["Account", "Notification", "General"];

  return (
    <div className="flex bg-[#7E48F0] text-white rounded-lg p-2 w-fit cursor-pointer">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            setActiveTab(tab);
            onSelect(tab);
          }}
          className={`px-6 py-2 rounded-lg transition-all cursor-pointer ${
            activeTab === tab ? "bg-white text-black shadow-md cursor-pointer" : ""
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default NavSettings;
