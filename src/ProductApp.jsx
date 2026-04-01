import React from "react";
import ProductForm from "./ProductForm.jsx";
import ProductTable from "./ProductTable.jsx";

class ProductApp extends React.Component {
  state = {
    products: []
  };

  handleAddProduct = (newProduct) => {
    this.setState((prevState) => ({
      products: [...prevState.products, newProduct]
    }));
  };

  render() {
    return (
      <main className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          <p class="text-red-500 p-6 text-4xl font-bold">Minitask 2</p>
          <h3 className="text-3xl font-extrabold text-left text-gray-800">Form Product</h3>
          
          {/* Mengirim fungsi sebagai props */}
          <ProductForm addProduct={this.handleAddProduct} />
          
          {/* Mengirim data array sebagai props */}
          <ProductTable data={this.state.products} />
        </div>
      </main>
    );
  }
}

export default ProductApp;