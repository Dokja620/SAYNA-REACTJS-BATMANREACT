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
      <h1>ESHOP</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        praesentium assumenda a sapiente nisi explicabo ducimus exercitationem
        perspiciatis minus maxime ad adipisci nobis hic, ipsa voluptate eveniet!
        Consequatur, quam nulla eaque facilis mollitia porro. Rem tempore unde
        optio perspiciatis expedita cum soluta harum adipisci totam doloremque,
        laboriosam nemo nostrum ducimus.
      </p>
      <section className="filter">
        <h2>Filter</h2>
        <div>
          <h3>Price</h3>
          <input
            type="range"
            name="minPrice"
            value={priceRange.min}
            min={0}
            max={200}
            step={1}
            onChange={handlePriceRangeChange}
          />
          <input
            type="range"
            name="maxPrice"
            value={priceRange.max}
            min={0}
            max={200}
            step={1}
            onChange={handlePriceRangeChange}
          />
          <p>
            Price Range: ${priceRange.min} - ${priceRange.max}
          </p>
        </div>
        <div>
          <h3>Categories</h3>
          {Array.from({ length: 10 }, (_, index) => (
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
      </section>
      {/* Third section with a link to the Cart page */}
      <section>
        <h2>Your Cart</h2>
        <div>
          <Link to="/cart">Go to Cart</Link>
        </div>
      </section>
    </div>
  );
};

export default EShop;
