import { Monster } from '../../App';
import Card from '../card/card.component';
import './card-list.styles.css';

type CardListProps = {
    monsters: Array<Monster>
};

const CardList = ({ monsters }: CardListProps) => {

  return (
    <div className="card-list" key="list">
      {monsters.map((monster) => {
        return (
          <Card monster={monster} />
        )
      })}
    </div>
  );
};

export default CardList;