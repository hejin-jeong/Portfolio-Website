import React, { useEffect, useState } from "react";
import "./ProfileChange.css";
import aa from "../resources/images/niagarafall.png";
import aa2 from "../resources/images/winterwind.png";
import aa3 from "../resources/images/hanrestaurant.png";
import aa4 from "../resources/images/garden.png";
import aa5 from "../resources/images/lemonjuice.png";
import aa6 from "../resources/images/baseballboard.png";
import aa7 from "../resources/images/mountain.png";
import aa8 from "../resources/images/burger.png";
import aa9 from "../resources/images/baseballfield.png";
import aa10 from "../resources/images/greenkorea.png";

const images = [aa, aa2, aa3, aa4, aa5, aa6, aa7, aa8, aa9, aa10];

export default function ProfileChange() {
  const [count, setCount] = useState(Math.floor(Math.random() * images.length));

  // Save timer ref and return cleanup function to clear it
  useEffect(() => {
    const timerId = setInterval(() => {
      // Use a functional state update to correctly increment the count
      setCount((count) => count + 1);
    }, 3000);

    return () => clearInterval(timerId);
  }, []);

  // `image` is derived state from the image array and current count
  // Take the count mod array length to get the correct computed index
  const image = images[count % images.length];

  return (
    <div>
      <img className="profile-img" src={image} alt="Profile" />
    </div>
  );
}
