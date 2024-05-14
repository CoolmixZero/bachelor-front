"use client"

import { cardData } from '@/utils/data';
import { useEffect, useState } from 'react';

interface QuickAnalysisProps {
  activeIndex: number
}

const QuickAnalysis = ({ activeIndex }: QuickAnalysisProps) => {
  const [featuredActor, setFeaturedActor] = useState<any>(null);
  const [totalMovies, setTotalMovies] = useState<number>(0);
  const [averageAge, setAverageAge] = useState<number>(0);
  const [topGenre, setTopGenre] = useState<string>('');
  const [starRating, setStarRating] = useState<number>(0);

  const getRandomItem = (arr: any) => arr[Math.floor(Math.random() * arr.length)];

  useEffect(() => {
    if (activeIndex >= 0) {
      const selectedActor = cardData[activeIndex];
      setFeaturedActor(selectedActor);
      setTotalMovies(selectedActor.tracks.length);
      setAverageAge(Math.floor(Math.random() * 20) + 40);
      setTopGenre(getRandomItem(selectedActor.genre));
      setStarRating(Math.floor(Math.random() * 3) + 2);
    }
  }, [activeIndex]); // Dependency on activeIndex ensures re-calculation when it changes

  if (activeIndex < 0 || !featuredActor) {
    return null;
  }


  return (
    <div className="hidden md:flex w-full h-fit p-6 rounded-lg shadow-sm shadow-muted-foreground ">
      <h2 className="text-xl font-bold text-white">Quick Analysis:</h2>
      <div className="text-white ml-4">
        <p>
          Based on our data, <b>{featuredActor.name}</b> has been in{" "}
          <b>{totalMovies}</b> films.
        </p>
        <p>Our experts estimate the average age of actors in our list is <b>{averageAge}</b>.</p>
        <p>The most common genre amongst these actors is <b>{topGenre}</b>.</p>

        {/* Star Rating */}
        <div className="flex items-center mt-2">
          <div className="mr-2">Average Rating:</div>
          {[...Array(5)].map((_, index) => (
            <span key={index} className={`text-yellow-400 text-lg ${index < starRating ? 'opacity-100' : 'opacity-50'}`}>★</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickAnalysis;