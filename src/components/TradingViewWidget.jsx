import React, { useEffect, useRef } from "react";

const TradingViewWidget = ({ symbol = "BTCUSD", theme = "light", interval = "D" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    // This function runs when the script is loaded
    const loadTradingViewWidget = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          container_id: containerRef.current.id,
          width: "100%",
          height: 500,
          symbol: symbol, // Symbol, e.g., BTCUSD
          interval: interval, // Timeframe: 1D, 1W, etc.
          timezone: "Etc/UTC",
          theme: theme, // 'light' or 'dark'
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          save_image: false,
        });
      }
    };

    // Add the script to the document
    script.onload = loadTradingViewWidget;
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
      // Remove script after component is unmounted
      document.body.removeChild(script);
    };
  }, [symbol, theme, interval]); // Re-run if any prop changes

  return (
    <div className="tradingview-widget-container">
      <div ref={containerRef} id="tradingview_widget" />
    </div>
  );
};

export default TradingViewWidget;
