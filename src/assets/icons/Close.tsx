import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="1em"
      viewBox="0 0 24 24"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M22.245 4.015a.808.808 0 010 1.139l-6.276 6.27a.81.81 0 000 1.14l6.273 6.272a.81.81 0 010 1.14l-2.285 2.277a.814.814 0 01-1.142 0l-6.271-6.271a.81.81 0 00-1.141 0l-6.276 6.267a.81.81 0 01-1.141 0l-2.282-2.28a.81.81 0 010-1.14l6.278-6.269a.81.81 0 000-1.14L1.709 5.147a.808.808 0 010-1.14l2.284-2.278a.813.813 0 011.142.001L11.405 8a.81.81 0 001.141.001l6.276-6.267a.812.812 0 011.141 0l2.282 2.281z" />
    </svg>
  );
}

export default SvgComponent;
