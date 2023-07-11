import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {MediaStream, RTCView, mediaDevices} from 'react-native-webrtc';

const styles = StyleSheet.create({
  rtcView: {
    height: 200,
    width: '100%',
    backgroundColor: 'black',
  },
});

export function WebRTCViewer() {
  const [localMediaStream, setLocalMediaStream] = useState<
    MediaStream | undefined
  >(undefined);

  useEffect(() => {
    // React advises to declare the async function directly inside useEffect
    async function getMediaStream() {
      let isVoiceOnly = false;
      let mediaConstraints = {
        audio: true,
        video: {
          frameRate: 30,
          facingMode: 'user',
        },
      };

      try {
        const mediaStream = await mediaDevices.getUserMedia(mediaConstraints);

        if (isVoiceOnly) {
          let videoTrack = await mediaStream.getVideoTracks()[0];
          videoTrack.enabled = false;
        }

        setLocalMediaStream(mediaStream);
      } catch (err) {
        // Handle Error
      }
    }

    // You need to restrict it at some point
    // This is just dummy code and should be replaced by actual
    if (!localMediaStream) {
      getMediaStream();
    }
  }, [localMediaStream]);

  console.log(localMediaStream?.toURL());

  if (localMediaStream) {
    return (
      <RTCView
        mirror={true}
        objectFit={'contain'}
        streamURL={localMediaStream.toURL()}
        zOrder={0}
        style={styles.rtcView}
      />
    );
  } else {
    return <View style={{backgroundColor: 'black'}} />;
  }
}
