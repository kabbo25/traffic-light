import "./styles.css";
import { useEffect, useState } from "react";
import { act } from "react";
export default function App() {
  const light = [
    {
      id: 0,
      name: "red",
      duration: 4000,
      next: 1,
    },
    {
      id: 1,
      name: "yellow",
      duration: 2000,
      next: 2,
    },
    {
      id: 2,
      name: "green",
      duration: 6000,
      next: 0,
    },
  ];
  const [activeLight, setActiveLight] = useState(light[0]);
  useEffect(() => {
    const currentTimeout = setTimeout(() => {
      setActiveLight((prev) => light[prev.next]);
    }, activeLight.duration);
    return () => clearTimeout(currentTimeout);
  }, [activeLight]);
  return (
    <>
      <div className={"light-container"}>
        {[1, 2, 3].map((val, index) => {
          const activeClass = index === activeLight.id ? activeLight.name : "";
          return <div key={index} className={`light ${activeClass}`}></div>;
        })}
      </div>
    </>
  );
}
