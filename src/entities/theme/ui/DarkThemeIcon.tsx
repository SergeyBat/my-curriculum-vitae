import {FC} from "react";

export interface IDarkThemeIconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  firstGradientColor?: string;
  secondGradientColor?: string;
}

const DarkThemeIcon: FC<IDarkThemeIconProps>= ({
  className,
  width = 27,
  height = 27,
  firstGradientColor= '#8750f7',
  secondGradientColor= '#00c8b4',
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 256 256"
  >
    <defs>
      <linearGradient
        id="color-1"
        x1="30.003"
        x2="30.003"
        y1="10.447"
        y2="57.301"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor={secondGradientColor}></stop>
        <stop offset="1" stopColor={firstGradientColor}></stop>
      </linearGradient>
      <linearGradient
        id="color-2"
        x1="29.565"
        x2="29.565"
        y1="10.447"
        y2="57.301"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor={secondGradientColor}></stop>
        <stop offset="1" stopColor={firstGradientColor}></stop>
      </linearGradient>
      <linearGradient
        id="color-3"
        x1="26.462"
        x2="26.462"
        y1="10.447"
        y2="57.301"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor={secondGradientColor}></stop>
        <stop offset="1" stopColor={firstGradientColor}></stop>
      </linearGradient>
      <linearGradient
        id="color-4"
        x1="42.45"
        x2="42.45"
        y1="23.814"
        y2="31.091"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor={firstGradientColor}></stop>
        <stop offset="1" stopColor={secondGradientColor}></stop>
      </linearGradient>
      <linearGradient
        id="color-5"
        x1="34.45"
        x2="34.45"
        y1="11.452"
        y2="15.495"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor={firstGradientColor}></stop>
        <stop offset="1" stopColor={secondGradientColor}></stop>
      </linearGradient>
      <linearGradient
        id="color-6"
        x1="52.5"
        x2="52.5"
        y1="5.795"
        y2="15.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor={firstGradientColor}></stop>
        <stop offset="1" stopColor={secondGradientColor}></stop>
      </linearGradient>
    </defs>
    <g
      fill="none"
      strokeMiterlimit="10"
      fontFamily="none"
      fontSize="none"
      fontWeight="none"
      textAnchor="none"
      style={{mixBlendMode: "normal"}}
    >
      <path
        fill="url(#color-1)"
        d="M53.434 42.111c-.826-1.422-2.369-2.227-4.031-2.117a23.79 23.79 0 01-4.548-.12c-10.704-1.308-19.422-10.026-20.729-20.73a23.707 23.707 0 01-.118-4.547c.115-1.66-.696-3.204-2.119-4.031-1.389-.807-3.02-.754-4.362.14C9.296 16.181 4.962 25.708 6.215 35.568c1.452 11.421 10.796 20.765 22.218 22.217 1.125.143 2.246.213 3.357.213 8.624 0 16.654-4.232 21.505-11.521.894-1.344.946-2.976.139-4.366zm-1.803 3.258c-5.053 7.592-13.842 11.591-22.946 10.432-10.532-1.339-19.147-9.954-20.486-20.485-1.157-9.102 2.842-17.895 10.435-22.947a2.132 2.132 0 011.184-.367c.364 0 .729.098 1.065.293a2.296 2.296 0 011.129 2.162 25.822 25.822 0 00.129 4.929c1.417 11.604 10.867 21.056 22.472 22.473 1.639.201 3.294.243 4.93.131a2.3 2.3 0 012.163 1.128 2.092 2.092 0 01-.075 2.251z"
        transform="scale(4)"
      ></path>
      <path
        fill="url(#color-2)"
        d="M31.81 52c-.867 0-1.749-.056-2.621-.167-8.751-1.113-15.909-8.271-17.021-17.021l-1.984.252c1.226 9.64 9.112 17.527 18.754 18.754.954.12 1.92.182 2.872.182 6.73 0 12.978-3.037 17.138-8.333l-1.572-1.236C43.596 49.241 37.923 52 31.81 52z"
        transform="scale(4)"
      ></path>
      <path
        fill="url(#color-3)"
        d="M29.44 49.85c.788.1 1.585.15 2.369.15a17.75 17.75 0 006.965-1.408l-.781-1.842c-2.592 1.1-5.436 1.482-8.301 1.115-6.97-.887-12.672-6.589-13.558-13.559l-1.984.252c.999 7.861 7.43 14.292 15.29 15.292z"
        transform="scale(4)"
      ></path>
      <path
        fill="url(#color-4)"
        d="M43.138 23.518l.3 1.042a2.855 2.855 0 001.952 1.952l1.042.3c.691.199.691 1.178 0 1.377l-1.042.3a2.855 2.855 0 00-1.952 1.952l-.3 1.042c-.199.691-1.178.691-1.377 0l-.3-1.042a2.855 2.855 0 00-1.952-1.952l-1.042-.3c-.691-.199-.691-1.178 0-1.377l1.042-.3a2.855 2.855 0 001.952-1.952l.3-1.042c.199-.691 1.178-.691 1.377 0z"
        transform="scale(4)"
      ></path>
      <path
        fill="url(#color-5)"
        d="M34.832 11.288l.167.579c.151.524.56.933 1.084 1.084l.579.167a.398.398 0 010 .765l-.579.167c-.524.151-.933.56-1.084 1.084l-.167.579a.398.398 0 01-.765 0l-.167-.579a1.584 1.584 0 00-1.084-1.084l-.579-.167a.398.398 0 010-.765l.579-.167c.524-.151.933-.56 1.084-1.084l.167-.579a.398.398 0 01.765 0z"
        transform="scale(4)"
      ></path>
      <path
        fill="url(#color-6)"
        d="M53.341 6.633l.367 1.273a3.487 3.487 0 002.386 2.386l1.273.367c.844.243.844 1.44 0 1.683l-1.273.367a3.487 3.487 0 00-2.386 2.386l-.367 1.273c-.243.844-1.44.844-1.683 0l-.367-1.273a3.487 3.487 0 00-2.386-2.386l-1.273-.367c-.844-.243-.844-1.44 0-1.683l1.273-.367a3.487 3.487 0 002.386-2.386l.367-1.273c.244-.844 1.44-.844 1.683 0z"
        transform="scale(4)"
      ></path>
    </g>
  </svg>
);

export default DarkThemeIcon;
