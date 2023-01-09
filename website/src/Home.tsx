import { useState } from "react";
import reactLogo from "./assets/react.svg";
import NavBar from "./NavBar";

const html = await (await fetch('/index.html')).text()
console.log(html)
function Home() {
  return <div>Hey</div>;
}

export default Home;
