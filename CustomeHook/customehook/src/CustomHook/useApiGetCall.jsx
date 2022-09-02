import React, { useEffect } from "react";

const useApiGetCall = (url) => {
  useEffect(
    fetch(url)
      .then((res) => res.json())
      .then((res) => console.log(res)) //store data
      .catch((error) => console.log(error)),
    []
  );
};

export default useApiGetCall;
