import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/buttons";
import { Input } from '../components/inputs';
import Menu from "../components/menu";
import logo from '../img/logo.png'

import "../style.css";
import "../css/hall.css";


const Hall = () => {
  const token = localStorage.getItem('workerToken');
  const [client, setClient] = useState('');
  const [products, setProducts] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [menu, setMenu] = useState('all-day');
  const [order, setOrder] = useState([]);
  const [table, setTable] = useState('');
  const [selectTable, setSelectTable] = useState('');
  const [error, setError] = useState({
    client: '',
    table: '',
    order: '',
  });

  useEffect(() => {
    if (!token) {
      history.push('/');
    }

    fetch('https://lab-api-bq.herokuapp.com/products', {
      headers: {
        Authorization: `${token}`,
        accept: "application/json",
      }
    }).then((response) =>
      response.json()
    ).then((json) => {
      setProducts(json);
    })

  }, []);

  useEffect(() => {
    if (products && products.length > 0) {
      setCurrentProducts(products.filter((prod) => prod.type === menu));
    }
    
  }, [products, menu]);

  const history = useHistory();
  const handleSignOut = (e) => {
    e.preventDefault();
    history.push('/login')
    localStorage.clear();
  }
  const ordering = () => {
    history.push('/todeliver')
  }

  const handleChange = (e) => {
    setTable(e.target.value)
    setSelectTable(e.target.value)
  }
  
  const addProduct = (item) => {
    setSelectedProducts([...selectedProducts, item]);
  }
  
  const removeSelectedProduct = (index) => {
    const filteredProducts = selectedProducts.filter((item, i) => index !== i);
    setSelectedProducts(filteredProducts);
  }

  return (
    <>
      <img src={logo} alt='logo' className="logo"/>
      <div className="container">
        <section className="menu">

          <section className="products-btn">
            <Button text="DaCasa" className='button' onClick={() => { setMenu('all-day'); }} />
            <Button text="Café da manhã" className='button' onClick={() => { setMenu('breakfast'); }} />
            <Button text={'Pedido Pronto (' + selectedProducts.length + ')'} className='button' onClick={ordering} />
            <Button text="Sair" className='button' onClick={handleSignOut} />
          </section>

          <section>
          {selectedProducts && selectedProducts.map((item, index) => (
             <div onClick={() => removeSelectedProduct(index)}>
               { item.name }
             </div> 
          ))}
          </section>

          <section className="products">
            {currentProducts && currentProducts.map((item, index) => (
              <div className="card" key={index}>
                <div>
                  <Menu
                    onClick={() => addProduct(item)}
                    name={item.name}
                    img={item.image}
                    price={item.price}
                    flavor={item.flavor}
                    ></Menu>
                </div>
              </div>
            ))}
          </section>
        </section>

      </div>
      <div className="container">
        <section className="client-info">
          <h1>Carrinho</h1>

          <Input
            className="cartInput"
            placeholder="Nome do cliente: "
            name="client"
            value={client}
            onChange={(e) => setClient(e.target.value)} />

          <select onChange={handleChange} value={selectTable} name="Mesa: " className="tableCart">
            <option defaultValue>Mesa: </option>
            <option value="1">Mesa 1</option>
            <option value="2">Mesa 2</option>
            <option value="3">Mesa 3</option>
            <option value="4">Mesa 4</option>
            <option value="5">Mesa 5</option>
            <option value="5">Mesa 6</option>
            <option value="5">Mesa 7</option>
            <option value="5">Mesa 8</option>
          </select>
</section>

</div></>
);
}

export default Hall;
