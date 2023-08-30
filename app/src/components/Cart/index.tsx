import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../types/CartItem';
import { ProductContainer, Actions, Item, Image, QuantityContainer, ProductDetails, Sumary, TotalContainer } from './styles';
import { Text } from '../Text';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { MinusCircle } from '../Icons/MinusCircle';
import { Button } from '../Button';

interface CartProps {
  cartItems: CartItem[];
}

export function Cart({cartItems}: CartProps) {
  return (
    <>
      <FlatList
        data={cartItems}
        keyExtractor={cartItem => cartItem.product._id}
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 20, maxHeight: 150}}
        renderItem={({item: cartItem}) => (
          <Item>
            <ProductContainer>
              <Image
                source={{
                  uri: `http://192.168.5.13:3001/uploads/${cartItem.product.imagePath}`,

                }}
              />
              <QuantityContainer>
                <Text size={14} color='#666'>
                  {cartItem.quantity}X
                </Text>
              </QuantityContainer>

              <ProductDetails>
                <Text size={14} weight='600'>{cartItem.product.name}</Text>
                <Text size={14} color='#666' style={{marginTop: 4}}>{formatCurrency(cartItem.product.price)}</Text>
              </ProductDetails>

            </ProductContainer>

            <Actions>
              <TouchableOpacity style={{marginRight: 24}}>
                <PlusCircle />
              </TouchableOpacity>

              <TouchableOpacity>
                <MinusCircle />
              </TouchableOpacity>

            </Actions>


          </Item>
        )}
      />

      <Sumary>
        <TotalContainer>
          <Text color='#666'>Total</Text>
          <Text size={20} weight='600'>{formatCurrency(120)}</Text>
        </TotalContainer>

        <Button onPress={() => alert('Confirmar pedido')}>
          Confirmar Pedido
        </Button>
      </Sumary>
    </>
  );
}
