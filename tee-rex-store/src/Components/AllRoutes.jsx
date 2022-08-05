import React from 'react'
import { Route, Routes } from 'react-router'
import { HomePage } from '../Pages/HomePage'
import {CartPage} from "../Pages/CartPage"
import {Navbar} from "./Navbar"
export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<h3>Page Not Found</h3>}/>
      </Routes>
    </>
  )
}
