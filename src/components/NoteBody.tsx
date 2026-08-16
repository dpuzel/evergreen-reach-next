import Markdown from "react-markdown";

export function NoteBody({ content }: { content: string }) {
  return (
    <div className="note-prose">
      <Markdown
        components={{
          a: ({ href, children }) => (
            <a href={href} rel={href?.startsWith("http") ? "noreferrer" : undefined}>
              {children}
            </a>
          ),
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
