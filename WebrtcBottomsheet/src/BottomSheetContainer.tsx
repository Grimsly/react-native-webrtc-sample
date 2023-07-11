import React, {useCallback, useRef} from 'react';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {BottomSheetDefaultBackdropProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {WebRTCViewer} from './WebRTCViewer';
/* The height for PARTIAL and FULL bottom sheets to be displayed at */
export const snapPoints = [310, 600];

/**
 * Renders an Bottom Sheet
 */
export function BottomSheetContainer() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  /**
   * A backdrop that is be displayed when the bottom sheet is open.
   * Currently it is displayed only when the bottom sheet is fully open.
   */
  const renderBackdrop = useCallback(
    (backdropProps: BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        {...backdropProps}
        disappearsOnIndex={0}
        appearsOnIndex={1}
        pressBehavior={'collapse'}
      />
    ),
    [],
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      backdropComponent={renderBackdrop}
      enableContentPanningGesture={false}
      animateOnMount={true}
      enablePanDownToClose={true}
      snapPoints={snapPoints}
      keyboardBehavior="interactive"
      keyboardBlurBehavior="restore"
      android_keyboardInputMode="adjustResize">
      <View style={{flex: 1, height: 10000}}>
        <ScrollView
          style={{height: 10000, backgroundColor: 'blue', flexGrow: 1}}>
          <WebRTCViewer />
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
        </ScrollView>
      </View>
    </BottomSheet>
  );
}
