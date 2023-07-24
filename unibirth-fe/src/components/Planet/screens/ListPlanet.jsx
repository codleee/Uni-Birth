import React from "react";
import Footer1 from "../../../common/blocks/Footer1";
import ArticlePlanet from "../blocks/ArticlePlanet";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import { BiSearch, BiHomeAlt, BiLogInCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

import { useNavigation } from "../../../hooks/useNavigation";

const ListPlanet = () => {
  const {
    navigateToLoginMember,
    navigateToDetailConstellation,
    refreshPage,
    navigateToMemberProfile,
  } = useNavigation();

  const buttonsFooter = [
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "별자리검색",
      onClick: navigateToDetailConstellation,
      icon: <BiSearch />,
    },
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "홈",
      onClick: refreshPage,
      icon: <BiHomeAlt />,
    },
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "로그인",
      onClick: navigateToLoginMember,
      icon: <BiLogInCircle />,
    },
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "마이페이지",
      onClick: navigateToMemberProfile,
      icon: <CgProfile />,
    },
  ];

  return (
    <div>
      <h1>행성들이 보입니다. </h1>
      <ArticlePlanet />
      <Footer1 buttons={buttonsFooter} />
    </div>
  );
};

export default ListPlanet;
