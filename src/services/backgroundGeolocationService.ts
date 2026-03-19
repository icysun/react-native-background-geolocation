import { BackgroundGeolocation } from '@transistorsoft/react-native-background-geolocation';

export async function configureBackgroundGeolocation(): Promise<State> {
    if (isConfigured) {
        return BackgroundGeolocation.stop();
    }

    const config = {
        desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
        distanceFilter: 200,
        heartbeatInterval: 10000,
        stopOnTerminate: false,
        startOnBoot: true,
        locationProvider: BackgroundGeolocation.ACTIVITY_PROVIDER,
        // Add the following configuration to handle app kill state
        onGeofence: (event) => {
            if (event.action === 'enter') {
                console.log('Geofence entered:', event.id);
                // Attempt to restart the background service if the app is killed
                BackgroundGeolocation.start();
            }
        },
        // ... other configurations
    };

    try {
        await BackgroundGeolocation.configure(config);
        isConfigured = true;
    } catch (error) {
        console.error('Error configuring BackgroundGeolocation:', error);
        isConfigured = false;
    }

    return isConfigured ? 'Configured' : 'Failed to configure';
}
