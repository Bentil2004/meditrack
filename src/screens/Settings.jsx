import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import NavSettings from "../components/NavSettings";
import AccountSettings from "../components/AccountSettings";
import NotificationSettings from "../components/NotificationSettings";
import GeneralSettings from "../components/GeneralSettings";

function Settings() {
  const [activeTab, setActiveTab] = useState("Account");

  const renderContent = () => {
    switch (activeTab) {
      case "Account":
        return <AccountSettings />;
      case "Notification":
        return <NotificationSettings />;
      case "General":
        return <GeneralSettings />;
      default:
        return <AccountSettings />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col p-6 space-y-6">
        <h2 className="text-3xl text-[#979797] font-bold">Settings</h2>

        <NavSettings onSelect={setActiveTab} />

        <div className="p-6 ">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Settings;
