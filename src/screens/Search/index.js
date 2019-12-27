import React, { useRef, useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import UserItem from '~/components/UserItem';
import api from '~/services/api';

import { Container, Header, InputContainer, Input, List } from './styles';

function Search({ navigation }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const isInitialMount = useRef(true);

  useEffect(() => {
    async function fetchSearch() {
      try {
        const response = await api.get('/search/users/', {
          params: {
            searchText: query,
            page: 1,
          },
        });

        setResults(response.data.users);
      } catch (err) {
        console.log(err);
      }
    }

    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else if (query !== '') {
      fetchSearch();
    } else {
      setResults([]);
    }
  }, [query]);

  function onInputChange(txt) {
    setQuery(txt);
  }

  function clearQuery() {
    setQuery('');
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
        <InputContainer>
          <Input
            placeholder="Buscar por usuários"
            autoFocus
            value={query}
            onChangeText={onInputChange}
          />

          <TouchableOpacity onPress={clearQuery}>
            <MaterialIcons name="clear" size={30} color="#fff" />
          </TouchableOpacity>
        </InputContainer>
      </Header>

      <List>
        {results.map(data => (
          <UserItem
            key={data._id}
            data={data}
            onPress={() => navigation.navigate('User', { data })}
          />
        ))}
      </List>
    </Container>
  );
}

Search.navigationOptions = () => ({
  header: null,
});

export default Search;