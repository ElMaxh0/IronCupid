import logo from './logo.svg';
import './App.css';
import { LeftMenu } from './components/menu/left/menugeral';
import { NavMenu } from './components/menu/top/topmenu';
import { Card } from './components/card/styles';
import { Cards } from './components/card/card';
import ImgUrlProvider from './hooks/imgurl';
import ContentProvider from './hooks/contentid';
import BackgroundProvider from './hooks/background';
import { Footer } from './components/Footer/footer';
import { LoadContent } from './app/app';

function App() {
  return (
    <div className="App">
      <ImgUrlProvider>
        <ContentProvider>
          <BackgroundProvider>
            <div>
              <NavMenu />
              <div>
                <Cards />
              </div>
              <Footer />
            </div>
          </BackgroundProvider>
        </ContentProvider>
      </ImgUrlProvider>
    </div>
  );
}

export default App;
