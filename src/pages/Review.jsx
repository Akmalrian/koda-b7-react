import React from "react";

class Review extends React.Component {
  state = {
    reviews: [],
    inputName: "",
    inputComment: "",
  };

  // Ambil data dari Local Storage saat komponen dimuat
  componentDidMount() {
    const savedReviews = localStorage.getItem("pokeReviews");
    if (savedReviews) {
      this.setState({ reviews: JSON.parse(savedReviews) });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { inputName, inputComment, reviews } = this.state;

    if (!inputName || !inputComment) return alert("Isi semua bidang!");

    const newReview = {
      id: Date.now(),
      name: inputName,
      comment: inputComment,
      date: new Date().toLocaleDateString(),
    };

    const updatedReviews = [newReview, ...reviews];

    // Simpan ke State dan Local Storage
    this.setState({
      reviews: updatedReviews,
      inputName: "",
      inputComment: "",
    });
    localStorage.setItem("pokeReviews", JSON.stringify(updatedReviews));
  };

  render() {
    return (
      <div className="container mx-auto px-6">
        <p class="text-red-500 p-6 text-4xl font-bold">Minitask 4</p>
        <h2 className="text-3xl font-bold mb-8 text-center">Berikan Review</h2>

        {/* Form Review */}
        <form onSubmit={this.handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mb-12">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nama Anda</label>
            <input
              type="text"
              className="w-full border p-2 rounded focus:ring-2 focus:ring-red-400 outline-none"
              value={this.state.inputName}
              onChange={(e) => this.setState({ inputName: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Komentar/Review</label>
            <textarea
              className="w-full border p-2 rounded h-24 focus:ring-2 focus:ring-red-400 outline-none"
              value={this.state.inputComment}
              onChange={(e) => this.setState({ inputComment: e.target.value })}
            ></textarea>
          </div>
          <button className="w-full bg-red-500 text-white py-2 rounded font-bold hover:bg-red-600">
            Kirim Review
          </button>
        </form>

        <hr className="mb-10" />

        {/* List Review dalam Grid */}
        <h3 className="text-2xl font-semibold mb-6">Semua Review ({this.state.reviews.length})</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {this.state.reviews.map((item) => (
            <article key={item.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold mr-3">
                  {item.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{item.name}</h4>
                  <p className="text-xs text-gray-400">{item.date}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{item.comment}"</p>
            </article>
          ))}
          {this.state.reviews.length === 0 && (
            <p className="col-span-full text-center text-gray-400 italic">Belum ada review.</p>
          )}
        </div>
      </div>
    );
  }
}

export default Review;