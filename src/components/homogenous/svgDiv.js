import React from 'react'

export default ({topHexColor}) => [
    <div>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="fill-current"
      >
        <path
          fill={topHexColor.toString()}
          fill-opacity="1"
          d="M0,64L80,85.3C160,107,320,149,480,154.7C640,160,800,128,960,112C1120,96,1280,
          96,1360,96L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,
          640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
      </svg>
</div>

]