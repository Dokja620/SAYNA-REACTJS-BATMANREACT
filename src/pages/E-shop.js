import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EShop = () => {
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [name]: parseFloat(value),
    }));
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="bg-eshop intro" style={{ height: '100vh' }}>
      <section className='titile'>
        <h1>
          RÉCUPEREZ LE FLOW DE BATMAN AVEC NOTRE E-SHOP
        </h1>
      </section>
      <section id="shop">
        <div className="filter">
          <h2>Filtres</h2>
          <div className='pricerange'>
            <h3>Prix</h3>
            <input
              type="range"
              name="minPrice"
              value={priceRange.min}
              min={0}
              max={200}
              step={1}
              onChange={handlePriceRangeChange}
            />
            {/*<input
              type="range"
              name="maxPrice"
              value={priceRange.max}
              min={0}
              max={200}
              step={1}
              onChange={handlePriceRangeChange}
  />*/}
            <div className="price">
              <span><p>0$</p></span>
              <span><p>100$</p></span>
              <span><p>200$</p></span>
            </div>
            <p>
                
            </p>
          </div>
          <div className='types'>
            <div className='cadre'>
              <h3>Catégorie</h3>
                  {Array.from({ length: 9 }, (_, index) => (
                    <div key={index}>
                      <label>
                        <input
                          type="checkbox"
                          onChange={() => handleCategoryChange(`Category ${index + 1}`)}
                          checked={selectedCategories.includes(`Category ${index + 1}`)}
                        />
                        Category {index + 1}
                      </label>
                    </div>
                  ))}
            </div>
            <div className='cadre'>
              <h3>Couleur</h3>
                  {Array.from({ length: 3 }, (_, index) => (
                    <div key={index}>
                      <label>
                        <input
                          type="checkbox"
                          onChange={() => handleCategoryChange(`Category ${index + 1}`)}
                          checked={selectedCategories.includes(`Category ${index + 1}`)}
                        />
                        Couleur {index + 1}
                      </label>
                    </div>
                  ))}
            </div>
            <div className='cadre'>
              <h3>Couleur</h3>
                  {Array.from({ length: 5 }, (_, index) => (
                    <div key={index}>
                      <label>
                        <input
                          type="checkbox"
                          onChange={() => handleCategoryChange(`Category ${index + 1}`)}
                          checked={selectedCategories.includes(`Category ${index + 1}`)}
                        />
                        Univers {index + 1}
                      </label>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      {/* Third section with a link to the Cart page */}
        <div className='stuff'>
          <div className="goodies">
            <div className="sale">
              <h2 className='buy'>SALE</h2>
              <div className="info">
                <p>Buy This stuff for god's sake</p>
                <div className="money">
                  <p>
                    <span className='before'>59$</span>
                    <span>32$</span>
                  </p>
                </div>
              </div>
            </div>
            <Link to="/cart">
              <div className='button'>
                AJOUTER AU PANIER
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EShop;
