import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading";
import Users from "./components/Users";
import GreetingV2 from "./components/GreetingV2";
import Counter from "./components/Counter";
import SignUpForm from "./components/SignUpForm";
import Slider from "./components/Slider";
import Greeting from "./components/Greating";
import List from "./components/List";
import List2 from "./components/Liast2";
import ImgWrapper from "./components/ImgWrapper";
import UserLoader from "./components/UserLoader";
import PostLoader from "./components/PostLoader";
import DataLoader from "./components/DataLoader";
import { getData, loadUser } from "./api";
import { useContext, useEffect, useState } from "react";
import Tree from "./components/Tree";
import { ThemeContext, UserContext } from "./components/contexts";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import CONSTANTS from "./constants";

function App(props) {
  const [user, setUser] = useState({});
  const [theme, setTheme] = useState(CONSTANTS.THEMES.DARK_THEME);

  useEffect(() => {
    setUser({
      id: 1,
      firstName: "User",
      lastName: "Userenko",
    });
    // setTheme({
    //   theme: CONSTANTS.THEMES.DARK_THEME,
    // });
  }, []);
  // const list1 = <List listTitle="List lorem 1">
  //   <li>Text</li>
  //   <li>Text2</li>
  //   <li>Text3</li>
  // </List>

  const switchTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={[theme, switchTheme]}>
        <div className="App">
          <header className="App-header">
            {/* <Heading className="className" id='id'/> */}
            {/* <Users /> */}
            {/* <GreetingV2 /> */}
            {/* <Counter /> */}
            {/* <SignUpForm /> */}
            {/* <Slider /> */}
            {/* <Greeting /> */}
            {/* {list1} */}
            {/* <List2
          style={{
            color: "black",
            fontSize: "3rem",
            fontVariantCaps: "all-small-caps",
          }}
        >
          <h1>test</h1>
          <h2>test2</h2>
        </List2>
        <List2
          style={{
            color: "black",
            fontSize: "3rem",
            fontVariantCaps: "all-small-caps",
          }}
          children={
            <>
              <h3>test3</h3>
              <h3>test4</h3>
            </>
          }
        /> */}
            {/* <ImgWrapper
          style={{
            width: "200px",
            height: "200px",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
          id="wrapper1"
          title='some title'
        >
          <img
            src="https://images-assets.nasa.gov/image/PIA17669/PIA17669~orig.jpg?w=1024&h=1024&fit=clip&crop=faces%2Cfocalpoint"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </ImgWrapper> */}
            {/* <UserLoader/> */}

            {/* <PostLoader /> */}

            {/* <DataLoader
          getData={getData}
          render={(data) => (
            <>
              <h2>Render prop</h2>
              {console.log(data)}
              <ul>
                {data.data.map((data) => (
                  <li key={data.id}>{data.title}</li>
                ))}
              </ul>
            </>
          )}
        /> */}
            <Tree />
            <Header />
            <Header2 />
          </header>
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
