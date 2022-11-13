import { useDispatch, useSelector } from 'react-redux';
import { FilterLabel, FilterInput } from './Filter.styled';
import { getStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/filterSlice';
import { nanoid } from 'nanoid';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  const filterId = nanoid(3);

  const handleFilterChange = evt =>
    dispatch(setStatusFilter(evt.currentTarget.value));

  return (
    <FilterLabel htmlFor={filterId}>
      Find contacts by name
      <FilterInput
        id={filterId}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </FilterLabel>
  );
};

export default Filter;
