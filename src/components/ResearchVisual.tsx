"use client";

import { type CSSProperties, useLayoutEffect, useMemo, useRef, useState } from "react";

export type ResearchVisualVariant = "hero-field";

type ResearchVisualProps = {
  variant?: ResearchVisualVariant;
};

type FlowPath = {
  d: string;
  delay: number;
  id: string;
  stop?: [number, number];
};

const mobileRejectedFlows: FlowPath[] = [
  { id: "mobile-reject-01", d: "M52 352 C104 238 158 188 220 184", delay: 0.04, stop: [220, 184] },
  { id: "mobile-reject-02", d: "M54 354 C126 278 168 244 248 252", delay: 0.1, stop: [248, 252] },
  { id: "mobile-reject-03", d: "M54 356 C132 332 194 336 270 320", delay: 0.16, stop: [270, 320] },
  { id: "mobile-reject-04", d: "M54 358 C118 394 194 406 292 378", delay: 0.22, stop: [292, 378] },
  { id: "mobile-reject-05", d: "M54 354 C150 208 232 164 318 194", delay: 0.28, stop: [318, 194] },
  { id: "mobile-reject-06", d: "M54 358 C162 296 232 294 332 274", delay: 0.34, stop: [332, 274] },
];

const mobileActiveFlows: FlowPath[] = [
  { id: "mobile-active-01", d: "M58 354 C122 204 234 150 326 232 C354 256 374 286 396 320", delay: 0.18 },
  { id: "mobile-active-02", d: "M58 356 C138 302 216 278 284 292 C322 300 352 318 390 346", delay: 0.32 },
  { id: "mobile-active-03", d: "M58 360 C146 382 238 366 306 326 C338 308 362 312 392 334", delay: 0.46 },
];

type NodeGeometry = {
  cx: number;
  cy: number;
  fieldRx: number;
  fieldRy: number;
  midR: number;
  outerR: number;
  coreR: number;
};

type DesktopGeometry = {
  activeFlows: FlowPath[];
  envelopes: string[];
  gates: Array<{ cx: number; cy: number; rx: number; ry: number }>;
  height: number;
  problem: NodeGeometry;
  rejectedFlows: FlowPath[];
  solution: NodeGeometry;
  validationPath: string;
  validationPoints: Array<[number, number]>;
  width: number;
};

function n(value: number) {
  return Math.round(value * 10) / 10;
}

function path(d: TemplateStringsArray, ...values: number[]) {
  return d.reduce((acc, part, index) => `${acc}${part}${index < values.length ? n(values[index]) : ""}`, "");
}

