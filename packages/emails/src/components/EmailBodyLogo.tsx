import RawHtml from "./RawHtml";

const CommentIE = ({ html = "" }) => <RawHtml html={`<!--[if mso | IE]>${html}<![endif]-->`} />;

const EmailBodyLogo = () => {
  // Return empty component to remove branding
  return null;
};

export default EmailBodyLogo;
