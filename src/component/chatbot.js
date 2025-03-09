import React, { useEffect } from 'react';

const LiveChatWidget = () => {
  useEffect(() => {
    // Initialize LiveChat configuration
    window.__lc = window.__lc || {};
    window.__lc.license = 19070696; // Replace with your LiveChat license number
    window.__lc.integration_name = "manual_onboarding";
    window.__lc.product_name = "livechat";

    // Load the LiveChat script dynamically
    const script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.src = 'https://cdn.livechatinc.com/tracking.js';
    document.head.appendChild(script);

    // Cleanup: Remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <noscript>
      <a href="https://www.livechat.com/chat-with/19070696/" rel="nofollow">
        Chat with us
      </a>
      , powered by{' '}
      <a
        href="https://www.livechat.com/?welcome"
        rel="noopener nofollow"
        target="_blank"
      >
        LiveChat
      </a>
    </noscript>
  );
};

export default LiveChatWidget;