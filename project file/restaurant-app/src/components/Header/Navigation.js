import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';

const Navigation = () => {
      return (
            <div>
                  <Navbar
                        color="secondary"
                        container="sm"
                        dark
                        expand="sm"
                        fixed="top"
                        light
                  >
                        <NavbarBrand href="/">
                              Restaurant
                        </NavbarBrand>
                        <NavbarToggler onClick={function noRefCheck() { }} />
                        <Collapse navbar>
                              <Nav
                                    className="me-auto"
                                    navbar
                              >
                                    <NavItem>
                                          <NavLink href="/components/">
                                                Components
                                          </NavLink>
                                    </NavItem>
                                    <NavItem>
                                          <NavLink href="https://github.com/reactstrap/reactstrap">
                                                GitHub
                                          </NavLink>
                                    </NavItem>

                              </Nav>
                              <NavbarText>
                                    Simple Text
                              </NavbarText>
                        </Collapse>
                  </Navbar>
            </div>
      );
}
export default Navigation;