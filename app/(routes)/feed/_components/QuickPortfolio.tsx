"use client";

import { useState } from 'react';
import { cardData } from '@/utils/data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface QuickPortfolioProps {
  activeIndex: number;
}

const QuickPortfolio = ({ activeIndex }: QuickPortfolioProps) => {
  const [message, setMessage] = useState('');

  if (activeIndex < 0) {
    return null;
  }

  const actor = cardData[activeIndex];

  const handleSendMessage = () => {
    // Here, you'd typically implement the logic to send the message
    // (e.g., via API call, email, etc.)
    console.log(`Sending message to ${actor.name}:`, message);
    setMessage(''); // Clear the message input
  };

  return (
    <div className="hidden md:flex flex-col w-full h-fit p-4 rounded-lg shadow-sm shadow-muted-foreground">
      <h2 className="text-xl font-bold mb-4">{actor.name}&apos;s Portfolio</h2>

      {/* Movie Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {actor.tracks.map((movie: any, index: number) => (
          <div key={index} className="p-2 rounded-md shadow-md">
            <p className="font-semibold">{movie.name}</p>
            <p className="text-sm">Directed by {movie.artist}</p>
          </div>
        ))}
      </div>

      {/* Message Form */}
      <div className="flex flex-col items-end w-full space-y-4">
        <Input
          // className="p-2 mb-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-green-500"
          placeholder={`Write a message to ${actor.name}...`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          className="w-1/3"
          onClick={handleSendMessage}
          disabled={!message.trim()} // Disable button if message is empty
        >
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default QuickPortfolio;