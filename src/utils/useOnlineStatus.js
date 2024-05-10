import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [networkStatus, setNetworkStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setNetworkStatus(false);
    });

    window.addEventListener("online", () => {
      setNetworkStatus(true);
    });
  }, []);

  return networkStatus;
};

export default useOnlineStatus;
