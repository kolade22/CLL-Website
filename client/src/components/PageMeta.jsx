import { Helmet } from "react-helmet-async";

export default function PageMeta({ title, description, keywords }) {
  const siteName = "Crest Latitude Limited";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta
        name="description"
        content={
          description ||
          "Leading Nigerian company providing ICT, healthcare, construction, and consultancy services."
        }
      />
      <meta
        name="keywords"
        content={
          keywords ||
          "Crest Latitude, Nigeria, ICT, healthcare, construction, Ibadan"
        }
      />
      {/* Open Graph / Social */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://crestlatitude.ng" />
      <meta property="og:image" content="/images/og-image.jpg" />
    </Helmet>
  );
}
