import { Helmet } from "react-helmet-async";
import React from "react";
import Favicon from "../../assets/icon/favicon.ico";

interface HeadProps {
  title?: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article" | string;
  twitterCard?: "summary" | "summary_large_image";
  siteName?: string;
}

const Head: React.FC<HeadProps> = ({
  title,
  description,
  keywords = "",
  canonical = "https://codewithgem.is-a.dev/",
  image = "",
  type = "website",
  twitterCard = "summary_large_image",
  siteName = "Gem | Web Developer & Software Developer",
}) => {
  const fullTitle = title ? `${title} - ${siteName}` : siteName;

  return (
    <Helmet>
      <link rel="icon" href={Favicon} type="image/x-icon" />

      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="author" content="Gem Rey" />
      <meta name="robots" content="index, follow" />
      <meta property="og:locale" content="en_US" />
      <meta name="theme-color" content="#0f172a" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content={siteName} />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default Head;
