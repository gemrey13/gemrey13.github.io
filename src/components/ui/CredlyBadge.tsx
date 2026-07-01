import { useEffect } from 'react';

const CredlyEmbedBadge = ({ badgeId } : { badgeId: string }) => {
  useEffect(() => {
    // 1. Create the script element
    const script = document.createElement('script');
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    script.type = "text/javascript";

    // 2. Append it to the document body
    document.body.appendChild(script);

    // 3. Clean up the script if the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    // This is the HTML container Credly looks for
    <div 
      data-iframe-width="150" 
      data-iframe-height="270" 
      data-share-badge-id={badgeId}
      data-share-badge-host="https://www.credly.com"
    />
  );
};

export default CredlyEmbedBadge;