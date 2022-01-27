import React, { useState } from 'react';
import logo from "./assets/images/logo.svg";
import Robot from './components/Robot';
import ShoppingCart from './components/ShoppingCart';
import styles from './App.module.css';


interface Props {}

interface State {
  robotGallery: any[];
}

const App : React.FC = (props) => {

  const [count, setCount] = useState<number>(0)

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>Enzo機器人</h1>
      </div>
      <button onClick={() => setCount(count+1)}>Click</button>
      <span>count: { count }</span>
      <ShoppingCart />
      <div className={styles.robotList}>
        {/* { this.state.robotGallery.map(r => <Robot id={r.id} email={r.email} name={r.name} />)} */}
      </div>
    </div>
  );
}

export default App;
