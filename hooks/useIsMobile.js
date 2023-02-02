import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ query: "(max-width:1000px)" });

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return isMobile;
}

export default useIsMobile;
