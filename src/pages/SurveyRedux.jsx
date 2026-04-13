import { useDispatch, useSelector } from "react-redux";
import { add, del } from "../redux/slices/survey";
import { useState } from "react";

function SurveyRedux() {
  const survey = useSelector((state) => state.survey);
  const dispatch = useDispatch();

  // 1. Perbaikan: Inisialisasi sebagai object, bukan array
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    smoker: "",
    cigarette: []
  });

  const onChangeForm = (e) => {
    const { name, value, type, checked, id } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setForm((prevState) => ({
          ...prevState,
          cigarette: [...(prevState.cigarette || []), id],
        }));
      } else {
        setForm((prevState) => ({
          ...prevState,
          // 2. Perbaikan: Tambahkan fallback [] agar tidak error .filter
          cigarette: (prevState.cigarette || []).filter((c) => c !== id),
        }));
      }
    } else {
      setForm((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pastikan di Slice Redux kamu menambahkan ID jika ingin menggunakan s.id di table
    dispatch(add({ ...form, id: Date.now() })); 
  };

  return (
    <div className="w-screen mt-10 flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="w-screen text-center border max-w-md p-4">
        <h6 className="text-2xl text-blue-500 font-bold mb-4">Form Survey Perokok</h6>
        <div className="text-left flex flex-col gap-4">
          {/* Input Name */}
          <div>
            <label className="block"><b>Name</b></label>
            <input onChange={onChangeForm} type="text" name="name" className="border w-full p-1" />
          </div>

          {/* Input Age */}
          <div>
            <label className="block"><b>Umur</b></label>
            <input onChange={onChangeForm} type="number" name="age" className="border w-full p-1" />
          </div>

          {/* Radio Gender */}
          <div className="flex gap-2">
            <label><b>Jenis Kelamin</b></label>
            <input onChange={onChangeForm} type="radio" name="gender" value="L" id="L" />
            <label htmlFor="L">Laki-laki</label>
            <input onChange={onChangeForm} type="radio" name="gender" value="P" id="P" />
            <label htmlFor="P">Perempuan</label>
          </div>

          {/* Select Smoker */}
          <div>
            <label className="block"><b>Apakah anda seorang perokok?</b></label>
            <select onChange={onChangeForm} name="smoker" className="border w-full p-1" defaultValue="">
              <option value="" disabled>Silahkan Pilih</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* Checkbox Brands */}
          <div className="flex flex-col gap-2">
            <label><b>Brand rokok yang digunakan?</b></label>
            {["Surya", "Djarum", "Sampoerna", "Gudang Garam", "Marlboro"].map((brand) => (
              <div key={brand}>
                <input onChange={onChangeForm} type="checkbox" name="cigarette" id={brand} />
                <label htmlFor={brand} className="ml-2">{brand}</label>
              </div>
            ))}
          </div>

          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Submit
          </button>
        </div>
      </form>

      {survey.survey && survey.survey.length > 0 ? (
        <table className="w-full max-w-2xl mt-8 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-amber-100">
              <th className="border p-2">Name</th>
              <th className="border p-2">Age</th>
              <th className="border p-2">Gender</th>
              <th className="border p-2">Perokok</th>
              <th className="border p-2">Brand</th>
              <th className="border p-2">Aksi</th>
            </tr>
          </thead>
          <tbody> 
            {/* 3. Perbaikan: Tbody membungkus map, bukan di dalam map */}
            {survey.survey.map((s) => (
              <tr key={s.id} className="text-center">
                <td className="border p-2">{s.name}</td>
                <td className="border p-2">{s.age}</td>
                <td className="border p-2">{s.gender}</td>
                <td className="border p-2">{s.smoker}</td>
                <td className="border p-2">{s.cigarette?.join(", ")}</td>
                <td className="border p-2">
                  <button
                    onClick={() => dispatch(del(s))}
                    className="bg-red-500 text-white py-1 px-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mt-4">Data not found!</p>
      )}
    </div>
  );
}

export default SurveyRedux;