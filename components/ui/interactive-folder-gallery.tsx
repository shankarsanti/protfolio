"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export interface GalleryPhoto {
  id: string | number;
  image: string;
}

const defaultPhotos: GalleryPhoto[] = [
  { id: 1, image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" },
  { id: 2, image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=800&auto=format&fit=crop" },
  { id: 3, image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop" },
  { id: 4, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop" },
  { id: 5, image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800&auto=format&fit=crop" },
];

export interface InteractiveFolderGalleryProps {
  photos?: GalleryPhoto[];
  folderName?: string;
  dragHintText?: string;
  className?: string;
}

export function InteractiveFolderGallery({
  photos = defaultPhotos,
  folderName = "Photography.gallery",
  dragHintText = "Drag any photo down to close",
  className
}: InteractiveFolderGalleryProps) {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [hoverFolder, setHoverFolder] = useState(false);

  return (
    <div className={`w-full py-6 relative ${className || ""}`}>
      <div className="relative w-full min-h-[180px] flex flex-col items-center justify-center">
        <div className="relative w-[150px] h-[180px] flex justify-center pointer-events-none z-0">
          <motion.div 
            className="absolute bottom-2 w-28 h-20 drop-shadow-xl"
            animate={{ opacity: isFolderOpen ? 0 : 1, scale: isFolderOpen ? 0.9 : 1 }}
          >
            <div className="absolute top-0 left-0 w-12 h-4 bg-gradient-to-t from-[#1e1e1e] to-[#2a2a2a] rounded-t border-t border-l border-r border-white/10" />
            <div className="absolute top-3 left-0 right-0 bottom-0 bg-gradient-to-b from-[#1e1e1e] to-[#0a0a0a] rounded-b rounded-tr border border-white/10 shadow-[inset_0_0_12px_rgba(0,0,0,0.8)]" />
            <div className="absolute top-4 left-0.5 right-0.5 bottom-0.5 bg-black rounded shadow-inner pointer-events-none" />
          </motion.div>

          <div className="absolute bottom-3 z-10 flex justify-center">
            {photos.map((photo, i) => {
              const offset = i - 2;
              const stackY = hoverFolder ? offset * -4 - 12 : offset * -2;
              const stackX = hoverFolder ? offset * 12 : offset * 1.5;
              const stackRotate = hoverFolder ? offset * 8 : offset * 3;
              const stackScale = 1 - Math.abs(offset) * 0.03;

              const openY = -50;
              const openX = offset * 45;
              const openRotate = 0;
              const openScale = 1.0;

              return (
                <motion.div
                  key={photo.id}
                  drag={isFolderOpen ? true : false}
                  dragSnapToOrigin={true}
                  onDragEnd={(e, info) => {
                    if (info.offset.y > 40 && isFolderOpen) {
                      setIsFolderOpen(false);
                      setHoverFolder(false);
                    }
                  }}
                  className={`absolute bottom-0 w-20 h-24 rounded shadow-[0_8px_16px_rgba(0,0,0,0.5)] overflow-hidden border border-white/20 origin-bottom ${
                    isFolderOpen ? "cursor-grab active:cursor-grabbing pointer-events-auto" : "pointer-events-none"
                  }`}
                  animate={!isFolderOpen ? {
                    y: stackY,
                    x: stackX,
                    rotate: stackRotate,
                    scale: stackScale,
                    zIndex: i + 10
                  } : {
                    y: openY,
                    x: openX,
                    rotate: openRotate,
                    scale: openScale,
                    zIndex: 50
                  }}
                  whileHover={isFolderOpen ? { scale: openScale + 0.05, zIndex: 100 } : {}}
                  whileDrag={isFolderOpen ? { scale: openScale + 0.1, rotate: 5, zIndex: 150 } : {}}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                >
                  <img 
                    src={photo.image} 
                    alt="Gallery item" 
                    className="w-full h-full object-cover pointer-events-none" 
                  />
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            className="absolute bottom-0 w-[120px] h-14 drop-shadow-[0_-8px_16px_rgba(0,0,0,0.8)] cursor-pointer z-20 pointer-events-auto"
            style={{ transformOrigin: "bottom" }}
            animate={{ 
              opacity: isFolderOpen ? 0 : 1, 
              rotateX: hoverFolder ? -25 : 0, 
              y: hoverFolder ? 4 : 0,
              pointerEvents: isFolderOpen ? "none" : "auto"
            }}
            onMouseEnter={() => setHoverFolder(true)}
            onMouseLeave={() => setHoverFolder(false)}
            onClick={() => setIsFolderOpen(true)}
          >
            <div className="w-full h-full bg-gradient-to-b from-[#2a2a2a] to-[#111] rounded-lg border border-white/20 shadow-[inset_0_1px_4px_rgba(255,255,255,0.1)] relative overflow-hidden flex items-end justify-center pb-2">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <div className="px-2 py-1 bg-black rounded border border-black/80 shadow-inner flex items-center justify-center backdrop-blur-sm">
                <span className="text-white/90 text-[10px] font-medium tracking-wide">{folderName}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ opacity: isFolderOpen ? 1 : 0, y: isFolderOpen ? 0 : 20 }}
          className="absolute bottom-3 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-sm text-black/50 dark:text-white/50 text-[10px] font-medium uppercase tracking-wider pointer-events-none"
        >
          {dragHintText}
        </motion.div>
      </div>
    </div>
  );
}

export { InteractiveFolderGallery as Component };
