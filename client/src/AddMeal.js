import React from 'react';
import { Button } from 'semantic-ui-react'

const lowerNavCss = {
  margin: "auto",
  marginTop: "2rem"
}

const AddMeal = (props) => {

  return (
      <Button style={lowerNavCss}>
        Add your own meal!
      </Button>
  );
};

export default AddMeal;

