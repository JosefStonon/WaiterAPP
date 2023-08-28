import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../types/CartItem';
import { ProductContainer, Actions, Item, Image, QuantityContainer, ProductDetails } from './styles';
import { Text } from '../Text';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { MinusCircle } from '../Icons/MinusCircle';

interface CartProps {
  cartItems: CartItem[];
}

export function Cart({cartItems}: CartProps) {
  return (
    <FlatList
      data={cartItems}
      keyExtractor={cartItem => cartItem.product._id}
      showsVerticalScrollIndicator={false}
      renderItem={({item: cartItem}) => (
        <Item>
          <ProductContainer>
            <Image
              source={{
                uri: `http://10.36.238.173:3001/uploads/${cartItem.product.imagePath}`,

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
  );
}
