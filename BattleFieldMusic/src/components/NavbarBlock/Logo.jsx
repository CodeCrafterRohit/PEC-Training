import React from "react";
import BattleFieldMusicLogo from "../../assets/MusicLogo.png";

const Logo = () => {
  return (
    <aside className="basis-[15%]">
      <figure className="w-full h-full flex justify-center items-center">
        <img
          src={BattleFieldMusicLogo}
          alt="BattleFieldMusicLogo"
          className="w-[100px] h-[60px]"
        />
      </figure>
    </aside>
  );
};

export default Logo;
