import React, {useState} from 'react';
import { styled } from '@mui/system';
import { ContainerSort, Item, SelectStyle } from "./NativeSelects.style";

const FormControl = styled('div')`
  margin: ${({ theme }) => theme.spacing(1)};
  min-width: 120px;
`;

export const NativeSelects = () => {
  const [state, setState] = useState({
    
    name: 'hai',
  });

  const handleChangeSort = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
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
          value={state.sort}
          onChange={handleChangeSort}
          
          inputProps={{
            name: 'sort',
            id: 'outlined-sort-native-simple',
          }}
        >
          <option aria-label="None" value=""/>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </SelectStyle>
      </FormControl>     
    </ContainerSort>
  );
}
