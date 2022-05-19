import { AppRoutes } from './routes/index';
import { GlobalStyles, Theme } from './shared/themes';
function App() {
    return (
        <Theme>
            <GlobalStyles />
            <AppRoutes />
        </Theme>
    );
}

export default App;
