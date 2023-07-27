import React, {useState} from 'react';
import { styled } from '@mui/system';
import { ContainerSort, Item, SelectStyle } from "./NativeSelects.style";

const FormControl = styled('div')`
  margin: ${({ theme }) => theme.spacing(1)};
  min-width: 120px;
`;

export const NativeSelects = ({ setProductsPerPage }) => {
  const [state, setState] = useState({
    sort: "",
    perPage: 12,
  });

  const handleChangeSort = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "sort") {
      setState({
        ...state,
        sort: value,
      });
    } else if (name === "perPage") {
      setState({
        ...state,
        perPage: value,
      });
      setProductsPerPage(value); 
    }
  };

  return (
    <ContainerSort>
      <Item>Сортувати за:</Item>
      <FormControl variant="outlined"  sx={{ minWidth: 120 }} >
        <SelectStyle
         sx={{ padding: '0px' }}
          native
          value={state.sort}
          onChange={handleChangeSort}
         
          inputProps={{
            name: 'sort',
            id: 'outlined-sort-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>За рейтингом</option>
          <option value={20}>Від дешевих до дорогих</option>
          <option value={30}>Від дорогих до дешевих</option>
        </SelectStyle>
      </FormControl> 
      <Item style={{ marginLeft: 'auto' }}>Показувати:</Item>  
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
      <SelectStyle
          native
          value={state.productsPerPage}
          onChange={handleChangeSort} 
          inputProps={{
            name: "perPage", 
            id: "outlined-perPage-native-simple", 
          }}
        >
          <option aria-label="None" value="12"/>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={5}>5</option>
        </SelectStyle>
      </FormControl>     
    </ContainerSort>
  );
}
