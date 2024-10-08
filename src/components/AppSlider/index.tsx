import React from 'react';
import {Dimensions, View} from 'react-native';
import type {ICarouselInstance} from 'react-native-reanimated-carousel';
import Carousel from 'react-native-reanimated-carousel';

const window = Dimensions.get('window');
const PAGE_WIDTH = window.width;

// Define a generic type T to allow flexibility in data structure
interface AppSliderProps<T> {
  width?: number;
  height?: number;
  data: T[]; // Data is an array of type T
  RenderItem: React.ComponentType<{item: T}>; // RenderItem expects a prop "item" of type T
}

function AppSlider<T>({
  data,
  RenderItem,
  width = 0.75,
  height = 100,
}: AppSliderProps<T>) {
  const ref = React.useRef<ICarouselInstance>(null);

  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH * width,
    height: height,
  } as const;

  return (
    <View style={{paddingStart: 24, paddingTop: 16}}>
      <Carousel
        {...baseOptions}
        loop={false}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        ref={ref}
        style={{width: '100%'}}
        data={data}
        onSnapToItem={index => console.log('current index:', index)}
        // Pass each data item to RenderItem dynamically
        renderItem={({item}) => <RenderItem item={item} />}
      />
    </View>
  );
}

export default AppSlider;
