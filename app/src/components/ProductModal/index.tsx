import { FlatList, Modal } from 'react-native';
import { Text } from '../Text';
import { Product } from '../../types/Products';
import { Image, CloseButton, ModalBody, Header, ImgredientsContainer, Ingredient, Footer, FooterContainer, PriceContainer } from './styles';
import { Close } from '../Icons/Close';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  product: null | Product;
}

export function ProductModal({visible, onClose, product}: ProductModalProps) {

  if(!product) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle='pageSheet'
      onRequestClose={onClose}
    >

      <Image
        source={{
          uri: `http://10.36.238.173:3001/uploads/${product.imagePath}`,
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>

      </Image>
      <ModalBody>

        <Header>
          <Text size={24} weight='600'>{product.name}</Text>
          <Text color='#666' style={{marginTop: 8}}>
            {product.description}
          </Text>

        </Header>

        {product.ingredients.length > 0 && (
          <ImgredientsContainer>
            <Text weight='600' color='#666'>Ingredientes</Text>

            <FlatList
              data={product.ingredients}
              keyExtractor={ingredient => ingredient._id}
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 16 }}
              renderItem={({item: ingredient}) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text size={14} color='#666' style={{marginLeft: 20}}>{ingredient.name}</Text>
                </Ingredient>
              )}
            />

          </ImgredientsContainer>
        )}

      </ModalBody>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color='#666'></Text>
            <Text size={20} weight='600'>{formatCurrency(product.price)}</Text>
          </PriceContainer>
        </FooterContainer>

        <Button onPress={() => alert('adicionar ao pedido')}>Adicionar ao pedido</Button>
      </Footer>
    </Modal>
  );
}
