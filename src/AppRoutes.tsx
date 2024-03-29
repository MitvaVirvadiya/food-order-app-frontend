import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import RestaurantFormPage from "./pages/RestaurantFormPage";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";
import OrderStatusPage from "./pages/OrderStatusPage";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route
        path="/restaurant/:restaurantId"
        element={
          <Layout>
            <DetailsPage />
          </Layout>
        }
      />
      <Route
        path="/search/:city"
        element={
          <Layout>
            <SearchPage />
          </Layout>
        }
      />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/order-status"
          element={
            <Layout>
              <OrderStatusPage />
            </Layout>
          }
        />
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        />
        <Route
          path="/manage-restaurant"
          element={
            <Layout>
              <RestaurantFormPage />
            </Layout>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
