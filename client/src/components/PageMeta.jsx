import { Helmet } from "react-helmet-async";

const SITE_URL = "https://crestlatitude.ng";

export default function PageMeta({ title, description, keywords }) {
  const siteName = "Crest Latitude Limited";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const desc =
    description ||
    "Leading Nigerian company providing ICT, healthcare, construction, and consultancy services.";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta
        name="keywords"
        content={
          keywords ||
          "Crest Latitude, Nigeria, ICT, healthcare, construction, training, consultancy"
        }
      />
      {/* Open Graph / Social */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:image" content={`${SITE_URL}/images/setting.jpeg`} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
