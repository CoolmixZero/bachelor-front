"use client"

import { CardProps } from '@/types';
import {
  easeIn,
  motion,
  PanInfo,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import SwipeButton from './swipeButtons';

const Card = ({ data, active, removeCard }: CardProps) => {
  const [exitX, setExitX] = useState(0);
  const [hide, setHide] = useState(false)
  
  const x = useMotionValue(0);
  const input = [-200, 0, 200];
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -125, 0, 125, 200], [0, 1, 1, 1, 0]);

  const dragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 10) {
      setExitX(200);
      removeCard(data.id, 'right');
    } else if (info.offset.x < -10) {
      setExitX(-200);
      removeCard(data.id, 'left');
    }
  };

  return (
    <>
      {/* <SwipeButton exit={setExitX} removeCard={removeCard} id={data.id} /> */}
      {active ? (
        <>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          className="card absolute z-30 flex w-full h-full min-w-72 max-h-[468px] md:max-h-[500px] max-w-[289px] items-center justify-center text-3xl font-bold"
          onDragEnd={dragEnd}
          initial={{ scale: 0.95, opacity: 0.5 }}
          animate={{
            scale: 1.05,
            opacity: 1,
          }}
          style={{ x, rotate, opacity }}
          transition={{ type: 'tween', duration: 0.3, ease: 'easeIn' }}
          whileDrag={{ cursor: 'grabbing' }}
          exit={{ x: exitX }}
        >
          <div className="scrollCards bg-primary/15 no-scrollbar absolute m-auto h-[calc(100%-20px)] w-[calc(100%-20px)] overflow-y-scroll rounded-[20px] shadow-md shadow-purple-500">
            <div className="relative h-72 md:h-80 w-full overflow-hidden rounded-b-xl">
              <Image
                src={data.src}
                fill
                alt=""
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
            <div className="mt-6 flex items-center justify-between px-4 font-sans text-2xl font-medium text-textGrey">
              <p>{data.name}</p>
              <p>{data.age}</p>
            </div>
            <p className="mt-3 px-4 font-sans text-lg font-medium text-muted-foreground">
              {data.bio}
            </p>
            <div className="mt-3 flex gap-1 px-4 text-base font-normal">
              {data.genre.map((item, idx) => (
                <p key={idx} className="rounded-[7px] bg-secondary px-4 py-2">
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-5 px-4 text-xl font-medium">Top Films</p>
            <div className="mt-3 mb-4 grid grid-cols-2 gap-4 px-4">
              {data.tracks.map((track, id) => {
                return (
                  <div key={id}>
                    <Image
                      src={track.img}
                      width={100}
                      height={100}
                      alt=""
                      className="rounded-lg"
                    />
                    <p className="mt-2 ml-1 text-sm font-medium">
                      {track.name}
                    </p>
                    <p className="ml-1 text-xs font-normal text-muted-foreground">
                      {track.artist}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
        <div className={`w-full h-full items-end justify-center ${hide ? "hidden" : "flex"}`}>
          <SwipeButton exit={setExitX} removeCard={removeCard} id={data.id} />
        </div>
      </>
      ) : null}
    </>
  );
};

export default Card;