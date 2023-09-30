import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function buildSequenceArray(arr) {
  let ret = [];
  for (let item of arr) {
    ret.push(item);
    ret.push(2000);
  }
  return ret;
}

var sequenceItems = [
  'Unearth mysteries as an archaeologist.',
  'Become a valiant mercenary.',
  'Become a legendary warrior.',
  'Subvert kingdoms and start revolutions.',
  'Lead quests with the wisdom of a wizard.',
  'Navigate intrigues with cunning prowess.',
  'Rule mightily as a majestic emperor.',
  'Defend as a fearless knight in armor.',
  'Plunge into space as an astronaut.',
  'Solve mysteries as a master detective.',
  'Command starships and rule entire planets.',
  'Discover treasures with your pirate crew.',
  'Fight evil with the might of a hero.',
  'Lead Orcs into battle as a ruthless warlord.',
  'Ascend to demigod and rule the world.',
  'Infiltrate enemy lines like a shadow.',
  'Trade, negotiate and become wealthy.',
  'Join the mightiest guild and ascend to greatness.',
  'Slay Vampires in the darkest of the nights.',
  'Hunt Werewolves while kissed by the moonlight.',
  'Become a renowed bard and play around the world.',
  'Open your own tavern.'
];

const HomeAnimation = () => {
  let randomizedArray = shuffle(sequenceItems);
  let useArray = buildSequenceArray(randomizedArray);

  return (
    <div className="text-center text-[#f2e2a8] mt-[14rem] w-[60%] mx-auto bg-slate-100/10 ring-[2px] ring-slate-100/25 rounded-[1rem] shadow-lg hover:scale-[102%] transition-all duration-300">
      <TypeAnimation
        sequence={useArray}
        wrapper="h1"
        speed={30}
        style={{ fontSize: '3rem', display: 'inline-block' }}
        repeat={Infinity}
        className="font-normal"
        deletionSpeed={60}
      />
    </div>
  )
}

export default HomeAnimation