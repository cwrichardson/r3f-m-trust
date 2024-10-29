import { panda } from "styled-system/jsx";
import { Model } from "@/components/model";

export default function Home() {
  // Convert vertical FOV (70) to radians
  const FOV = 70 * Math.PI / 180
  // calculate height ratio given camera distance (1500)
  const heightRatio = 2 * Math.tan(FOV / 2) * 1500;
  // calculate height given object height (344)
  const height = 344 / heightRatio;

  return (
      <main>
        <panda.div
          pos={'absolute'} 
          top={'50%'} 
          left={'50%'}
          translate={'auto'}
          translateX={'-50%'}
          translateY={'-50%'}
          zIndex={'1000'}
          opacity={0.5}
          borderWidth={'3'}
          borderColor={'red.900'}
          // style={{ '--height-ratio': height }}
          // height={'calc(var(--height-ratio) * 100vh)'}
          // these are hardcoded in the video, but they probably should be
          // somehow calulcated, either like above or using
          // PerspectiveCamera.getViewSize()
          h={'27.27vh'}
          w={'calc(608 / 344 * 26vh)'}
        >
          <panda.video src='/media/white flower.mp4' w={'full'} h={'full'} />
        </panda.div>
        <Model w={'100vw'} h={'100vh'} />
      </main>
  );
}
