import React from "react";

class ProductTable extends React.Component {
  render() {
    const { data } = this.props; // Mengambil data dari Parent
    return (
      <div className="mt-8 overflow-x-auto">
        <h2 className="text-xl font-bold mb-4 border-b-2 border-blue-400 pb-2">Daftar Product</h2>
        <table className="min-w-full bg-white border border-gray-300 shadow-sm rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-3 border">Nama Product</th>
              <th className="px-4 py-3 border">Jenis</th>
              <th className="px-4 py-3 border">Brand</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className="text-center hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2 border font-medium">{item.nama}</td>
                  <td className="px-4 py-2 border">{item.jenis}</td>
                  <td className="px-4 py-2 border text-blue-600 font-semibold">{item.brand}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-4 py-10 text-center text-gray-400 italic bg-gray-50">
                  Belum ada data product yang ditambahkan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
