import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {BottomSheetContainer} from './BottomSheetContainer';

/* The height for PARTIAL and FULL bottom sheets to be displayed at */
export const snapPoints = [310, 600];

const styles = StyleSheet.create({
  surface: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    paddingTop: 20,
  },
});

/**
 * Renders an Bottom Sheet
 */
export function MainContainer() {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView pointerEvents="box-none" style={styles.surface} />
      <BottomSheetContainer />
    </View>
  );
}
