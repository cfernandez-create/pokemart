import React from "react";
import { Typography, AppBar, Toolbar, Button, TextField } from "@mui/material/";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MenuIcon from '@mui/icons-material/Menu';


function Header() {

  return (
    <div>
      <AppBar
        sx={{
          display: "flex",
          overflow: "hidden",
          height: "64px",
        }}
        color="primary"
        position="absolute"
        className="app-bar"
        width="100%"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingRight: "10px",
            position: "relative",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <CatchingPokemonIcon style={{ color: "#fff0de" }} />
            <Typography fontWeight={800} style={{ color: "#fff0de" }}>
              POKÉMART
            </Typography>
          </div>
          
          <div className="search__container">
                <input type="text" placeholder='Search'></input>
                  <SearchRoundedIcon style={{ color: "#fff0de" }} />
                
          </div>
          <div
            className="header-links"
            style={{
              display: "flex",
              alignItems: "center",
              padding: "20px",
              justifyContent: "space-around",
            }}
          >
            <a href="#popular">
              <Button color="inherit">
                <Typography style={{ color: "#fff0de" }} variant="h7">
                  Popular
                </Typography>
              </Button>
            </a>
            <a href="#categories">
              <Button color="inherit">
                <Typography style={{ color: "#fff0de" }} variant="h7">
                  Categories
                </Typography>
              </Button>
            </a>
            <a href="#">
            <Button color="inherit">
              <Typography style={{ color: "#fff0de" }} variant="h7">
                Services
              </Typography>
            </Button></a> 
            <a href="#">
            <Button color="inherit">
              <Typography style={{ color: "#fff0de" }} variant="h7">
                About Us
              </Typography>
            </Button>{" "}</a>
          </div>
         
          <ShoppingCartRoundedIcon
            style={{ color: "#fff0de" }}
            className="shopping-cart"/>
             <MenuIcon className="menu-icon"/>

           
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
