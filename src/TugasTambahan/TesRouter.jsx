// import React from "react";
import { Route, Routes } from "react-router";

function TesRouter() {
  return (
    <Routes>
      <Route path="/app/v1">
        <Route index element={<Home />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />s
          <Route path="/new" element={<Register />} />
          <Route path="/forgot" element={<ForgotPwd />} />
        </Route>
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<Profile />} />
          <Route path="/order" element={<HistoryOrder />} />
        </Route>
        <Route path="/products" element={<ProductLayout />}>
          <Route index element={<Products />} />
          <Route path="/:id">
            <Route index element={<DetailProduct />} />
            <Route path="/oder" element={<OrderProductId />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default TesRouter;
