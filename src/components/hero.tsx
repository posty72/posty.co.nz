import * as React from "react";
import { classNames } from "../utlity/class-names";
import { Profile } from "./profile";

interface HeroProps {
    title: string;
    subtitle?: string;
    imageUrl?: string;
}

interface Point {
    x: number;
    y: number;
    size?: number;
    color: string;
}

export const Hero = ({ title, subtitle, imageUrl }: HeroProps) => {
    const canvasRef = React.useRef<HTMLCanvasElement>();
    const [points, setPoints] = React.useState<Point[]>([]);
    const spacing = 25;
    const minAlpha = 0.3;
    const maxAlpha = 0.8;
    const minSize = 2;
    const maxSize = 5;
    const dotColor = (opacity = minAlpha) => `rgba(255, 255, 255, ${opacity})`;

    const getFixedPoints = React.useCallback(() => {
        const canvas = canvasRef.current;
        const width = canvas.width;
        const height = canvas.height;

        const fixedPoints: Point[] = [];
        for (let x = width; x > 0; x--) {
            for (let y = height; y > 0; y--) {
                if (
                    (x === 1 || x % spacing === 0) &&
                    (y === 1 || y % spacing === 0)
                ) {
                    fixedPoints.push({
                        x,
                        y,
                        color: dotColor(minAlpha),
                    });
                }
            }
        }

        return fixedPoints;
    }, [canvasRef.current?.width, canvasRef.current?.height]);

    const drawPoint = React.useCallback((position: Point) => {
        const context = canvasRef.current.getContext("2d");
        const size = position.size ?? minSize;

        context.beginPath();
        context.fillStyle = position.color;
        context.fillRect(
            position.x - size / 2,
            position.y - size / 2,
            size,
            size
        );
        context.closePath();
    }, []);

    React.useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) {
            return;
        }

        // Resize the canvas
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        setPoints(getFixedPoints());
    }, [canvasRef?.current]);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        context.clearRect(0, 0, width, height);
        points.forEach((point) => drawPoint(point));
    }, [points]);

    const handleHover = (
        event:
            | React.MouseEvent<HTMLDivElement>
            | React.TouchEvent<HTMLDivElement>
    ) => {
        let x: number;
        let y: number;

        if ("clientX" in event && "clientY" in event) {
            x = event.clientX;
            y = event.clientY;
        }

        if ("touches" in event) {
            x = event.touches[0].clientX;
            y = event.touches[0].clientY;
        }

        const radius = 250;
        const pointsToUpdate = points.slice();
        const fixedPoints = getFixedPoints();

        for (let i = 0; i < pointsToUpdate.length; i++) {
            const { x: pointX, y: pointY } = pointsToUpdate[i];
            const distanceFromMouse = (x - pointX) ** 2 + (y - pointY) ** 2;

            if (distanceFromMouse < radius * radius) {
                const distance =
                    Math.trunc(Math.sqrt(distanceFromMouse)) / radius;

                const opacity = Math.max(
                    minAlpha,
                    Math.min((1 - minAlpha) * Math.abs(distance - 1), maxAlpha)
                );
                const size = Math.max(
                    minSize,
                    maxSize * Math.abs(distance - 1)
                );

                pointsToUpdate[i].color = dotColor(opacity);
                pointsToUpdate[i].size = size;
            } else {
                pointsToUpdate[i] = { ...fixedPoints[i] }; // set back to position is the static array
            }
        }

        setPoints(pointsToUpdate);
    };

    const handleLeave = () => {
        setPoints(getFixedPoints());
    };

    return (
        <div
            className={classNames("hero", { "has-image": !!imageUrl })}
            onMouseMove={handleHover}
            onMouseOut={handleLeave}
            onBlur={handleLeave}
            onTouchMove={handleHover}
            onTouchEnd={handleLeave}
            role="presentation"
        >
            <div className="hero-inner || constrain-width">
                {(imageUrl && (
                    <>
                        <div className="hero-text">
                            <h1 className="hero-title">{title}</h1>
                            {subtitle && (
                                <h2 className="hero-subtitle">{subtitle}</h2>
                            )}
                        </div>
                        <div className="hero-image">
                            <Profile url={imageUrl} alt={title} />
                        </div>
                    </>
                )) || (
                    <>
                        <h1 className="hero-title">{title}</h1>
                        {subtitle && (
                            <h2 className="hero-subtitle">{subtitle}</h2>
                        )}
                    </>
                )}
            </div>
            <canvas className="hero-background" ref={canvasRef} />
        </div>
    );
};
