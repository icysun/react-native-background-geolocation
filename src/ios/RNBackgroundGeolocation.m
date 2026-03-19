// Original content
#import <CoreLocation/CoreLocation.h>

- (CLLocationManager *)locationManager {
  if (!_locationManager) {
    _locationManager = [[CLLocationManager alloc] init];
    _locationManager.delegate = self;
    _locationManager.desiredAccuracy = kCLLocationAccuracyBestForNavigation;
    _locationManager.distanceFilter = 10.0;
    _locationManager.pausesLocationUpdatesAutomatically = YES;
    _locationManager.allowsBackgroundLocationUpdates = YES;
    _locationManager.activityType = kCLActivityTypeOther;
  }
  return _locationManager;
}

// Modified content
- (CLLocationManager *)locationManager {
  if (!_locationManager) {
    _locationManager = [[CLLocationManager alloc] init];
    _locationManager.delegate = self;
    _locationManager.desiredAccuracy = kCLLocationAccuracyBestForNavigation;
    _locationManager.distanceFilter = 10.0;
    _locationManager.pausesLocationUpdatesAutomatically = YES;
    _locationManager.allowsBackgroundLocationUpdates = YES;
    _locationManager.activityType = kCLActivityTypeOther;
    _locationManager.stopTimeout = 5.0;
  }
  return _locationManager;
}
