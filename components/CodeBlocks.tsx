"use client";

import { useState } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: Language;
}

export default function CodeBlock({ code, language = "jsx" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={copy}
        className="absolute right-2 top-2 z-10 rounded-md bg-zinc-800 px-2 py-1 text-xs text-white"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>

      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={theme}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className="rounded-lg p-4 overflow-x-auto text-sm"
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
