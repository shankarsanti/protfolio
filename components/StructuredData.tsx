export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shankar Laxman Santi",
    alternateName: "Shankar Santi",
    url: "https://www.shankarsanti.online",
    image: "https://www.shankarsanti.online/shankar.png",
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Nighan2 Labs Pvt. Ltd.",
      url: "https://nighan2.com/"
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Athani",
      addressRegion: "Karnataka",
      addressCountry: "India"
    },
    email: "shankarsanti2005@gmail.com",
    telephone: "+919035123514",
    sameAs: [
      "https://github.com/shankarsanti",
      "https://www.linkedin.com/in/shankar-santi/",
      "https://www.instagram.com/royal__shankar___/"
    ],
    knowsAbout: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Django",
      "Python",
      "JavaScript",
      "TypeScript",
      "MySQL",
      "Full Stack Development",
      "Web Development",
      "RESTful API",
      "Tailwind CSS"
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Rani Channamma University",
      url: "https://rcub.ac.in"
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shankar Santi Portfolio",
    url: "https://www.shankarsanti.online",
    description: "Full Stack Developer Portfolio showcasing projects, experience, and skills",
    author: {
      "@type": "Person",
      name: "Shankar Laxman Santi"
    },
    inLanguage: "en-US"
  };

  const profilePageData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2024-01-01T00:00:00+00:00",
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: "Shankar Laxman Santi",
      description: "Full Stack Developer specializing in React.js, Node.js, and MongoDB"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageData) }}
      />
    </>
  );
}
