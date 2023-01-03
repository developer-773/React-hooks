import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Usestate } from './components/hooks/UseState'
// import UseEffect from './components/hooks/UseEffect'
import { UseRef } from './components/hooks/UseRef'
import { UseMemo, UseMemo2 } from './components/hooks/UseMemo'
import { UseCallback } from './components/hooks/UseCallback'
import { UseImperativeHandle } from './components/hooks/UseImperativeHandle'
import UseReducerr from './components/hooks/UseReducer/UseReducerr'
import UseReducer2 from './components/hooks/UseReducer/UseReducer2'
import UsePreviousMain from './components/hooks/CustomHooks/UsePreviousMain'
import UseLocalStorageMain from './components/hooks/CustomHooks/UseLocalStorageMain'
import ShoppingList from './components/hooks/UseReducer/UseReducerPractice'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='container'>
    {/* <Usestate /> */}
    {/* <UseEffect /> */}
    {/* <UseRef /> */}
    {/* <UseMemo /> */}
    {/* <UseMemo2 /> */}
    {/* <UseCallback /> */}
    {/* <UseImperativeHandle /> */}
    {/* <UseReducerr /> */}
    {/* <UseReducer2 /> */}
    {/* <UsePreviousMain /> */}
    {/* <UseLocalStorageMain /> */}
    <ShoppingList />
   </div>
  )
}

export default App
