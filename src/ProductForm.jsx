import React from "react";

class ProductForm extends React.Component {
  state = { nama: "", jenis: "", brand: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.nama || !this.state.jenis || !this.state.brand) {
      alert("Mohon isi semua data!");
      return;
    }
    // Mengirim data ke Parent
    this.props.addProduct(this.state);
    // Reset form
    this.setState({ nama: "", jenis: "", brand: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="bg-blue-400 p-6 rounded-lg shadow-md text-black">
        <h2 className="text-xl font-bold mb-4 text-white">Form Product</h2>
        
        <div className="mb-4">
          <label className="text-left block mb-1 text-xl font-bold mt-8">Nama Product :</label>
          <input 
            className="bg-gray-100 p-2 w-full rounded border border-gray-400" 
            type="text" 
            value={this.state.nama}
            onChange={(e) => this.setState({ nama: e.target.value })}
            placeholder="Masukkan nama product"
          />
        </div>

        <div className="mb-4">
          <label className="text-left block mb-1 text-xl font-bold">Jenis Product :</label>
          <div className="flex flex-wrap gap-4">
            {["Makanan", "Minuman", "Barang Pecah Belah"].map((item) => (
              <label key={item} className="flex items-center gap-1 cursor-pointer">
                <input 
                  type="radio" 
                  name="jenis" 
                  value={item}
                  checked={this.state.jenis === item}
                  onChange={(e) => this.setState({ jenis: e.target.value })}
                /> {item}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="text-left block mb-1 text-xl font-bold">Pilih Brand :</label>
          <select 
            className="p-2 w-full rounded border border-gray-400 bg-white"
            value={this.state.brand}
            onChange={(e) => this.setState({ brand: e.target.value })}
          >
            <option value="" disabled>Mohon Dipilih</option>
            <option value="Indofood">Indofood</option>
            <option value="Nestle">Nestle</option>
            <option value="Unilever">Unilever</option>
          </select>
        </div>

        <button 
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl font-bold transition-all active:scale-95 w-full sm:w-auto" 
          type="submit"
        >
          Submit Data
        </button>
      </form>
    );
  }
}

export default ProductForm;
