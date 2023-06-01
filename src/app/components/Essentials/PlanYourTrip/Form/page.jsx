import React, { useState } from "react"
import { Col } from "react-bootstrap";
import { 
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
  Button  
} from "@mui/material";

const StayForm = () => {
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Col lg={6}>
      <div className="bg-light h-100 position-relative">
        <div className="form-sec">
          <Box my={10}>
            <TextField
              label="Destination"
              variant="standard"
              fullWidth={true}
            />
          </Box>
          <Box my={10}>
            <FormControl fullWidth className="customSelect">
              <InputLabel id="category-label" className="customLabel">Category</InputLabel>
              <Select
                labelId="category-label"
                label="Category"
                onChange={(e) => handleChange(e)}
                value={category}
                variant="standard"
                MenuProps={{ disableScrollLock: true }}
              >
                <MenuItem value={10}>Category1</MenuItem>
                <MenuItem value={20}>Category2</MenuItem>
                <MenuItem value={30}>Category3</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box display="flex" justifyContent="end">
            <Button
              variant="contained"
              className="ibm-font-20 btn-submit btn btn-md py-2 px-4 bg-yellow text-dark text-capitalize rounded underline-0 -trans"
            >
              Submit
            </Button>
          </Box>
        </div>
      </div>
    </Col>
  );
}

export default StayForm