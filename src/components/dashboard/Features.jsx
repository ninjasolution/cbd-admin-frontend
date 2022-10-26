import LiveKamera from "./LiveKamera";
import MarketingLinks from "./MarketingLinks";
import LoginHistory from "./LoginHistory";

function Features() {
  return (
    <div className="mt-16 mb-12">
      <div className="flex  flex-wrap">
        <MarketingLinks />
        {/* <LiveKamera /> */}
        <LoginHistory />
      </div>
    </div>
  );
}

export default Features;
