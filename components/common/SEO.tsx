
import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  useEffect(() => {
    // Update Title
    const fullTitle = `${title} | UK Developers`;
    document.title = fullTitle;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      (metaDescription as HTMLMetaElement).name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      (metaKeywords as HTMLMetaElement).name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    const defaultKeywords = "UK Developers, Lahore Real Estate, Construction Company Pakistan, Luxury Apartments Lahore, Commercial Projects Gulberg";
    metaKeywords.setAttribute('content', keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords);

    // Clean up title on unmount (optional, usually handled by next page component)
  }, [title, description, keywords]);

  return null;
};

export default SEO;
