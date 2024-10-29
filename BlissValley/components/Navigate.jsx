import * as React from "react";
import Svg, { Defs, ClipPath, Path, Mask, G } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Navigate = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={300}
    viewBox="0 0 224.88 52.5"
    height={70}
    {...props}
  >
    <Defs>
      <ClipPath id="b">
        <Path d="M42.32 9.313h140.414v30.46H42.32Zm0 0" />
      </ClipPath>
      <ClipPath id="c">
        <Path d="M42.32 9.313h140.414v30.46H42.32Zm0 0" />
      </ClipPath>
      <ClipPath id="f">
        <Path d="M1 .79h126.254v23.772H1Zm0 0" />
      </ClipPath>
      <ClipPath id="e">
        <Path d="M0 0h128v25H0z" />
      </ClipPath>
      <Mask id="d">
        <G filter="url(#a)">
          <Path fillOpacity={0.3} d="M-22.488-5.25h269.856v63H-22.488z" />
        </G>
      </Mask>
    </Defs>
    <G clipPath="url(#b)">
      <Path d="M182.477 20.969v7.023h-2.317v4.668h-2.316v2.317h-2.317v2.355h-4.668v2.313H54.051v-2.313h-4.633v-2.316h-2.316v-2.317H44.71v-4.707h-2.316V20.97h2.316v-4.633h2.316V14.02h2.317v-2.391h4.668V9.313H170.82v2.316h4.672v2.316h2.313v2.317h2.316v4.668h2.356Zm0 0" />
    </G>
    <Path
      fill="#a40d61"
      d="M44.71 27.992V20.97l2.352-4.633 2.356-2.352 4.633-2.355h116.77l4.632 2.355 2.352 2.352 2.355 4.633v7.023l-2.355 4.668-2.352 2.356-4.633 2.316H54.05l-4.632-2.316-2.355-2.356Zm0 0"
    />
    <Path
      fill="#fd2298"
      d="M170.82 11.629v2.316H54.05V11.63ZM49.418 16.336h4.668V14.02h-4.668Zm4.633 18.68v-2.317h-4.633v2.317Zm-6.989-14.047h2.317v-4.633h-2.316Zm2.356 11.691v-4.668h-2.316v4.668Zm-4.707-4.668h2.316V20.97h-2.316Zm0 0"
    />
    <G clipPath="url(#c)">
      <Path d="M54.05 13.984h-4.632V11.63h4.668v2.355Zm-4.632 0h-2.316v2.317h2.316ZM47.063 32.66v2.317h2.316V32.66Zm2.355 2.356v2.316h4.668v-2.316Zm-2.355-18.68H44.71v4.672h2.316v-4.672ZM44.71 27.992v4.668h2.316v-4.668Zm-2.316-7.023v7.023h2.316V20.97ZM170.82 37.332h4.672v-2.316h-4.672Zm4.633-2.316h2.317v-2.317h-2.317Zm2.352-18.68V14.02h-2.313v2.316Zm-2.352-2.352V11.63h-4.668v2.316h4.668Zm2.352 18.676h2.316v-4.668h-2.316Zm2.355-11.691v-4.633h-2.316v4.672h2.316Zm0 0v7.023h2.317V20.97Zm-16.363-9.34h7.023V9.313H54.05v2.316ZM61.07 37.332h-7.02v2.313h116.77v-2.313Zm0 0" />
    </G>
    <G mask="url(#d)">
      <G clipPath="url(#e)" transform="translate(53 13)">
        <G clipPath="url(#f)">
          <Path d="M1.05 22.016h116.735v2.316H1.051Zm116.77 0h4.672v-2.317h-4.672Zm0-21.032v2.317h4.672V.984Zm4.633 18.676h2.317v-4.668h-2.317Zm0-16.324v4.672h2.317V3.336Zm2.352 4.633v7.023h2.316V7.97Zm0 0" />
        </G>
      </G>
    </G>
    <Path
      d="M83.497 27.442v-.891h-.89v-.89h-.892v-.892h-.89v-3.562h1.781v2.672h.89v.89h.892v-.89h.89v-2.672h1.781v3.563h-.89v.89h-.89v.89h-.891v.891Zm7.122-5.344v-.891H92.4v.89Zm-1.782 5.343v-.89h1.78v-2.672h-.89v-.89h2.672v3.562h1.781v.89Zm6.233.001v-.891h4.453v-.89h-3.562v-.892h-.891v-.89h.89v-.89h4.454v.89H96.85v.89h3.563v.891h.89v.89h-.89v.891Zm9.793-5.344v-.891h1.781v.89Zm-1.782 5.343v-.89h1.78v-2.672h-.89v-.89h2.672v3.562h1.781v.89Zm8.904.001v-3.563h-1.782v-.89h1.78v-1.782h1.782v1.781h1.781v.89h-1.78v3.564Zm0 0"
      fillOpacity={0.459}
    />
    <G transform="translate(116.435 28.332)" fillOpacity={0.459} />
    <Path
      d="M124.447 27.442v-.891h-.89v-5.344h1.781v5.344h2.672v-5.344h1.781v5.344h-.89v.89Zm6.233 0v-6.235h5.344v.89h.89v2.673h-1.78v.89h.89v.89h.89v.891h-2.671v-.89h-.891v-.89h-.89v1.78Zm1.781-2.672h1.782v-.891h.89v-1.781h-2.672Zm6.23 2.672v-6.235h1.782v5.344h3.562v.89Zm0 0"
      fillOpacity={0.459}
    />
    <Path
      d="M83.063 27.008v-.891h-.89v-.89h-.892v-.892h-.89v-3.562h1.781v2.672h.89v.89h.892v-.89h.89v-2.672h1.781v3.563h-.89v.89h-.89v.89h-.891v.891Zm7.122-5.344v-.891h1.781v.89Zm-1.782 5.343v-.89h1.78v-2.672h-.89v-.89h2.672v3.562h1.781v.89Zm6.232.001v-.891h4.453v-.89h-3.562v-.892h-.891v-.89h.89v-.89h4.454v.89h-3.564v.89h3.563v.891h.89v.89h-.89v.891Zm9.794-5.344v-.891h1.781v.89Zm-1.782 5.343v-.89h1.78v-2.672h-.89v-.89h2.672v3.562h1.781v.89Zm8.904.001v-3.563h-1.782v-.89h1.78v-1.782h1.782v1.781h1.781v.89h-1.78v3.564Zm12.462 0v-.891h-.89v-5.344h1.781v5.344h2.672v-5.344h1.781v5.344h-.89v.89Zm6.232 0v-6.235h5.344v.89h.89v2.673h-1.78v.89h.89v.89h.89v.891h-2.671v-.89h-.891v-.89h-.89v1.78Zm1.781-2.672h1.782v-.891h.89v-1.781h-2.672Zm6.231 2.672v-6.235h1.782v5.344h3.562v.89Zm0 0"
      fill="#fff"
    />
  </Svg>
);
export default Navigate;
