export const LocationTrackProvider = ({ children }: LocationTrackProviderProps) => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  // Check for excessive location updates
  const locationUpdateInterval = 10000; // 10 seconds
  const locationUpdateThreshold = 1000; // 1 second
  const lastLocationUpdate = useRef<number | null>(null)

  useEffect(() => {
    const handleLocationUpdate = (location: Location) => {
      const currentTime = Date.now();
      if (lastLocationUpdate.current && currentTime - lastLocationUpdate.current < locationUpdateThreshold) {
        console.warn('Location update too frequent. Skipping this update.');
        return;
      }
      lastLocationUpdate.current = currentTime;
      // Your location update logic here
    }

    // Subscribe to location updates
    const subscription = backgroundGeolocation.onLocation(location => {
      handleLocationUpdate(location);
    }, error => {
      console.error('Location update error:', error);
    });

    return () => {
      subscription.remove();
    }
  }, []);

  // Check for excessive geofence checks
  const geofenceCheckInterval = 30000; // 30 seconds
  const geofenceCheckThreshold = 5000; // 5 seconds
  const lastGeofenceCheck = useRef<number | null>(null)

  useEffect(() => {
    const handleGeofenceCheck = (event: GeofenceEvent) => {
      const currentTime = Date.now();
      if (lastGeofenceCheck.current && currentTime - lastGeofenceCheck.current < geofenceCheckThreshold) {
        console.warn('Geofence check too frequent. Skipping this check.');
        return;
      }
      lastGeofenceCheck.current = currentTime;
      // Your geofence check logic here
    }

    // Subscribe to geofence events
    const geofenceSubscription = backgroundGeolocation.onGeofence(event => {
      handleGeofenceCheck(event);
    }, error => {
      console.error('Geofence event error:', error);
    });

    return () => {
      geofenceSubscription.remove();
    }
  }, []);

  return <>{children}</>{
}
