import React, { useState } from "react";

function NotificationSettings() {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [expirationDate, setExpirationDate] = useState(false);
  const [invite, setInvite] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-400 ">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-medium">Email notifications</h3>
          <p className="text-gray-600 text-sm">
            Turn on email notifications to receive timely alerts about product expirations, stock levels, and important updates.
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
          />
          <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-[#7E48F0] peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-1/2 after:left-1 after:w-4 after:h-4 after:bg-white after:rounded-full after:transform after:-translate-y-1/2 after:transition-all"></div>
        </label>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-medium">Expiration date</h3>
          <p className="text-gray-600 text-sm">
            Enable expiration notifications to stay ahead of product expiry dates and ensure compliance.
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={expirationDate}
            onChange={() => setExpirationDate(!expirationDate)}
          />
          <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-[#7E48F0] peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-1/2 after:left-1 after:w-4 after:h-4 after:bg-white after:rounded-full after:transform after:-translate-y-1/2 after:transition-all"></div>
        </label>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-medium">Invite</h3>
          <p className="text-gray-600 text-sm">
            Allow notifications when a team member is added to collaborate on inventory management.
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={invite}
            onChange={() => setInvite(!invite)}
          />
          <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-[#7E48F0] peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-1/2 after:left-1 after:w-4 after:h-4 after:bg-white after:rounded-full after:transform after:-translate-y-1/2 after:transition-all"></div>
        </label>
      </div>

      <div className="flex justify-end gap-3 mt-6">
        {/* <button className="px-4 py-2 border border-gray-400 rounded-md text-gray-700 bg-white hover:bg-gray-100 cursor-pointer">
          Cancel
        </button> */}
        <button className="px-4 py-2 bg-[#7E48F0] text-white rounded-md hover:bg-purple-600 cursor-pointer">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default NotificationSettings;
