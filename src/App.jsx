import React from "react";
// REMOVED: BrowserRouter (Router) import
import { Routes, Route, useParams } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

// Component to determine which category to render based on URL
const CategoryPageWrapper = () => {
  // useParams gets the value of :categoryName from the URL
  const { categoryName } = useParams();

  // categoryName is typically lowercase (e.g., 'company', 'strengths')
  // Use 'company' as the default for the base path '/'
  const category = categoryName || "company";

  return <CategoryPage categoryName={category} />;
};

export default function App() {
  return (
    // FIX: Removed the <Router> wrapper. We now rely on the parent environment
    // to provide the routing context (which fixes the error).
    <>
      {/* Navbar is outside Routes to be visible on all pages */}
      <Navbar />

      <Routes>
        {/* 1. Base Home Page */}
        <Route path="/" element={<Home />} />

        {/* 2. Dynamic Route Handler for all Category Pages (Company, Strengths, Projects) */}

        {/* This route matches the base URL and defaults to 'company' content */}
        <Route path="/" element={<CategoryPageWrapper />} />

        {/* This route matches /company/* or /strengths/* or /projects/* */}
        {/* The /* wildcard ensures sub-paths (slugs) are also matched */}
        <Route path="/:categoryName/*" element={<CategoryPageWrapper />} />
      </Routes>
    </>
  );
}