function createDesktopGeometry(width: number, height: number): DesktopGeometry {
  const w = Math.max(width, 760);
  const h = Math.max(height, 180);
  const leftDiameter = Math.min(h * 0.8, w * 0.25);
  const rightDiameter = Math.min(h, w * 0.35);
  const leftR = leftDiameter / 2;
  const rightR = rightDiameter / 2;
  const problem: NodeGeometry = {
    cx: leftR - leftDiameter * 0.2,
    cy: h - leftR + leftDiameter * 0.3,
    fieldRx: leftDiameter * 0.92,
    fieldRy: leftDiameter * 0.92,
    outerR: leftR,
    midR: leftDiameter * 0.38,
    coreR: leftDiameter * 0.27,
  };
  const solution: NodeGeometry = {
    cx: w - rightR + rightDiameter * 0.1,
    cy: h - rightR + rightDiameter * 0.2,
    fieldRx: rightDiameter * 0.92,
    fieldRy: rightDiameter * 0.92,
    outerR: rightR,
    midR: rightDiameter * 0.38,
    coreR: rightDiameter * 0.27,
  };
  const startX = problem.cx;
  const startY = problem.cy;
  const endX = solution.cx;
  const endY = solution.cy;
  const dx = endX - startX;
  const dy = endY - startY;
  const point = (t: number, offset = 0): [number, number] => [
    startX + dx * t,
    startY + dy * t + offset,
  ];
  const gateX = startX + dx * 0.66;
  const gateTop = startY + dy * 0.66 - h * 0.16;
  const gateMid = startY + dy * 0.66;
  const gateBottom = startY + dy * 0.66 + h * 0.16;

  const rejectedStops: Array<[number, number]> = [
    point(0.26, -h * 0.26),
    point(0.34, -h * 0.16),
    point(0.42, -h * 0.06),
    point(0.5, h * 0.08),
    point(0.38, h * 0.22),
    point(0.58, h * 0.28),
    point(0.24, -h * 0.08),
    point(0.3, h * 0.18),
    point(0.68, -h * 0.2),
    point(0.7, h * 0.18),
  ];
  const activeOffsets = [-h * 0.18, -h * 0.04, h * 0.12, -h * 0.1];
  const activeEnds = [-h * 0.08, 0, h * 0.08, -h * 0.02];

  return {
    width: w,
    height: h,
    problem,
    solution,
    envelopes: [
      path`M${startX} ${startY - h * 0.22} C${startX + dx * 0.22} ${startY - h * 0.34} ${startX + dx * 0.52} ${endY - h * 0.28} ${endX} ${endY - h * 0.18}`,
      path`M${startX} ${startY} C${startX + dx * 0.24} ${startY - h * 0.08} ${startX + dx * 0.54} ${endY - h * 0.02} ${endX} ${endY}`,
      path`M${startX} ${startY + h * 0.18} C${startX + dx * 0.24} ${startY + h * 0.28} ${startX + dx * 0.54} ${endY + h * 0.26} ${endX} ${endY + h * 0.18}`,
    ],
    validationPath: path`M${gateX - h * 0.05} ${gateTop - h * 0.12} C${gateX + h * 0.16} ${gateTop + h * 0.04} ${gateX + h * 0.16} ${gateBottom - h * 0.04} ${gateX - h * 0.08} ${gateBottom + h * 0.14}`,
    validationPoints: [
      [gateX, gateTop],
      [gateX, gateMid],
      [gateX, gateBottom],
      [gateX - h * 0.08, gateBottom + h * 0.12],
    ],
    gates: [
      { cx: gateX, cy: gateTop, rx: h * 0.08, ry: h * 0.045 },
      { cx: gateX, cy: gateMid, rx: h * 0.095, ry: h * 0.05 },
      { cx: gateX, cy: gateBottom, rx: h * 0.08, ry: h * 0.045 },
    ],
    rejectedFlows: rejectedStops.map(([stopX, stopY], index) => ({
      id: `reject-${String(index + 1).padStart(2, "0")}`,
      d: path`M${startX} ${startY} C${startX + dx * (0.16 + index * 0.018)} ${startY + dy * 0.16 - h * (0.2 - index * 0.035)} ${stopX - dx * 0.08} ${stopY + h * 0.06} ${stopX} ${stopY}`,
      delay: 0.02 + index * 0.045,
      stop: [stopX, stopY],
    })),
    activeFlows: activeOffsets.map((offset, index) => ({
      id: `active-${String(index + 1).padStart(2, "0")}`,
      d: path`M${startX} ${startY} C${startX + dx * 0.2} ${startY + dy * 0.2 + offset * 1.45} ${startX + dx * 0.44} ${startY + dy * 0.44 + offset} ${gateX} ${startY + dy * 0.66 + offset} C${startX + dx * 0.78} ${startY + dy * 0.78 + activeEnds[index] * 0.8} ${startX + dx * 0.9} ${endY + activeEnds[index]} ${endX} ${endY + activeEnds[index]}`,
      delay: 0.18 + index * 0.12,
    })),
  };
}

