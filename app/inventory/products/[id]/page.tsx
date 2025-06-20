'use client'

import { useParams } from "next/navigation"
import { useState, useEffect } from 'react';
import productsData from "../sample/dummy_products.json";
import inventoriesData from "../sample/dummy_inventories.json";

type ProductData = {
  id: number;
  name: string;
  price: number;
  description: string;
};

type InventoryData = {
  id: number;
  type: string;
  date: string;
  unit: number;
  quantity: number;
  price: number;
  inventory: number;
};

export default function Page() {
  const params = useParams();

  if (!params || !params.id){
    return <div>パラメータが見つかりません</div>
  }
  const id = Number(params.id);

  // 読込データを保持
  const [product, setProduct] = useState<ProductData>
  ({ id: 0, name: "", price: 0, description: ""});

  const [data, setData] = useState<Array<InventoryData>>([]);

  useEffect (() => {
    const selectedProduct: ProductData = productsData.find(v => v.id === id)?? {
      id: 0,
      name: "",
      price: 0,
      description: "",
    };
    setProduct(selectedProduct);
    setData(inventoriesData);
  }, [id])

  return (
    <>
      <h2>商品在庫管理</h2>
      <h3>在庫処理</h3>
      <form>
        <div>
          <label>商品名:</label>
          <span>{product.name}</span>
        </div>
        <div>
          <label>数量:</label>
          <input type="text" />
        </div>
        <button>商品を仕入れる</button>
        <button>商品を卸す</button>
      </form>
      <h3>在庫履歴</h3>
      <table>
        <thead>
          <tr>
            <th>処理種別</th>
            <th>処理日時</th>
            <th>単価</th>
            <th>数量</th>
            <th>価格</th>
            <th>在庫数</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d: InventoryData) => (
            <tr key={d.id}>
              <td>{d.type}</td>
              <td>{d.date}</td>
              <td>{d.unit}</td>
              <td>{d.quantity}</td>
              <td>{d.price}</td>
              <td>{d.inventory}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
