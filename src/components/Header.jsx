import React from "react";
import { Typography, AppBar, Toolbar, Button, TextField } from "@mui/material/";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function Header() {
  return (
    <div>
      <AppBar sx={{
            display: "flex",
          overflow: "hidden",
          height: "64px"}}
            color="primary" position="absolute" className="app-bar" width="100%">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingRight: "10px",
            position: "relative",
            height: "100%"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", }}>
            <CatchingPokemonIcon style={{ color: "#fff0de" }} />
            <Typography fontWeight={800} style={{ color: "#fff0de" }}>
              POKÉMART
            </Typography>
          </div>
          <div>
      <TextField
        id="search"
        label="Search"
        variant="outlined"
        style={{ color: "", alignItems: "center" }}
        InputProps={{
          endAdornment: (
            <SearchRoundedIcon style={{ color: "#fff0de" }} />
          ),
          sx: {
            "& .MuiInputLabel-root": {
              textAlign: "center",
              height: "40px",
              color: "#fff0de",
            },
          },
          inputProps: {
            style: {color:"#fff0de" }
          }
        }}
        InputLabelProps={{
          style: { color: "#fff0de", textAlign: "center" },
        }}
      />
    </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "20px",
              justifyContent: "space-around",
            }}
          >
            <Button color="inherit">
              <Typography style={{ color: "#fff0de" }} variant="h7">
                Popular
              </Typography>
            </Button>
            <Button color="inherit">
              <Typography style={{ color: "#fff0de" }} variant="h7">
                Categories
              </Typography>
            </Button>
            <Button color="inherit">
              <Typography style={{ color: "#fff0de" }} variant="h7">
                Services
              </Typography>
            </Button>
            <Button color="inherit">
              <Typography style={{ color: "#fff0de" }} variant="h7">
                About Us
              </Typography>
            </Button>
            <ShoppingCartRoundedIcon style={{ color: "#fff0de", marginLeft: '20px' }} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
