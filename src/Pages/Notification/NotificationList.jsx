import React, { useEffect, useState } from 'react';
import axios from "axios";

const NotificationList = () => {
  const [night, setNight] = useState(false);
  const [enabled, setEnabled] = useState(false);


  const onLight = async () => {
    try {
      setEnabled(!enabled)
      const url = enabled
        ? "http://192.168.0.102/night/off"  // turn OFF when state is ON
        : "http://192.168.0.102/night/on";  // turn ON when state is OFF

      const result = await axios.get(url);
      console.log(result);
      setNight(!enabled); // toggle local state
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {

  }, [])

  return (
    <div>
      <p>Your Light is Now {enabled ? "On" : "Off"}.</p>
      <button
        onClick={() => onLight()}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${enabled ? "bg-green-500" : "bg-gray-300"}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${enabled ? "translate-x-6" : "translate-x-1"
            }`}
        />
      </button>
    </div>
  );
};

export default NotificationList;
