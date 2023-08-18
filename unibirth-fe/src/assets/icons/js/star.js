import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { nicknameState } from "../../../recoil/atoms";
import { get, ref } from "firebase/database";
import { database } from "../../../api/useFirebaseApi";

const Star = () => {
  const nickname = useRecoilValue(nicknameState);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [checkUpdate, setCheckUpdate] = useState(null);

  useEffect(() => {
    const fetchUpdates = async () => {
      // Fetching lastUpdate as before
      // Fetching checkUpdate from the new reference
      const checkUpdateRef = ref(database, `checkAlarm/${nickname}`);
      const checkUpdateSnapshot = await get(checkUpdateRef);
      if (checkUpdateSnapshot.exists()) {
        setCheckUpdate(checkUpdateSnapshot.val());
      }

      // Fetching lastUpdate as before
      const lastUpdateRef = ref(database, `updateAlarm/${nickname}`);
      const lastUpdateSnapshot = await get(lastUpdateRef);
      if (lastUpdateSnapshot.exists()) {
        setLastUpdate(lastUpdateSnapshot.val());
      }
    };

    fetchUpdates();
  }, [nickname]);

  const fillColor = lastUpdate > checkUpdate ? "yellow" : "white";

  return (
    <div className="relative">
      <svg
        width="30"
        height="28"
        viewBox="0 0 30 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.5099 9.28667L19.525 8.59376L16.4069 1.25224C15.8459 -0.0840805 13.9322 -0.0840805 13.3713 1.25224L10.2532 8.61026L2.28475 9.28667C0.832944 9.40216 0.239023 11.2169 1.34438 12.1738L7.39907 17.4201L5.58431 25.2071C5.25436 26.6259 6.78865 27.7477 8.04248 26.9888L14.8891 22.8644L21.7357 27.0053C22.9895 27.7642 24.5238 26.6424 24.1938 25.2236L22.3791 17.4201L28.4338 12.1738C29.5391 11.2169 28.9617 9.40216 27.5099 9.28667ZM14.8891 19.7793L8.6859 23.5243L10.3357 16.4632L4.85841 11.7118L12.0844 11.0849L14.8891 4.43632L17.7102 11.1014L24.9362 11.7283L19.459 16.4797L21.1087 23.5408L14.8891 19.7793Z"
          fill="white"
        />
      </svg>
      {fillColor === "yellow" && (
        <div
          className="absolute rounded-full bg-red-600"
          style={{
            position: "absolute",
            right: "0px",
            top: "0px",
            width: "8px",
            height: "8px",
          }}
        />
      )}
    </div>
  );
};

export default Star;
