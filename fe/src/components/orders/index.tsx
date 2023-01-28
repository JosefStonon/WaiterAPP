import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';
import { Order } from '../../types/Order';

const orders: Order[] = [
    {
		"_id": "63c338b51fcbdc6bca0189e7",
		"table": "5",
		"status": "WAITING",
		"products": [
			{
				"product": {
					"name": "Chicken",
					"imagePath": "1673737860522-chicken.png",
					"price": 80,
				},
				"quantity": 2,
				"_id": "63c338b51fcbdc6bca0189e8"
			},

            {
                "product": {
                    "name": "Suco de Laranja",
                    "imagePath": "1673738036397-suco-de-laranja.png",
                    "price": 15
                },
                "quantity": 2,
                "_id": "63c338b51fcbdc6bca0189e9"
            }
        ]
    }

]




 export function Orders() {
    return (
        <Container>
          <OrdersBoard
          icon="⏱️"
          title="Fila de espera"
          orders={orders}
           />

          <OrdersBoard
          icon="🥣"
          title="Em preparação"
          orders={[]}
           />

          <OrdersBoard
          icon="✅"
          title="Pronto"
          orders={[]}
           />

        </Container>
    );
}
