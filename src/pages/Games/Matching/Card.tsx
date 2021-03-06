import cover from "./images/cover.png";
import "./Card.css";

type Props = {
  onClick: (arg: number) => void;
  card: CardType;
  index: number;
  isInactive: boolean;
  isFlipped: boolean;
  isDisabled: boolean;
};

export type CardType = {
  type: string;
  image: string;
};

const Card = ({
  onClick,
  card,
  index,
  isInactive,
  isFlipped,
  isDisabled,
}: Props) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={`card ${isFlipped ? "is-flipped" : ""} ${
        isInactive ? "is-inactive" : ""
      }`}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={cover} className="image" alt="cover" />
      </div>
      <div className="card-face card-back-face">
        <img className="image" src={card.image} alt={card.type} />
      </div>
    </div>
  );
};

export default Card;
