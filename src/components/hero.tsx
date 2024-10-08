"use client";

import * as React from "react";
import { useRef, useState, useEffect, useCallback } from "react";
import type { MouseEvent, TouchEvent } from "react";
import { classNames } from "../utility/class-names";
import { Profile } from "./profile";
import { StaticImageData } from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  image?: StaticImageData;
}

interface Point {
  x: number;
  y: number;
  size?: number;
  color: string;
}

export const Hero = ({ title, subtitle, image }: HeroProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<Point[]>([]);
  const spacing = 100;
  const minAlpha = 0.3;
  const maxAlpha = 0.8;
  const minSize = 2;
  const maxSize = 10;
  const cursorRadius = 1500;
  const resolutionFactor =
    typeof window !== "undefined" ? window.devicePixelRatio : 0;
  const dotColor = (opacity = minAlpha) => `rgba(255, 255, 255, ${opacity})`;

  const getFixedPoints = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return [];

    const width = canvas.width;
    const height = canvas.height;

    const fixedPoints: Point[] = [];
    for (let x = width; x > 0; x--) {
      for (let y = height; y > 0; y--) {
        if ((x === 1 || x % spacing === 0) && (y === 1 || y % spacing === 0)) {
          fixedPoints.push({
            x,
            y,
            color: dotColor(minAlpha),
          });
        }
      }
    }

    return fixedPoints;
  }, []);

  useEffect(() => {
    const callback = () => {
      const canvas = canvasRef.current;

      if (!canvas) {
        return;
      }

      // Resize the canvas
      canvas.width = canvas.clientWidth * resolutionFactor;
      canvas.height = canvas.clientHeight * resolutionFactor;

      setPoints(getFixedPoints());
    };
    window.addEventListener("resize", callback);

    callback();

    return () => window.removeEventListener("resize", callback);
  }, [getFixedPoints, resolutionFactor]);

  const drawPoint = useCallback((position: Point) => {
    const context = canvasRef.current?.getContext("2d");
    if (!context) return;
    const size = position.size ?? minSize;

    context.beginPath();
    context.arc(position.x, position.y, size / 2, 0, 2 * Math.PI);
    context.lineWidth = size;
    context.strokeStyle = position.color;
    context.stroke();
    context.closePath();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    context.clearRect(
      0,
      0,
      width * resolutionFactor,
      height * resolutionFactor,
    );
    points.forEach((point) => drawPoint(point));
  }, [points, drawPoint, resolutionFactor]);

  const handleHover = (
    event: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>,
  ) => {
    const eventWithCoords = "touches" in event ? event.touches[0] : event;
    const x = eventWithCoords.clientX * resolutionFactor;
    const y = eventWithCoords.clientY * resolutionFactor + window.scrollY;
    const pointsToUpdate = points.slice();
    const fixedPoints = getFixedPoints();

    for (let i = 0; i < pointsToUpdate.length; i++) {
      const { x: pointX, y: pointY } = pointsToUpdate[i];
      const distanceFromMouse = (x - pointX) ** 2 + (y - pointY) ** 2;
      if (distanceFromMouse < cursorRadius * cursorRadius) {
        const distance = Math.trunc(Math.sqrt(distanceFromMouse));
        const factor = distance / cursorRadius;

        const opacity = Math.max(
          minAlpha,
          Math.min((1 - minAlpha) * Math.abs(factor - 1), maxAlpha),
        );
        const size = Math.max(minSize, maxSize * Math.abs(factor - 1));

        pointsToUpdate[i].color = dotColor(opacity);
        pointsToUpdate[i].size = size;
      } else {
        pointsToUpdate[i] = { ...fixedPoints[i] }; // set back to position is the static array
      }
    }

    setPoints(pointsToUpdate);
  };

  const handleLeave = () => setPoints(getFixedPoints());

  return (
    <div
      className={classNames("hero", "gradient-standard", {
        "has-image": !!image,
      })}
      onMouseMove={handleHover}
      onMouseOut={handleLeave}
      onBlur={handleLeave}
      onTouchMove={handleHover}
      onTouchEnd={handleLeave}
      role="presentation"
    >
      <div className={classNames("hero-inner", "constrain-width")}>
        {(image && (
          <>
            <div className={"hero-text"}>
              <h1 className={"hero-title"}>{title}</h1>
              {subtitle && <h2 className={"hero-subtitle"}>{subtitle}</h2>}
            </div>
            <div className={"hero-image"}>
              <Profile image={image} alt={title} />
            </div>
          </>
        )) || (
          <>
            <h1 className={"hero-title"}>{title}</h1>
            {subtitle && <h2 className={"hero-subtitle"}>{subtitle}</h2>}
          </>
        )}
      </div>
      <canvas className={"hero-background"} ref={canvasRef} />
    </div>
  );
};
