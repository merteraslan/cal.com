import type { TFunction } from "i18next";

import { BaseEmailHtml, CallToAction } from "../components";

export type EmailVerifyLink = {
  language: TFunction;
  user: {
    name?: string | null;
    email: string;
  };
  verificationEmailLink: string;
};

export const VerifyAccountEmail = (
  props: EmailVerifyLink & Partial<React.ComponentProps<typeof BaseEmailHtml>>
) => {
  return (
    <BaseEmailHtml
      subject={props.language("verify_email_subject", { appName: "Your Account" })}
      title="Verify Your Email Address"
      subtitle="Please confirm your email address to complete your account setup">
      <p
        style={{
          color: "#ffffff",
          fontSize: "16px",
          lineHeight: "24px",
          textAlign: "center",
          fontFamily: "'Geist', Arial, sans-serif",
          margin: "16px 0",
        }}>
        <>{props.language("hi_user_name", { name: props.user.name })}!</>
      </p>
      <p
        style={{
          color: "#999999",
          fontSize: "16px",
          lineHeight: "24px",
          textAlign: "center",
          fontFamily: "'Geist', Arial, sans-serif",
          margin: "16px 0",
        }}>
        Please click the link below to verify your email address:
      </p>
      <CallToAction label={props.language("verify_email_button")} href={props.verificationEmailLink} />

      <div style={{ lineHeight: "6px" }}>
        <p
          style={{
            color: "#999999",
            fontSize: "16px",
            lineHeight: "24px",
            textAlign: "center",
            fontFamily: "'Geist', Arial, sans-serif",
            margin: "16px 0",
          }}>
          <>{props.language("verify_email_email_link_text")}</>
          <br />
          <a href={props.verificationEmailLink} style={{ color: "#ffffff", textDecoration: "underline" }}>
            {props.verificationEmailLink}
          </a>
        </p>
      </div>
      <div style={{ lineHeight: "6px" }}>
        <p
          style={{
            color: "#999999",
            fontSize: "16px",
            lineHeight: "24px",
            textAlign: "center",
            fontFamily: "'Geist', Arial, sans-serif",
            margin: "16px 0",
          }}>
          <>
            {props.language("happy_scheduling")}, <br />
            <a
              href="mailto:support@example.com"
              style={{ color: "#ffffff", textDecoration: "underline" }}
              target="_blank"
              rel="noreferrer">
              <>Support Team</>
            </a>
          </>
        </p>
      </div>
    </BaseEmailHtml>
  );
};
