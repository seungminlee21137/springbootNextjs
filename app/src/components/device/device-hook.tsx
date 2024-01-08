import { useState } from "react";
import { apiProvider } from "utils/api";

const useHook = () => {
  const [loading, setLoading] = useState(false);
  const [deviceinfo, setDeviceinfo] = useState();
  const [device1, setDevice1] = useState(null);
  const [device2, setDevice2] = useState(null);

  const requestDeviceInfo = async (device = "s22", getType = "1") => {
    // const res = await fetch(`http://localhost:8080/api/device/${device}`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   //   body: JSON.stringify({
    //   //     //   username,
    //   //     //   email,
    //   //     //   password,
    //   //   }),
    // });

    // console.log(device);
    const requestURL = `/device/${device}`;
    const getData = await apiProvider({ requestURL, method: "GET" });

    console.log(getData.id);

    if (getType == "1") {
      setDevice1({ ...getData });
    } else if (getType == "2") {
      setDevice2({ ...getData });
    }
  };

  return {
    loading,
    deviceinfo,
    requestDeviceInfo,
    device1,
    device2,
  };
};

export default useHook;
