import React from 'react';
import ReactMarkdown from 'react-markdown';

export const AiResponseView: React.FC<{ response: string }> = ({ response }) => {
  return (
    <div className="ai-response">
        {/* Using standard markdown rendering, styled via Tailwind prose in parent or global CSS if needed. 
            Here we map specific elements to our design system manually for better control if not using @tailwindcss/typography */}
        <ReactMarkdown
            components={{
                p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-4 mb-2 text-gray-300" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-4 mb-2 text-gray-300" {...props} />,
                li: ({node, ...props}) => <li className="mb-1" {...props} />,
                code: ({node, className, children, ...props}) => {
                    // Inline code vs Block code check (rough approximation)
                    const isBlock = String(children).includes('\n');
                    return isBlock ? (
                        <div className="bg-black/50 p-2 rounded border border-graphite my-2 overflow-x-auto">
                            <code className="text-yellow-400 font-mono text-xs" {...props}>{children}</code>
                        </div>
                    ) : (
                        <code className="bg-gray-800 text-yellow-300 px-1 rounded text-xs" {...props}>{children}</code>
                    )
                },
                strong: ({node, ...props}) => <strong className="text-matrix font-bold" {...props} />,
                h1: ({node, ...props}) => <h1 className="text-lg font-bold text-white mb-2 mt-4 border-b border-graphite pb-1" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-base font-bold text-white mb-2 mt-3" {...props} />,
                a: ({node, ...props}) => <a className="text-blue-400 hover:text-blue-300 underline" {...props} />,
            }}
        >
            {response}
        </ReactMarkdown>
    </div>
  );
};