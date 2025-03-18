import React, { useState } from "react";

function GeneralSettings() {
  const [theme, setTheme] = useState("Light");
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-300">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-medium">Appearance</h3>
          <p className="text-gray-600 text-sm">
            Customize how your theme of the application will look like either dark or white.
          </p>
        </div>
        <select
          className="border border-gray-300 rounded-md p-2 bg-gray-100 text-gray-700 cursor-pointer"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option>Light</option>
          <option>N/A</option>
        </select>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-medium">Two-factor authentication</h3>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={twoFactorAuth}
            onChange={() => setTwoFactorAuth(!twoFactorAuth)}
          />
          <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-purple-500 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-1/2 after:left-1 after:w-4 after:h-4 after:bg-white after:rounded-full after:transform after:-translate-y-1/2 after:transition-all"></div>
        </label>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-medium">Language</h3>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <select
          className="border border-gray-300 rounded-md p-2 bg-gray-100 text-gray-700 cursor-pointer "
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
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

export default GeneralSettings;
