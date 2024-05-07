import React from 'react';
import { Clock4 } from 'lucide-react';
import { cn } from '~/utils';

// { icon ? (
//   <div className="icon-xl h-7 w-7 flex-shrink-0">
//     {icon}
//     {/*<div className="shadow-stroke overflow-hidden rounded-full">
//      <img
//       src="https://files.oaiusercontent.com/file-DKhdpNB6ZWxpZPgUYCHq0m7f?se=2123-12-18T21%3A16%3A23Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscc=max-age%3D1209600%2C%20immutable&amp;rscd=attachment%3B%20filename%3Dlogo.png&amp;sig=iSrYrBCwH1aMJQpgpgBKsPXzWcsNIat8WPistr%2Binu8%3D"
//       className="bg-token-main-surface-secondary h-full w-full"
//       alt="GPT"
//       width="80"
//       height="80"
//     />
//   </div> */}
//   </div>
// ) : null}

export default function MentionItem({
  name,
  onClick,
  index,
  icon,
  isActive,
}: {
  name: string;
  onClick: () => void;
  index: number;
  icon?: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <div tabIndex={index} onClick={onClick} id={`mention-item-${index}`} className="cursor-pointer">
      <div
        className={cn(
          'hover:bg-token-main-surface-secondary text-token-text-primary bg-token-main-surface-secondary group flex h-10 items-center gap-2 rounded-lg px-2 text-sm font-medium dark:hover:bg-gray-600',
          index === 0 ? 'dark:bg-gray-600' : '',
          isActive ? 'dark:bg-gray-600' : '',
        )}
      >
        {icon ? icon : null}
        <div className="flex h-fit grow flex-row justify-between space-x-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <div className="flex flex-row space-x-2">
            <span className="shrink-0 truncate">{name}</span>
            {/* <span className="text-token-text-tertiary flex-grow truncate text-sm font-light sm:max-w-xs lg:max-w-md">
              {fakeItem.description}
            </span> */}
          </div>
          <span className="shrink-0 self-center">
            <Clock4 size={16} className="icon-sm" />
          </span>
        </div>
      </div>
    </div>
  );
}
