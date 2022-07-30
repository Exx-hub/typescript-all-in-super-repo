import React, { Profiler, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import LoggedIn from './components/hooks/state/LoggedIn';
import User from './components/hooks/state/User';
import Form from './components/hooks/state/Form';
import User2 from './components/hooks/state/User2';
import Counter from './components/hooks/state/Counter';
import ThemeContextProvider from './components/hooks/context/ThemeContext';
import Box from './components/hooks/context/Box';
import UserContextProvider from './components/hooks/context/UserContext';
import UserWithContext from './components/hooks/context/UserWithContext';
import DomRef from './components/hooks/ref/DomRef';
import MutableRef from './components/hooks/ref/MutableRef';
import ClassCounter from './components/class/ClassCounter';
import { Private } from './components/componentProps/Private';
import { Profile } from './components/componentProps/Profile';
import { List } from './components/genericProps/List';
import { RandomNumber } from './components/restrictProps/RandomNumber';
import { Toast } from './components/templateLiterals/Toast';
import { CustomButton } from './components/html/Button';
import { CustomComponent } from './components/html/CustomComponent';



function App() {

  // const fullname = {
  //   firstname: "bruce",
  //   lastname: "wayne"
  // }

  // const siblingArray = [
  //   {
  //     firstname: "Alvin",
  //     lastname: "Acosta"
  //   },
  //   {
  //     firstname: "David",
  //     lastname: "Acosta"
  //   },
  //   {
  //     firstname: "Mark",
  //     lastname: "Acosta"
  //   },
  // ]

  // const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
  //   console.log(e, id)
  // }

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(e.target.value)
  // }

  // const [ inputValue, setInputValue ] = useState("")
  // console.log(inputValue)

  // const list = [
  //   'onions',
  //   'garlic',
  //   'chips',
  //   'steak',
  // ]

  // const click = (item: string | number) => console.log(item)

  // const list2 = [ 1, 2, 3, 4, 5 ]

  return (
    <div className="App">
      {/* <Greet name="alvin" messageCount={15} isEnrolled isLoggedIn /> */}
      {/* <Person fullname={fullname} occupation="superhero" /> */}
      {/* <PersonList siblings={siblingArray} /> */}
      {/* <Status status='error' /> */}
      {/* <Heading>Placeholder Text</Heading> */}
      {/* <Oscar><Heading>Oscar goes to Dicaprio</Heading></Oscar> */}
      {/* <Button handleClick={handleClick} /> */}
      {/* <Input inputValue={inputValue} handleChange={handleChange} /> */}
      {/* <Container styles={{
        border: '1px solid red',
        padding: '1.5rem',
        // myname: 'alvin' // will throw error cause not css
        // display: 0 // error cause wrong css value for display
      }} /> */}
      {/* <LoggedIn /> */}
      {/* <User /> */}
      {/* <Form /> */}
      {/* <User2 /> */}
      {/* <Counter /> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <UserWithContext />
      </UserContextProvider> */}
      {/* <DomRef /> */}
      {/* <MutableRef /> */}
      {/* <ClassCounter message='hello' /> */}
      {/* <Private isLoggedIn={false} component={Profile} /> */}
      {/* <List items={list} onClick={click} /> */}
      {/* <List items={[ 1, 2, 3, 4 ]} onClick={(item) => console.log(item)} /> */}
      {/* <List items={[ {
        first: 'bruce',
        last: 'wayne',
        id: 1
      } ]} onClick={(item) => console.log(item)} /> */}
      {/* <RandomNumber value={-1} isNegative isPositive isZero /> */}
      {/* <Toast position="center" /> */}
      {/* <CustomButton variant='primary' onClick={() => console.log('clicked')}>
        Primary Button
      </CustomButton> */}
      <CustomComponent name='alvin' isLoggedIn isEnrolled messageCount={2} />
    </div>
  );
}

export default App;
