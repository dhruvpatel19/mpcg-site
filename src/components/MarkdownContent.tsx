import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export const MarkdownContent: React.FC<MarkdownContentProps> = ({
  content,
  className,
}) => {
  return (
    <div
      className={
        className ??
        "prose prose-stone max-w-none prose-p:leading-relaxed prose-li:leading-relaxed prose-strong:text-stone-900 prose-a:text-emerald-700"
      }
    >
      <ReactMarkdown
        components={{
          a: ({ href, children }) =>
            href?.startsWith("/") ? (
              <Link to={href}>{children}</Link>
            ) : (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
