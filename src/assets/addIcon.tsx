import Svg, { SvgProps, Path } from 'react-native-svg';

const AddIcon = (props: SvgProps) => (
  <Svg width={22} height={22} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.25 1A.75.75 0 0 1 8 .25h6a.75.75 0 0 1 .75.75v6.25H21a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-6.25V21a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75v-6.25H1A.75.75 0 0 1 .25 14V8A.75.75 0 0 1 1 7.25h6.25V1Zm1.5.75V8a.75.75 0 0 1-.75.75H1.75v4.5H8a.75.75 0 0 1 .75.75v6.25h4.5V14a.75.75 0 0 1 .75-.75h6.25v-4.5H14a.75.75 0 0 1-.75-.75V1.75h-4.5Z"
      fill="#5313D1"
    />
  </Svg>
);

export default AddIcon;
