import React from "react";

class Kelas extends React.Component {
  state = {
    counter: 0
  };

  incCounter = () => {
    this.setState((state) => ({
      counter: Math.min(state.counter + 1, 10)
    }));
  };

  decCounter = () => {
    this.setState((state) => ({
      counter: Math.max(state.counter - 1, 0)
    }));
  };

  render() {
    const { counter } = this.state;
    return (
        <section className="flex flex-col items-center justify-center p-10 bg-green-300 rounded-xl shadow-lg max-w-sm mx-auto mt-20">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
          Komponen Kelas
        </h2>
        
        <div className="my-6">
          <span className="text-6xl font-bold text-blue-600 transition-all duration-300">
            {counter}
          </span>
        </div>

        <div className="flex gap-4">
          <button
            onClick={this.decCounter}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 active:scale-95 text-white font-medium rounded-lg transition-all shadow-md"
          >
            Decrease
          </button>
          
          <button
            onClick={this.incCounter}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 active:scale-95 text-white font-medium rounded-lg transition-all shadow-md"
          >
            Increase
          </button>
        </div>

        <div className="mt-10 h-6">
          {counter === 10 && <p className="text-xs text-orange-600 font-bold animate-bounce">Angka Maksimal!</p>}
          {counter === 0 && <p className="text-xs text-gray-400">Angka Minimal</p>}
        </div>
        </section>
      
    );
  }
}

export default Kelas;