export function ResearchVisual({ variant = "hero-field" }: ResearchVisualProps) {
  const visualRef = useRef<HTMLDivElement>(null);
  const [stageSize, setStageSize] = useState({ height: 420, width: 1600 });
  const desktop = useMemo(() => createDesktopGeometry(stageSize.width, stageSize.height), [stageSize]);

  useLayoutEffect(() => {
    const element = visualRef.current;

    if (!element) {
      return;
    }

    const measure = () => {
      const { height, width } = element.getBoundingClientRect();

      if (width > 0 && height > 0) {
        setStageSize({
          height,
          width,
        });
      }
    };

    const resizeObserver = new ResizeObserver(([entry]) => {
      const { height, width } = entry.contentRect;

      if (width > 0 && height > 0) {
        setStageSize({
          height,
          width,
        });
      }
    });

    measure();
    resizeObserver.observe(element);
    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div
      ref={visualRef}
      className={`research-path-visual hero-field research-${variant}`}
      aria-label="Hero Research Field: ein großes Problem erzeugt viele Forschungswege, wenige validierte Pfade führen zur Lösung"
    >
      <svg
        className="research-svg hero-field-svg hero-field-desktop-svg"
        height="100%"
        width="100%"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heroActiveFlow" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#00a4c8" stopOpacity="0.72" />
            <stop offset="34%" stopColor="#cfff3c" stopOpacity="0.96" />
            <stop offset="72%" stopColor="#10120d" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#10120d" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="heroRejectedFlow" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#c7cec1" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#687164" stopOpacity="0.25" />
          </linearGradient>
          <radialGradient id="heroProblemField" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6bdfff" stopOpacity="0.6" />
            <stop offset="56%" stopColor="#6bdfff" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="heroSolutionField" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff9b68" stopOpacity="0.52" />
            <stop offset="58%" stopColor="#ffbd91" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="heroFlowVisibilityGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#050505" />
            <stop offset="34%" stopColor="#111111" />
            <stop offset="50%" stopColor="#7a7a7a" />
            <stop offset="67%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <mask id="heroFlowVisibility" maskUnits="userSpaceOnUse">
            <rect fill="url(#heroFlowVisibilityGradient)" height={desktop.height} width={desktop.width} />
          </mask>
          <filter id="heroFlowGlow" x="-45%" y="-45%" width="190%" height="190%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="hero-field-background">
          <ellipse className="hero-problem-field" cx={desktop.problem.cx} cy={desktop.problem.cy} rx={desktop.problem.fieldRx} ry={desktop.problem.fieldRy} />
          <ellipse className="hero-solution-field" cx={desktop.solution.cx} cy={desktop.solution.cy} rx={desktop.solution.fieldRx} ry={desktop.solution.fieldRy} />
          <g mask="url(#heroFlowVisibility)">
            {desktop.envelopes.map((envelope, index) => (
              <path
                className={`hero-envelope ${index === 1 ? "envelope-mid" : ""}`}
                d={envelope}
                key={envelope}
              />
            ))}
          </g>
        </g>

        <g className="hero-motion-layer" mask="url(#heroFlowVisibility)">
          <g className="hero-validation-field">
            <path d={desktop.validationPath} />
            {desktop.validationPoints.map(([cx, cy]) => (
              <circle cx={cx} cy={cy} key={`${cx}-${cy}`} r={Math.max(4, desktop.height * 0.018)} />
            ))}
          </g>
          <g className="hero-gate-rings">
            {desktop.gates.map((gate) => (
              <ellipse cx={gate.cx} cy={gate.cy} key={`${gate.cx}-${gate.cy}`} rx={gate.rx} ry={gate.ry} />
            ))}
          </g>

          <g className="hero-rejected-flows">
            {desktop.rejectedFlows.map((path) => (
              <path
                className="hero-flow rejected-flow"
                d={path.d}
                id={path.id}
                key={path.id}
                style={{ "--delay": `${path.delay}s` } as CSSProperties}
              />
            ))}
          </g>

          <g className="hero-active-flows">
            {desktop.activeFlows.map((path) => (
              <path
                className={`hero-flow active-flow${path.id === "active-01" ? " major-flow" : ""}`}
                d={path.d}
                id={path.id}
                key={path.id}
                style={{ "--delay": `${path.delay}s` } as CSSProperties}
              />
            ))}
          </g>

          <g className="hero-flow-stops">
            {desktop.rejectedFlows.map((path) => (
              <g className="hero-flow-stop" key={`${path.id}-stop`} style={{ "--delay": `${path.delay + 0.94}s` } as CSSProperties}>
                <circle cx={path.stop?.[0]} cy={path.stop?.[1]} r="4.8" />
                <line x1={(path.stop?.[0] ?? 0) - 10} x2={(path.stop?.[0] ?? 0) + 10} y1={path.stop?.[1]} y2={path.stop?.[1]} />
              </g>
            ))}
          </g>

          <g className="hero-flow-particles">
            {desktop.activeFlows.map((path, index) => (
              <FlowParticle href={`#${path.id}`} delay={0.4 + index * 0.18} key={`${path.id}-particle`} />
            ))}
          </g>
        </g>

        <g className="hero-problem-node">
          <circle className="problem-outer" cx={desktop.problem.cx} cy={desktop.problem.cy} r={desktop.problem.outerR} />
          <circle className="problem-mid" cx={desktop.problem.cx} cy={desktop.problem.cy} r={desktop.problem.midR} />
          <circle className="problem-core" cx={desktop.problem.cx} cy={desktop.problem.cy} r={desktop.problem.coreR} />
        </g>

        <g className="hero-solution-node">
          <circle className="solution-outer" cx={desktop.solution.cx} cy={desktop.solution.cy} r={desktop.solution.outerR} />
          <circle className="solution-mid" cx={desktop.solution.cx} cy={desktop.solution.cy} r={desktop.solution.midR} />
          <circle className="solution-core" cx={desktop.solution.cx} cy={desktop.solution.cy} r={desktop.solution.coreR} />
        </g>
      </svg>
      <svg className="research-svg hero-field-svg hero-field-mobile-svg" viewBox="0 0 390 430" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="heroMobileActiveFlow" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#00a4c8" stopOpacity="0.8" />
            <stop offset="42%" stopColor="#cfff3c" stopOpacity="0.95" />
            <stop offset="72%" stopColor="#10120d" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#10120d" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="heroMobileRejectedFlow" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#aeb8ad" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#5f685d" stopOpacity="0.24" />
          </linearGradient>
          <radialGradient id="heroMobileProblemField" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6bdfff" stopOpacity="0.62" />
            <stop offset="58%" stopColor="#6bdfff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="heroMobileSolutionField" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff9b68" stopOpacity="0.48" />
            <stop offset="58%" stopColor="#ffbd91" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <filter id="heroMobileFlowGlow" x="-45%" y="-45%" width="190%" height="190%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g className="hero-field-background">
          <ellipse className="mobile-problem-field" cx="28" cy="356" rx="160" ry="128" />
          <ellipse className="mobile-solution-field" cx="354" cy="318" rx="142" ry="120" />
          <path className="mobile-envelope mobile-envelope-top" d="M46 338 C136 140 284 106 390 252" />
          <path className="mobile-envelope mobile-envelope-mid" d="M48 356 C154 270 270 256 390 330" />
          <path className="mobile-envelope mobile-envelope-bottom" d="M50 382 C156 430 282 398 390 352" />
        </g>
        <g className="mobile-validation-field">
          <path d="M218 168 C246 230 250 326 226 392" />
          <ellipse cx="232" cy="238" rx="26" ry="14" />
          <ellipse cx="256" cy="296" rx="30" ry="15" />
          <ellipse cx="286" cy="326" rx="27" ry="14" />
        </g>
        <g className="mobile-rejected-flows">
          {mobileRejectedFlows.map((path) => (
            <path
              className="hero-flow mobile-rejected-flow"
              d={path.d}
              id={path.id}
              key={path.id}
              style={{ "--delay": `${path.delay}s` } as CSSProperties}
            />
          ))}
        </g>
        <g className="mobile-active-flows">
          {mobileActiveFlows.map((path) => (
            <path
              className={`hero-flow mobile-active-flow${path.id === "mobile-active-01" ? " mobile-major-flow" : ""}`}
              d={path.d}
              id={path.id}
              key={path.id}
              style={{ "--delay": `${path.delay}s` } as CSSProperties}
            />
          ))}
        </g>
        <g className="mobile-flow-stops">
          {mobileRejectedFlows.map((path) => (
            <g className="hero-flow-stop" key={`${path.id}-stop`} style={{ "--delay": `${path.delay + 0.88}s` } as CSSProperties}>
              <circle cx={path.stop?.[0]} cy={path.stop?.[1]} r="3.8" />
              <line x1={(path.stop?.[0] ?? 0) - 8} x2={(path.stop?.[0] ?? 0) + 8} y1={path.stop?.[1]} y2={path.stop?.[1]} />
            </g>
          ))}
        </g>
        <g className="mobile-problem-node">
          <circle className="problem-outer" cx="20" cy="362" r="88" />
          <circle className="problem-core" cx="20" cy="362" r="42" />
        </g>
        <g className="mobile-solution-node">
          <circle className="solution-outer" cx="354" cy="318" r="94" />
          <circle className="solution-core" cx="354" cy="318" r="50" />
        </g>
        <g className="hero-flow-particles">
          {mobileActiveFlows.map((path, index) => (
            <FlowParticle href={`#${path.id}`} delay={0.38 + index * 0.2} key={`${path.id}-particle`} />
          ))}
        </g>
      </svg>
    </div>
  );
}

function FlowParticle({ delay, href }: { delay: number; href: string }) {
  return (
    <circle className="hero-flow-dot" opacity="0" r="4.4">
      <animate
        attributeName="opacity"
        begin={`${delay}s`}
        dur="4.4s"
        keyTimes="0;0.1;0.82;1"
        repeatCount="indefinite"
        values="0;0.86;0.86;0"
      />
      <animateMotion begin={`${delay}s`} dur="4.4s" repeatCount="indefinite">
        <mpath href={href} />
      </animateMotion>
    </circle>
  );
}
