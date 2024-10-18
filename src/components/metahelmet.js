import { Helmet } from "react-helmet";

import { config } from "data";

const MetaHelmet = ({ description }) => {
  return (
    <Helmet>
      <title>{config.title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={config.keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={config.baseURL} />
      <meta
        property="og:image"
        content={config.baseURL + "assets/branding/logo256.png"}
      />
      <meta property="og:site_name" content={config.title} />
    </Helmet>
  );
};

export default MetaHelmet;
