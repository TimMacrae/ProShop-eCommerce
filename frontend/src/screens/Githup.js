import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Fragment } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import gfm from "remark-gfm";
import styles from "./Githup.module.css";
import { railscasts } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Githup() {
  SyntaxHighlighter.registerLanguage("jsx", jsx);
  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    // import("../api/markdown.md")
    //   .then((res) => {
    //     fetch(res).then((res) => {
    //       res.text().then((res) => {
    //         console.log(res);
    //         setMarkdown(res);
    //       });
    //     });
    //   })
    //   .catch((err) => {});
    fetch(
      "https://raw.githubusercontent.com/amz-tools/amazon-sp-api/main/README.md"
    )
      .then((res) => {
        res.text().then((res) => {
          console.log(res);
        });
      })

      .catch((err) => console.log(err));
  }, []);

  const components = {
    code({ children, ...props }) {
      return (
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={jsx}
          children={String(children).replace(/\n$/, "")}
          customStyle={{ margin: 0 }}
          {...props}
        />
      );
    },
  };
  return (
    <Fragment>
      <div className={styles}>
        <ReactMarkdown
          remarkPlugins={[gfm]}
          components={components}
          children={markdown}
        ></ReactMarkdown>
      </div>
    </Fragment>
  );
}
