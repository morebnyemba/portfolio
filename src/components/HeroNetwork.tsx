const nodes = [
  { x: 80, y: 60 }, { x: 220, y: 30 }, { x: 400, y: 70 }, { x: 600, y: 35 }, { x: 740, y: 90 },
  { x: 60, y: 220 }, { x: 260, y: 190 }, { x: 400, y: 240 }, { x: 560, y: 200 }, { x: 760, y: 230 },
  { x: 140, y: 340 }, { x: 340, y: 360 }, { x: 520, y: 330 }, { x: 700, y: 360 },
];

const links: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 6], [1, 6], [2, 6], [2, 8], [3, 8], [4, 9],
  [5, 6], [6, 7], [7, 8], [8, 9],
  [5, 10], [6, 10], [6, 11], [7, 11], [7, 12], [8, 12], [8, 13], [9, 13],
  [10, 11], [11, 12], [12, 13],
];

export default function HeroNetwork() {
  return (
    <svg
      viewBox="0 0 800 400"
      preserveAspectRatio="xMidYMid slice"
      className="hero-network pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]"
      aria-hidden="true"
    >
      {links.map(([a, b], i) => (
        <line
          key={i}
          className="link"
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="var(--accent-2)"
          strokeWidth="1"
          style={{ animationDelay: `${(i % 6) * 0.3}s` }}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          className="node"
          cx={n.x}
          cy={n.y}
          r="2.4"
          fill="var(--accent)"
          style={{ animationDelay: `${(i % 7) * 0.4}s` }}
        />
      ))}
    </svg>
  );
}
