import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';

function App() {
  return (
    <div className="App">
      <FirstComponent name='Nord Stage 33 8 keys' author='E.M.L.A Music' city='Le Hawre, France' price='$5738.00'/>
      <FirstComponent name='Line 6 Helix Reck Guitar' author='ProMusic Tools' city='Munchen, Germany' price='$1831.57'/>
      <FirstComponent name='Nord Lead A1' author='Gear Garage' city='Dulwich Hill,Australia' price='$1700.00'/>
      <FirstComponent name='Moog Subsequent 37' author='TurnLab' city='Antwerpen,Belgium' price='$1700.00'/>
      <FirstComponent name='Moog minitaur 2010s Black' author='Andrews Gear Outlet' city='OJAI C.A, USA' price='$682.80'/>
    </div>
  );
}

export default App;
