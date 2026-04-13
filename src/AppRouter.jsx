import Home from "./pages/Home";
import AppPokemon from "./pages/AppPokemon";
import App from "./pages/App";
import ProductApp from "./pages/ProductApp";
import {Route, Routes } from "react-router";
import Review from "./pages/Review";
import CharacterDetail from "./pages/CharacterDetail";
import CharacterList from "./pages/CharacterList";
import UseFetchList from "./pages/useFetchList";
import { EditProfile } from "./pages/Profile";
import { Layout } from "./pages/Layout";
import { Login } from "./pages/FormContext";
import SurveyRedux from "./pages/SurveyRedux";


function AppRouter() {
  return (

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="edit-profile" element={<EditProfile />}></Route>
          <Route path="/increase-decrease" element={<App />} />
          <Route path="/product" element={<ProductApp />} />
          <Route path="/pokemon" element={<AppPokemon />} />
          <Route path="/review" element={<Review />} />
          <Route path="/characters">
            <Route index element={<CharacterList />} />
            <Route path=":slug/:id" element={<CharacterDetail />} />
          </Route>
          <Route path="/usefetch" element={<UseFetchList />} />
          <Route path="/form-perokok" element={<SurveyRedux />} />
        </Route>
      </Routes>

  );
}

export default AppRouter;

// class AppRouter extends React.Component {
//   state = {
//     currentPage: "home",
//   };

//   changePage = (pageName) => {
//     this.setState({ currentPage: pageName });
//   };

//   render() {
//     return (
//       <div className="flex flex-col min-h-screen bg-gray-50">
//         <Header changePage={this.changePage} />

//         <main className="flex-grow">
//           {this.state.currentPage === "home" && <Home />}
//           {this.state.currentPage === "app" && <App />}
//           {this.state.currentPage === "product" && <ProductApp />}
//           {this.state.currentPage === "pokemon" && <AppPokemon />}
//           {this.state.currentPage === "review" && <ReviewPage />}
//         </main>

//         <Footer />
//       </div>
//     );
//   }
// }
