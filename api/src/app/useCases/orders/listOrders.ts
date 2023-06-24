import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function listOrders(req: Request, res: Response) {
  try {
  const orders = await Order.find()
  .sort({ createAt: 1 }) // para ordenar os produtos da lista do mais antigo para o mais atual usa-se 1, vice-versa -1.
  .populate('products.product'); // apresenta todas as propriedades da order, e nao somente o Id.

    res.json(orders);
  } catch (error) {
    console.log(Error);
    res.sendStatus(500);
  }
}
