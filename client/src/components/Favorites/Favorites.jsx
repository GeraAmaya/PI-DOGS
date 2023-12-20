import { connect } from "react-redux";
import Card from "../Card/Card";


const Favorites = (props) => {
  const {myFavorites} = props;
  return (
    <div>
      {
        myFavorites.map((char) => {
          return(
            <Card
                    id={char.id}
                    key={char.id}
                    img ={char.img}
                    name ={char.name}
                    temperament={char.temperament}
                    weight={char.weight}
                  
            />
          )
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);


