// src/routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Members
import MemberList from "./pages/Members/MemberList";
import MemberFormPage from "./pages/Members/MemberFormPage";

// Games
import GameList from "./pages/Games/GameList";
import GameFormPage from "./pages/Games/GameFormPage";

// Placeholder for future modules
import RechargeList from "./pages/Recharges/RechargeList";
import RechargeFormPage from "./pages/Recharges/RechargeFormPage";
import TransactionList from "./pages/Transactions/TransactionList";
import TransactionFormPage from "./pages/Transactions/TransactionFormPage";
import DailyCollectionList from "./pages/DailyCollections/DailyCollectionList";
// import TransactionList from "./pages/Transactions/TransactionList";
// import TransactionFormPage from "./pages/Transactions/TransactionFormPage";
// import DailyCollectionList from "./pages/DailyCollections/DailyCollectionList";

const AppRoutes = () => (
  <Routes>
    {/* Default landing page */}
    <Route path="/" element={<MemberList />} />

    {/* Members */}
    <Route path="/members" element={<MemberList />} />
    <Route path="/members/add" element={<MemberFormPage />} />
    <Route path="/members/edit/:id" element={<MemberFormPage />} />

    {/* Games */}
    <Route path="/games" element={<GameList />} />
    <Route path="/games/add" element={<GameFormPage />} />
    <Route path="/games/edit/:id" element={<GameFormPage />} />

    {/* Recharges */}
    <Route path="/recharges" element={<RechargeList />} />
    <Route path="/recharges/add" element={<RechargeFormPage />} />

    {/* Transactions */}
    <Route path="/transactions" element={<TransactionList />} />
    <Route path="/transactions/add" element={<TransactionFormPage />} />

    {/* Daily Collections */}
    <Route path="/daily-collections" element={<DailyCollectionList />} />

    {/* Catch-all */}
    <Route path="*" element={<div>Page Not Found</div>} />
  </Routes>
);

export default AppRoutes;
