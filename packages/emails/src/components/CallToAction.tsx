import { CallToActionIcon } from "./CallToActionIcon";

export const CallToAction = (props: {
  label: string;
  href?: string;
  secondary?: boolean;
  startIconName?: string;
  endIconName?: string;
}) => {
  const { label, href, secondary, startIconName, endIconName } = props;

  const calculatePadding = () => {
    const paddingTop = "0.875rem";
    const paddingBottom = "0.875rem";
    let paddingLeft = "2rem";
    let paddingRight = "2rem";

    if (startIconName) {
      paddingLeft = "1.875rem";
    } else if (endIconName) {
      paddingRight = "1.875rem";
    }

    return `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}`;
  };

  const El = href ? "a" : "button";
  const restProps = href ? { href, target: "_blank" } : { type: "submit" };

  return (
    <table
      align="center"
      width="100%"
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{ textAlign: "center", marginTop: "32px", marginBottom: "32px" }}>
      <tbody>
        <tr>
          <td>
            {/* @ts-expect-error shared props between href and button */}
            <El
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "0.375rem",
                color: "#000000",
                fontSize: "16px",
                fontWeight: "500",
                textDecorationLine: "none",
                textAlign: "center",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                paddingTop: "0.875rem",
                paddingBottom: "0.875rem",
                lineHeight: "100%",
                textDecoration: "none",
                display: "inline-block",
                maxWidth: "100%",
                padding: "14px 32px",
                letterSpacing: "0.025em",
                fontFamily: "'Geist', Arial, sans-serif",
                border: "none",
                cursor: "pointer",
              }}
              {...restProps}
              rel="noreferrer">
              <span
                style={{
                  maxWidth: "100%",
                  display: "inline-block",
                  lineHeight: "120%",
                  fontFamily: "'Geist', Arial, sans-serif",
                  color: "#000000",
                }}>
                {startIconName && (
                  <CallToActionIcon
                    style={{
                      marginRight: "0.5rem",
                      marginLeft: 0,
                    }}
                    iconName={startIconName}
                  />
                )}
                {label}
                {endIconName && <CallToActionIcon iconName={endIconName} />}
              </span>
            </El>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
