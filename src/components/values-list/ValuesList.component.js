import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import Value from "../value/Value.component";
import { Hero } from "./ValuesList.styles";
import hero from "../../images/hero.JPG";

import { getValues } from "../../store/actions/values.actions";
import { getUserValues } from "../../store/actions/user-values.actions";

function ValuesList() {
  const [activeIndex, setActiveIndex] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getValues());
    dispatch(getUserValues());
  }, []);

  const history = useHistory();
  const values = useSelector(state => state.values.values);

  const usersList = useSelector(state => state.userValues.tempList);

  const goToNextCard = () => {
    let index = activeIndex;
    let slidesLength = values.length - 1;
    if (index === slidesLength) {
      history.push(`/reflect`);
    }
    ++index;
    setActiveIndex(index);
  };

  return (
    // <>
    <Hero img={hero}>
      {values &&
        values.map((val, index) => {
          return (
            <Value
              key={val.id}
              info={val}
              id={val.id}
              index={index}
              activeIndex={activeIndex}
              goToNextCard={goToNextCard}
              usersList={usersList}
            />
          );
        })}
    </Hero>
  );
}

export default ValuesList;

// import React, { useState, useEffect } from "react";
// import { Route, Redirect } from "react-router-dom";
// import { useHistory } from "react-router";
// import { useSelector, useDispatch } from "react-redux";

// import Value from "../value/Value.component";
// import UsersTopValues from "../user-top-values/UsersTopValues.component";
// import ValuesBannerWrapper from "../user-top-values/UsersTopValues.styles";
// import { AboutValuesHero } from "../about/about-values/AboutValues.styles";
// import { BottomImg } from "./ValuesList.styles";
// import hero from "../../images/hero.JPG";
// import stones from "../../images/stones.jpeg";

// import { getValues } from "../../store/actions/values.actions";

// function ValuesList() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [endOfList, setEndOfList] = useState(null);
//   const [narrowDown, setNarrowDown] = useState(true);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getValues());
//   }, []);

//   const history = useHistory();
//   const values = useSelector(state => state.values.values);

//   const usersList = useSelector(state => state.userValues.tempList);

//   const goToNextCard = () => {
//     let index = activeIndex;
//     let slidesLength = values.length - 1;
//     if (index === slidesLength) {
//       usersList.length > 2 && setNarrowDown(false);
//       setEndOfList(true);
//       history.push(`/values-selection/values-confirmation`);
//     }
//     ++index;
//     setActiveIndex(index);
//   };

//   const valueOnboardingComplete = JSON.parse(
//     localStorage.getItem("valueOnboardingComplete")
//   );
//   return (
//     <>
//       <AboutValuesHero img={hero} />
//       <BottomImg img={stones}>
//         {values && (
//           <ValuesBannerWrapper
//             endOfList={endOfList}
//             narrowDown={narrowDown}
//             usersList={usersList}
//           />
//         )}
//         {/* <BottomImg img={stones}> */}
//         {valueOnboardingComplete === false ? (
//           <Route path={`/values-selection/values-confirmation`}>
//             <UsersTopValues
//               endOfList={endOfList}
//               setEndOfList={setEndOfList}
//               narrowDown={narrowDown}
//               usersList={usersList}
//             />
//           </Route>
//         ) : (
//           <Redirect to="/choice-expl" />
//         )}
//         {
//           <>
//             {values &&
//               values.map((val, index) => {
//                 return (
//                   <Value
//                     key={val.id}
//                     info={val}
//                     id={val.id}
//                     index={index}
//                     activeIndex={activeIndex}
//                     goToNextCard={goToNextCard}
//                     endOfList={endOfList}
//                     usersList={usersList}
//                   />
//                 );
//               })}
//           </>
//         }
//       </BottomImg>
//     </>
//   );
// }

// export default ValuesList;
