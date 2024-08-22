import {FC} from "react";

interface IAppLogoProps {
  className?: string;
  width?: string;
  height?: string;
  firstGradientColor?: string;
  secondGradientColor?: string;
}

const AppLogo: FC<IAppLogoProps> = (props) => {
  const {
    className = '',
    width = 65,
    height = 65,
    firstGradientColor= '#8750f7',
    secondGradientColor= '#00c8b4',
  } = props

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 50 50"
      pointerEvents="none"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor={firstGradientColor} />
          <stop offset="100%" stopColor={secondGradientColor} />
        </linearGradient>
      </defs>
      <path
        fill="none"
        stroke="url(#grad1)"
        strokeWidth="2"
        d="M25 5A20 20 0 119.24 15"
      ></path>
      <text
        x="53%"
        y="53%"
        fill="url(#grad1)"
        dy=".35em"
        fontFamily="Arial"
        fontSize="30"
        textAnchor="middle"
        style={{userSelect: 'none'}}
      >
        S
      </text>
    </svg>
  );
}

export default AppLogo;
