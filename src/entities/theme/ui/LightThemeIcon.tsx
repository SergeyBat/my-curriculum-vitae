import {FC} from "react";

export interface ILightThemeIconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  firstGradientColor?: string;
  secondGradientColor?: string;
}

const LightThemeIcon: FC<ILightThemeIconProps> = ({
  className,
  width = 27,
  height = 27,
  firstGradientColor= '#8750f7',
  secondGradientColor= '#00c8b4',
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 256 256"
  >
    <defs>
      <linearGradient
        id="color-1"
        x1="31.985"
        x2="31.985"
        y1="5.696"
        y2="59.693"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor={firstGradientColor}></stop>
        <stop offset="1" stopColor={secondGradientColor}></stop>
      </linearGradient>
      <linearGradient
        id="color-2"
        x1="32"
        x2="32"
        y1="20.272"
        y2="51.917"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor={secondGradientColor}></stop>
        <stop offset="1" stopColor={firstGradientColor}></stop>
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
        d="M31.985 60h-.012a1.005 1.005 0 01-.756-.359l-4.896-5.861-7.515 2.551a1.002 1.002 0 01-1.307-.775l-1.31-7.525-7.782-1.551a.997.997 0 01-.743-1.324l2.628-7.172-5.966-5.232a.997.997 0 01.018-1.52l5.861-4.896-2.551-7.515a1.001 1.001 0 01.775-1.307l7.525-1.31 1.549-7.783a.997.997 0 011.324-.743l7.172 2.628 5.232-5.966c.193-.22.472-.338.764-.341.292.004.568.135.756.359l4.896 5.861 7.515-2.551a1.001 1.001 0 011.307.775l1.31 7.525 7.783 1.549a.997.997 0 01.743 1.324l-2.628 7.172 5.966 5.232a.997.997 0 01-.018 1.52l-5.861 4.896 2.551 7.515a1.001 1.001 0 01-.775 1.307l-7.525 1.31-1.549 7.783a1.003 1.003 0 01-.491.677.99.99 0 01-.833.066l-7.172-2.628-5.232 5.966a.998.998 0 01-.753.343zm-5.336-8.388a1 1 0 01.768.359l4.587 5.49 4.914-5.603a.994.994 0 011.096-.279l6.719 2.462 1.455-7.31a1 1 0 01.809-.79l7.05-1.228-2.396-7.058a.999.999 0 01.307-1.089l5.49-4.587-5.603-4.914a.998.998 0 01-.279-1.096l2.462-6.719-7.31-1.455a1 1 0 01-.79-.809L44.7 9.939l-7.058 2.396c-.391.13-.823.012-1.089-.307l-4.587-5.49-4.914 5.603a.991.991 0 01-1.096.279l-6.719-2.462-1.455 7.31a1 1 0 01-.809.79l-7.05 1.228 2.396 7.058a.999.999 0 01-.307 1.089l-5.49 4.587 5.603 4.914a.998.998 0 01.279 1.096l-2.462 6.719 7.31 1.455a1 1 0 01.79.809l1.228 7.05 7.058-2.396a.972.972 0 01.321-.055z"
        transform="scale(4)"
      ></path>
      <path
        fill="url(#color-2)"
        d="M32 50c-9.925 0-18-8.075-18-18s8.075-18 18-18 18 8.075 18 18-8.075 18-18 18zm0-34c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
        transform="scale(4)"
      ></path>
    </g>
  </svg>
);

export default LightThemeIcon;
