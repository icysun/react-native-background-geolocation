startTracking() {
  this.backgroundGeolocation.start({
    desiredAccuracy: 10,
    distanceFilter: 10,
    stopAfterElapsedMinutes: 30 // Default to stop after 30 minutes if not specified
  }).then(() => {
    console.log('Tracking started successfully');
  }).catch(error => {
    console.error('Error starting tracking:', error);
  });
}
