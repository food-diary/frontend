import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Diary.module.css";

export const Diary = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    proteins: 0,
    fats: 0,
    carbohydrates: 0,
    calories: 0,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3006/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3006/products", formData);
      fetchProducts();
      setFormData({
        name: "",
        description: "",
        proteins: 0,
        fats: 0,
        carbohydrates: 0,
        calories: 0,
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3006/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className={styles.diary}>
      <h1>Дневник питания</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Название продукта (обязательно):
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Описание продукта (не обязательно):
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Белки:
          <input
            type="number"
            name="proteins"
            value={formData.proteins}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Жиры:
          <input
            type="number"
            name="fats"
            value={formData.fats}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Углеводы:
          <input
            type="number"
            name="carbohydrates"
            value={formData.carbohydrates}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Калории:
          <input
            type="number"
            name="calories"
            value={formData.calories}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Добавить продукт</button>
      </form>
      <h2>Список продуктов</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Название</th>
            <th>Описание</th>
            <th>Белки</th>
            <th>Жиры</th>
            <th>Углеводы</th>
            <th>Калории</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.proteins}</td>
              <td>{product.fats}</td>
              <td>{product.carbohydrates}</td>
              <td>{product.calories}</td>
              <td>
                <button onClick={() => handleDelete(product.id)}>
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
