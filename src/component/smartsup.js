import { useEffect } from "react";

const SmartsuppChat = () => {
  useEffect(() => {
    window._smartsupp = window._smartsupp || {};
    window._smartsupp.key = "";

    if (!document.getElementById("smartsupp-script")) {
      const script = document.createElement("script");
      script.id = "smartsupp-script";
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://www.smartsuppchat.com/loader.js?";
      document.body.appendChild(script);
    }
  }, []);

  return null;
};

export default SmartsuppChat;
