"use client"

import { SwipeButtonProps } from '@/types';
import { CheckIcon, ThumbsDownIcon, ThumbsUpIcon, XIcon } from 'lucide-react';

export default function SwipeButton({
  exit,
  removeCard,
  id,
}: SwipeButtonProps) {
  const handleSwipe = (action: 'left' | 'right') => {
    if (action === 'left') {
      exit(-200);
    } else if (action === 'right') {
      exit(200);
    }
    removeCard(id, action);
  };
  return (
    <div className="flex absolute items-center space-x-8 mb-6">
      <button
        onClick={() => handleSwipe('left')}
        className="bg-transparent p-3 transition hover:shadow-md hover:shadow-[#FF2400] font-semibold rounded-full text-center"
      >
        <ThumbsDownIcon className="text-[#FF2400] font-bold" size={36} />
      </button>
      <button
        onClick={() => handleSwipe('right')}
        className="bg-transparent p-3 transition hover:shadow-md hover:shadow-[#23e200] font-semibold rounded-full text-center"
      >
        <ThumbsUpIcon className="text-[#23e200] font-bold" size={36}/>
      </button>
    </div>
  );
}