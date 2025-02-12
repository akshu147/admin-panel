import { StrictMode } from 'react'
import React from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Deshboard from './assets/pages/Deshboard'
import Color from './assets/pages/Color'
import Layout from './RouterLayout/Layout'
import ContextProvider from './context/Context'
import Profile from './assets/pages/Profile'
import Addsize from './assets/pages/Addsize'
import Viewsize from './assets/pages/Viewsize'
import Addcategory from './assets/pages/Addcategory'
import Viewcategory from './assets/pages/Viewcategory'
import Addproductcat from './assets/pages/Addproductcat'
import Viewproductcat from './assets/pages/Viewproductcat'
import Productitems from './assets/pages/Productitems'
import Productdetail from './assets/pages/Productdetail'
import Storydetail from './assets/pages/Storydetail'
import Storyview from './assets/pages/Storyview'
import Orders from './assets/pages/Orders'
import Sliderdetail from './assets/pages/Sliderdetail'
import Sliderview from './assets/pages/Sliderview'
import TermaConditons from './assets/pages/TermaConditons'
import Updatesize from './assets/pages/Updatesize'
import Updatecategory from './assets/pages/Updatecategory'
const root = createRoot(document.getElementById('root'))

root.render(
  <>
    <StrictMode>
      <ContextProvider>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Deshboard />} />
              <Route path='color' element={<Color />} />
              <Route path='profile' element={<Profile />} />
              <Route path='size/add-size' element={<Addsize />} />
              <Route path='size/view-size' element={<Viewsize />} />
              <Route path='parent/add-category' element={<Addcategory />} />
              <Route path='parent/view-category' element={<Viewcategory />} />
              <Route path='add-product-cat' element={<Addproductcat />} />
              <Route path='view-product-cat' element={<Viewproductcat />} />
              <Route path='product-items' element={<Productitems />} />
              <Route path='size/update-size/:_id' element={<Updatesize/>}/>
              <Route
                path='product/product-detail'
                element={<Productdetail />}
              />
              <Route path='story/story-detail' element={<Storydetail />} />
              <Route path='story/story-view' element={<Storyview />} />
              <Route path='slider/slider-view' element={<Sliderview />} />
              <Route path="slider/slider-detail" element={<Sliderdetail/>}/>
              <Route path='category/update-category/:id' element={<Updatecategory/>}/>
            </Route>
            <Route path='/orders' element={<Orders />} />
            <Route path='terms$conditions' element={<TermaConditons/>}/>
          

          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </StrictMode>
  </>
)
