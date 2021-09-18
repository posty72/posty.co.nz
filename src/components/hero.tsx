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
    const canvasRef = React.useRef();
    const [points, setPoints] = React.useState<Point[]>([]);

    const drawPoint = React.useCallback((position: Point) => {
        const context = (canvasRef.current as HTMLCanvasElement).getContext(
            "2d"
        );

        const size = position.size ?? 2;

        context.beginPath();
        context.fillStyle = position.color;
        context.fillRect(position.x - 1, position.y - 1, size, size);
        context.closePath();
    }, []);

    React.useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement;

        if (!canvas) {
            return;
        }

        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        canvas.width = width;
        canvas.height = height;

        const count: Point[] = [];
        for (let w = width; w > 0; w--) {
            for (let h = height; h > 0; h--) {
                if (w % 25 === 0 && h % 25 === 0) {
                    count.push({
                        x: w,
                        y: h,
                        color: "rgba(255, 255, 255, 0.3)",
                    });
                }
            }
        }

        setPoints(count);
    }, [canvasRef?.current]);

    React.useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement;
        const context = canvas.getContext("2d");
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        context.clearRect(0, 0, width, height);
        points.forEach((point) => drawPoint(point));
    }, [points]);

    function handleHover(event: React.MouseEvent<HTMLDivElement>) {
        const x = event.clientX;
        const y = event.clientY;
        const radius = 250;
        const pointsToUpdate = points.slice();

        // console.log(event.clientX, event.clientX);
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < pointsToUpdate.length; i++) {
            const { x: pointX, y: pointY } = pointsToUpdate[i];
            const distanceFromMouse = (x - pointX) ** 2 + (y - pointY) ** 2;

            if (distanceFromMouse < radius * radius) {
                const distance =
                    Math.trunc(Math.sqrt(distanceFromMouse)) / radius;

                const opacity = Math.max(0.3, 0.7 * Math.abs(distance - 1));
                const size = Math.max(2, 5 * Math.abs(distance - 1));

                pointsToUpdate[i].color = `rgba(255, 255, 255, ${opacity})`;
                pointsToUpdate[i].size = size;
            } else {
                pointsToUpdate[i].color = "rgba(255, 255, 255, 0.3)";
                pointsToUpdate[i].size = 2;
            }
        }

        setPoints(pointsToUpdate);
    }

    return (
        <div
            className={classNames("hero", { "has-image": !!imageUrl })}
            onMouseMove={handleHover}
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
