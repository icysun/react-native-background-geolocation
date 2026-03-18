// Original content
import com.transistorsoft.rnbackgroundgeolocation.RNBackgroundGeolocation;

public class MainActivity extends AppCompatActivity implements ReactActivityDelegate {
    // Existing code...

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Existing code...
        RNBackgroundGeolocation.configure(config);
    }

    private void configure() {
        // Existing configuration...
        config.rootProperty = "locations";
        // Existing configuration...
    }

    // Existing code...
    }
