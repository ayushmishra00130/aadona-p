// src/Timeline.jsx
import React, { useState, useEffect, useRef } from 'react';
import TimeLineItem from './TimeLineItem';
import timelineData from './TimeLineData';

const Timeline = () => {
  const contentRef = useRef(null);
  const itemRefs = useRef([]);
  const [lineHeight, setLineHeight] = useState(0);
  const [dotPositions, setDotPositions] = useState([]);

  useEffect(() => {
    const calculateDotPositions = () => {
      if (!contentRef.current) return;
      const positions = itemRefs.current.map(ref => {
        if (ref) return ref.offsetTop + (ref.offsetHeight / 2);
        return 0;
      }).filter(pos => pos !== 0);
      setDotPositions(positions);
    };

    calculateDotPositions();
    window.addEventListener('resize', calculateDotPositions);
    return () => window.removeEventListener('resize', calculateDotPositions);
  }, [timelineData.length]);

  useEffect(() => {
    const trackScroll = () => {
      if (!contentRef.current) return;
      const element = contentRef.current;
      const { top, height } = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      let scrollPercent = 0;
      if (top < viewportHeight && top > -height) {
        scrollPercent = Math.min(1, Math.max(0, (viewportHeight - top) / (height + viewportHeight)));
      }

      setLineHeight(scrollPercent * height);
    };

    window.addEventListener('scroll', trackScroll);
    trackScroll();
    return () => window.removeEventListener('scroll', trackScroll);
  }, []);

  return (
    <div className="relative pt-8 sm:pt-12 md:pt-16 pb-0 bg-white">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-8">
        <h2 className="text-4xl font-extrabold text-green-700 mb-4">Going Beyond Vision</h2>
        <p className="text-lg sm:text-xl text-gray-500">Milestones that shaped our story</p>
      </header>

      <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Sticky Line for Desktop */}
        <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 z-10">
          <div className="sticky top-0 h-screen overflow-hidden">
            <div className="absolute top-0 h-full w-0.5 bg-white left-1/2 -translate-x-1/2"></div>
            <div
              className="absolute top-0 w-0.5 bg-green-500 left-1/2 -translate-x-1/2 transition-all duration-75 ease-out"
              style={{ height: `${lineHeight}px` }}
            ></div>

            {/* Dots (Desktop only) */}
            {dotPositions.map((topPosition, index) => (
              <div
                key={index}
                className="hidden sm:block absolute w-4 h-4 rounded-full bg-green-500 ring-4 ring-green-200 left-1/2 -translate-x-1/2 z-20"
                style={{ top: `${topPosition}px` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div key={item.id} ref={el => itemRefs.current[index] = el}>
              <TimeLineItem data={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;