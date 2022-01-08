import React, { Component } from 'react';
import Navigation from '../Header/Navigation';
import DISHES from '../../data/Dishes';
import MenuItem from './MenuItem';


class Menu extends Component {
      state = {
            dishes: DISHES
      }
      render() {

            const dishes = this.state.dishes.map((item) => {
                  return (
                        <MenuItem dish={item} key={item.id} /> // evry dish has an id.
                  );
            }

            );

            return (
                  <div className='container'>
                        <div className='row' >
                              <div className='col-6'>
                                    {dishes}

                              </div>
                        </div>
                  </div>
            );
      }
}
export default Menu;
