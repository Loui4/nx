import { ReactNode } from 'react';
import { TerminalShellWrapper } from './terminal-shell.component';

export function TerminalOutput({
  content,
  command,
  isMessageBelow,
  path,
}: {
  content: ReactNode | null;
  command: string;
  isMessageBelow: boolean;
  path: string;
}): JSX.Element {
  return (
    <TerminalShellWrapper isMessageBelow={isMessageBelow}>
      <div className="overflow-x-auto p-4 pt-2">
        <div className="flex items-center">
          <p className="mt-0.5">
            {path && (
              <span className="text-purple-600 dark:text-fuchsia-500">
                {path}
              </span>
            )}
            <span className="mx-1 text-green-600 dark:text-green-400">❯</span>
          </p>
          <p className="typing mt-0.5 flex-1 pl-2">{command}</p>
        </div>
        <div className="not-prose flex">{content}</div>
      </div>
    </TerminalShellWrapper>
  );
}
