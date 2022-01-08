import React, { Component } from 'react';
import Navigation from '../Header/Navigation';
import DISHES from '../../data/Dishes';
import MenuItem from './MenuItem';
import DishDetails from './DishDetails';

class Menu extends Component {
      state = {
            dishes: DISHES,
            selctedDish: null
      }

      dishSelect = (dish) => {
            this.state.selctedDish = dish;
            this.setState({

            });
      }

      render() {
            let seletedADish = null;
            // if user clicks on a dish,
            // then this variable is not null

            if (this.state.selctedDish) {
                  seletedADish = <DishDetails dish={this.state.selctedDish} />
            }


            const dishes = this.state.dishes.map((item) => {
                  return (
                        <MenuItem dish={item} key={item.id}
                              function={() => this.dishSelect(item)}
                        /> // evry dish has an id.
                  );
            }
            );
            return (
                  <div className='container'>
                        <div className='row' >
                              <div className='col-6'>
                                    {dishes}

                              </div>
                              <div className='col-6'>
                                    {seletedADish}
                              </div>
                        </div>
                  </div>
            );
      }
}
export default Menu;
