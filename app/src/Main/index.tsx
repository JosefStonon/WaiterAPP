
import {
  Container,
  CategoriesContainer,
  MenuContainer,
  Footer,
  FooterContainer }
  from './styles';

import { Header } from '../components/Header/index';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';
import { TableModal } from '../components/TableModal';
import { useState } from 'react';

export function Main() {
  const [isTableModalVisible, setTableModalVisible] = useState(false);
  const [selectedTable, setSelectTable] = useState('');

  function handleSaveTable(table: string) {
    setSelectTable(table);
    setTableModalVisible(false);
  }

  function handleCancelOrder() {
    setSelectTable('');
  }

  return (

    <>
      <Container>

        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleCancelOrder}
        />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>

      </Container>

      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button onPress={() => setTableModalVisible(true)} >
            Novo Pedido
            </Button>
          )}
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setTableModalVisible(false)}
        onSave={handleSaveTable}
      />

    </>
  );
}
