import { markdownToSafeHTML } from "@calcom/lib/markdownToSafeHTML";

const Spacer = () => <p style={{ height: 6 }} />;

export const Info = (props: {
  label: string;
  description: React.ReactNode | undefined | null;
  extraInfo?: React.ReactNode;
  withSpacer?: boolean;
  lineThrough?: boolean;
  formatted?: boolean;
  isLabelHTML?: boolean;
}) => {
  if (!props.description || props.description === "") return null;

  const safeDescription = markdownToSafeHTML(props.description.toString()) || "";
  const safeLabel = markdownToSafeHTML(props.label.toString());

  const StyledHtmlContent = ({ htmlContent }: { htmlContent: string }) => {
    const css =
      "color: '#ffffff'; font-weight: 400; line-height: 24px; margin: 0; font-family: 'Geist', Arial, sans-serif;";
    return (
      <p
        className="dark:text-darkgray-600 mt-2 text-sm text-gray-500 [&_a]:text-blue-500 [&_a]:underline [&_a]:hover:text-blue-600"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: htmlContent
            .replaceAll("<p>", `<p style="${css}">`)
            .replaceAll("<li>", `<li style="${css}">`),
        }}
      />
    );
  };

  return (
    <>
      {props.withSpacer && <Spacer />}
      <div>
        <p
          style={{
            color: "#ffffff",
            fontFamily: "'Geist', Arial, sans-serif",
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: 500,
            marginBottom: "8px",
          }}>
          {props.isLabelHTML ? <StyledHtmlContent htmlContent={safeLabel} /> : props.label}
        </p>
        <p
          style={{
            color: "#ffffff",
            fontFamily: "'Geist', Arial, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            whiteSpace: "pre-wrap",
            textDecoration: props.lineThrough ? "line-through" : undefined,
            marginTop: "0",
          }}>
          {props.formatted ? <StyledHtmlContent htmlContent={safeDescription} /> : props.description}
        </p>
        {props.extraInfo}
      </div>
    </>
  );
};
