import { useEffect } from 'react';

const CredlyEmbedBadge = ({ badgeId }: { badgeId: string }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    script.type = "text/javascript";
    script.id = `credly-script-${badgeId}`;

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [badgeId]);

  return (
    /* 1. Parent container manages limits and forces the correct aspect ratio */
    <div className="w-full max-w-[320px] min-w-[150px] aspect-[320/270] flex justify-center items-center">
      {/* 2. Target the injected element with forced specific style overrides */}
      <div 
        className="w-full h-full [&_iframe]:!w-full [&_iframe]:!h-full [&_iframe]:max-w-full"
        data-iframe-width="320" 
        data-iframe-height="270" 
        data-share-badge-id={badgeId}
        data-share-badge-host="https://www.credly.com"
      />
    </div>
  );
};

export default CredlyEmbedBadge;