import * as React from "react";
import Svg, { Defs, ClipPath, Path, Mask, G } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const TimerButton = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={250}
    viewBox="0 0 187.5 37.5"
    height={50}
    {...props}
  >
    <Defs>
      <ClipPath id="b">
        <Path d="M15.598 2.489h150.375v32.625H15.598Zm0 0" />
      </ClipPath>
      <ClipPath id="c">
        <Path d="M15.598 2.489h150.375v32.625H15.598Zm0 0" />
      </ClipPath>
      <ClipPath id="f">
        <Path d="M.5.199H136v25.442H.5Zm0 0" />
      </ClipPath>
      <ClipPath id="e">
        <Path d="M0 0h136.5v26H0z" />
      </ClipPath>
      <ClipPath id="g">
        <Path d="M0 0h3.808v3.852H0Zm0 0" />
      </ClipPath>
      <ClipPath id="h">
        <Path d="M0 0h3.808v3.852H0Zm0 0" />
      </ClipPath>
      <Mask id="d">
        <G filter="url(#a)">
          <Path fillOpacity={0.3} d="M-18.75-3.75h225v45h-225z" />
        </G>
      </Mask>
    </Defs>
    <G clipPath="url(#b)">
      <Path d="M165.845 14.985v7.529h-2.484v5.006h-2.482v2.482h-2.482v2.523h-5.006v2.482H28.158v-2.482h-4.966v-2.482H20.71v-2.485h-2.564v-5.045h-2.482v-7.528h2.482v-4.967h2.485V7.535h2.482V4.971h5.005V2.489H153.35V4.97h5.006v2.485h2.482v2.482h2.485v5.006h2.523Zm0 0" />
    </G>
    <Path
      fill="#ff61bb"
      d="M18.145 22.514v-7.529l2.523-4.967 2.523-2.523 4.966-2.523H153.35l4.967 2.523 2.522 2.523 2.523 4.967v7.529l-2.523 5.006-2.522 2.523-4.967 2.482H28.158l-4.966-2.482-2.523-2.523Zm0 0"
    />
    <Path
      fill="#fff"
      d="M153.35 4.971v2.485H28.157V4.97ZM23.191 10.018h5.006V7.535h-5.005Zm4.966 20.025v-2.484h-4.966v2.485Zm-7.489-15.058h2.485v-4.967h-2.485Zm2.523 12.535v-5.006h-2.482v5.006Zm-5.046-5.006h2.485v-7.529h-2.485Zm0 0"
    />
    <G clipPath="url(#c)">
      <Path d="M28.158 7.494h-4.966V4.971h5.006v2.523Zm-4.966 0H20.71v2.485h2.482ZM20.668 27.52v2.482h2.485V27.52Zm2.523 2.523v2.482h5.006v-2.482Zm-2.523-20.025h-2.523v5.005h2.485v-5.005Zm-2.523 12.495v5.007h2.485v-5.006Zm-2.483-7.528v7.529h2.482v-7.529Zm137.688 17.54h5.006v-2.482h-5.006Zm4.967-2.482h2.482v-2.485h-2.482Zm2.522-20.025V7.535h-2.482v2.482Zm-2.522-2.524V4.971h-5.007v2.485h5.006Zm2.522 20.026h2.485v-5.006h-2.485Zm2.523-12.535v-4.967h-2.482v5.006h2.482Zm0 0v7.529h2.484v-7.529ZM145.82 4.97h7.529V2.489H28.158V4.97ZM35.688 32.526h-7.53v2.482H153.35v-2.483Zm0 0" />
    </G>
    <G mask="url(#d)">
      <G clipPath="url(#e)" transform="translate(55 14)">
        <G clipPath="url(#f)">
          <Path d="M.658 23.043h125.153v2.482H.658Zm125.192 0h5.006v-2.485h-5.006Zm0-22.549v2.485h5.006V.494Zm4.967 20.026h2.482v-5.006h-2.482Zm0-17.502v5.006h2.482V3.018Zm2.522 4.967v7.529h2.485V7.985Zm0 0" />
        </G>
      </G>
    </G>
    <G clipPath="url(#g)">
      <Path d="M3.808-16.145v7.553H1.324v5.024H-1.16v2.49h-2.485v2.531h-5.008v2.49h-125.285v-2.49h-4.968v-2.49h-2.485V-3.53h-2.564v-5.063h-2.485v-7.553h2.485v-4.982h2.485v-2.492h2.484v-2.57h5.008v-2.493H-8.691v2.492h5.008v2.49h2.485v2.493h2.482v5.021H3.81Zm0 0" />
    </G>
    <Path
      fill="silver"
      d="M-143.955-8.592v-7.553l2.525-4.982 2.524-2.531 4.968-2.531H-8.692l4.967 2.531 2.525 2.531 2.523 4.982v7.553l-2.522 5.024-2.526 2.531-4.967 2.49h-125.246l-4.968-2.49-2.523-2.531Zm0 0"
    />
    <G clipPath="url(#h)">
      <Path d="M-133.938-23.658h-4.968v-2.531h5.008v2.531Zm-4.968 0h-2.485v2.49h2.485Zm-2.523 20.09v2.49h2.482v-2.49Zm2.523 2.531v2.49h5.008v-2.49Zm-2.523-20.09h-2.526v5.021h2.485v-5.021Zm-2.526 12.535v5.024h2.485v-5.024Zm-2.485-7.553v7.553h2.485v-7.553ZM-8.691 1.453h5.008v-2.49h-5.008Zm4.967-2.49h2.485V-3.53h-2.485Zm2.525-20.09v-2.492h-2.484v2.492Zm-2.525-2.531v-2.531h-5.008v2.49h5.008Zm2.525 20.09h2.482v-5.024h-2.482Zm2.524-12.577v-4.982H-1.16v5.021h2.484Zm0 0v7.553H3.81v-7.553ZM-16.224-26.19h7.533v-2.492h-125.246v2.492ZM-126.406 1.453h-7.532v2.49H-8.692v-2.49Zm0 0" />
    </G>
    <Path
      d="M-133.938-1.037H-8.733v2.49h-125.205Zm125.246 0h5.008V-3.53h-5.008Zm0-22.621v2.49h5.008v-2.49Zm4.967 20.09h2.485v-5.024h-2.485Zm0-17.559v5.021h2.485v-5.021Zm2.525 4.982v7.553h2.482v-7.553Zm0 0"
      fillOpacity={0.3}
    />
  </Svg>
);
export default TimerButton;