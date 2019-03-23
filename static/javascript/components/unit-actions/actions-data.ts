import attackIcon from "../../../assets/svg/battles.svg";
import moneyIcon from "../../../assets/svg/money_bag.svg";
import castIcon from "../../../assets/svg/magic_wand.svg";
import formIcon from "../../../assets/svg/troll.svg";
import entertainIcon from "../../../assets/svg/lute.svg";
import studyIcon from "../../../assets/svg/study.svg";
import teachIcon from "../../../assets/svg/behind.svg";
import advanceIcon from "../../../assets/svg/sword.svg";
import produceIcon from "../../../assets/svg/wrench_hammer.svg";
import assasinateIcon from "../../../assets/svg/assasinate.svg";
import moveIcon from "../../../assets/svg/move.svg";
import sailIcon from "../../../assets/svg/boat.svg";
import sellIcon from "../../../assets/svg/pay.svg";
import giveIcon from "../../../assets/svg/give.svg";
import enterIcon from "../../../assets/svg/enter.svg";
import exitIcon from "../../../assets/svg/exit.svg";
import stealIcon from "../../../assets/svg/steal.svg";
import revealIcon from "../../../assets/svg/eye.svg";
import promoteIcon from "../../../assets/svg/promote.svg";

export const TURN_ACTIONS = [
  {
    name: "ADVANCE",
    icon: advanceIcon
  },
  {
    name: "ENTERTAIN",
    icon: entertainIcon
  },
  {
    name: "MOVE",
    icon: moveIcon
  },
  {
    name: "PRODUCE",
    icon: produceIcon
  },
  {
    name: "PILLAGE",
    icon: assasinateIcon
  },
  {
    name: "SAIL",
    icon: sailIcon
  },
  {
    name: "STUDY",
    icon: studyIcon
  },
  {
    name: "TAX",
    icon: moneyIcon
  },
  {
    name: "TEACH",
    icon: teachIcon
  },
  {
    name: "WORK",
    icon: moneyIcon
  }
];

export const FAST_ACTIONS = [
  {
    name: "ATTACK",
    icon: attackIcon
  },
  {
    name: "BUY",
    icon: moneyIcon
  },
  {
    name: "CAST",
    icon: castIcon
  },
  {
    name: "COMBAT",
    icon: castIcon
  },
  {
    name: "ENTER",
    icon: enterIcon
  },
  {
    name: "FORM",
    icon: formIcon
  },
  {
    name: "GIVE",
    icon: giveIcon
  },
  {
    name: "LEAVE",
    icon: exitIcon
  },
  {
    name: "NAME",
    icon: formIcon
  }
];

export const OTHER_FAST_ACTIONS = [
  {
    name: "ASSASINATE",
    icon: assasinateIcon
  },
  {
    name: "EXCHANGE",
    icon: moneyIcon
  },
  {
    name: "FORGET",
    icon: studyIcon
  },
  {
    name: "PROMOTE",
    icon: promoteIcon
  },
  {
    name: "REVEAL",
    icon: revealIcon
  },
  {
    name: "SELL",
    icon: sellIcon
  },
  {
    name: "SHOW",
    icon: studyIcon
  },
  {
    name: "STEAL",
    icon: stealIcon
  }
];
