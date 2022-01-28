import React, { useState, useEffect } from 'react';
import logo from "./assets/images/logo.svg";
import Robot from './components/Robot';
import RobotDiscount from './components/RobotDiscount';
import ShoppingCart from './components/ShoppingCart';
import styles from './App.module.css';


interface Props {}

interface State {
  robotGallery: any[];
}

const App : React.FC = (props) => {
  const [count, setCount] = useState<number>(0)
  const [robotGallery, setRobotGallery] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    document.title = `click ${count}次`
  }, [count])

  useEffect(() => {
    (async() => {
      setLoading(true)
      try {
        const responses = await fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(data => setRobotGallery(data))
        const data = await responses.json()
        setRobotGallery(data)
      } catch(e: any) {
        setError(e.message)
      }
      setLoading(false)
    })()
  }, [])

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>Enzo機器人</h1>
      </div>
      <button onClick={() => setCount(count+1)}>Click</button>
      <span>count: { count }</span>
      <ShoppingCart />
      { error && error !== '' && <div>網站錯誤: {error}</div>}
      { loading && <h2>loading 加載中</h2>}
      {
        !loading && (
          <div className={styles.robotList}>
            { robotGallery.map((r, index) => (
              index % 2 == 0 ? (
                <RobotDiscount id={r.id} email={r.email} name={r.name} />
              ) :
                <Robot id={r.id} email={r.email} name={r.name} />
            ))}
          </div>
        )
      }
      
    </div>
  );
}

export default App;
