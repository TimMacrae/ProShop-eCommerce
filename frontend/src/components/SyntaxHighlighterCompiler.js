import React, { useEffect, useState, Fragment } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function SyntaxHighlighterCompiler() {
  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    import("../api/markdown.md")
      .then((res) => {
        fetch(res).then((res) => {
          res.text().then((res) => {
            setMarkdown(res);
          });
        });
      })
      .catch((err) => {});
  }, []);

  return (
    <Fragment>
      <SyntaxHighlighter language="javascript" style={docco}>
        {markdown}
      </SyntaxHighlighter>
    </Fragment>
  );
}
