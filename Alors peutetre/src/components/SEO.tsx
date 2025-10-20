import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogImage?: string;
}

export const SEO = ({
  title = "Gonzalez Espace Vert - Paysagiste à Lanta (31) | Tonte, Taille, Fauchage",
  description = "Julien Gonzalez, paysagiste professionnel à Lanta. Services d'entretien de jardin : tonte de pelouse, taille de haies, fauchage, entretien régulier. Intervention dans un rayon de 20km autour de Lanta. Paiement CESU accepté avec crédit d'impôt 50%.",
  keywords = "paysagiste Lanta, jardinier Lanta, tonte pelouse Lanta, taille haies Lanta, entretien jardin Lanta, fauchage Lanta, Gonzalez Espace Vert, paysagiste 31280, CESU jardinage, crédit impôt jardinage, paysagiste Haute-Garonne",
  author = "Julien Gonzalez - Gonzalez Espace Vert",
  ogImage = "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&h=630&fit=crop"
}: SEOProps) => {
  useEffect(() => {
    // Titre de la page
    document.title = title;

    // Fonction helper pour définir ou mettre à jour les balises meta
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Meta tags de base
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('author', author);
    setMetaTag('robots', 'index, follow');
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph (Facebook, LinkedIn)
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:locale', 'fr_FR', true);

    // Twitter Card
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    // Géolocalisation pour SEO local
    setMetaTag('geo.region', 'FR-31');
    setMetaTag('geo.placename', 'Lanta');
    setMetaTag('geo.position', '43.5667;1.6333'); // Coordonnées approximatives de Lanta

    // Données structurées JSON-LD pour Google
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://gonzalez-espace-vert.fr",
      "name": "Gonzalez Espace Vert",
      "image": ogImage,
      "description": description,
      "telephone": "+33769896606",
      "email": "julien31280.jbc@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lanta",
        "addressRegion": "Occitanie",
        "postalCode": "31280",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "43.5667",
        "longitude": "1.6333"
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "43.5667",
          "longitude": "1.6333"
        },
        "geoRadius": "20000"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:30",
        "closes": "17:30"
      },
      "priceRange": "€€",
      "paymentAccepted": "CESU",
      "founder": {
        "@type": "Person",
        "name": "Julien Gonzalez",
        "jobTitle": "Paysagiste"
      },
      "serviceType": ["Tonte de pelouse", "Taille de haies", "Fauchage", "Entretien de jardin"],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "1"
      }
    });
    document.head.appendChild(script);

  }, [title, description, keywords, author, ogImage]);

  return null;
};
