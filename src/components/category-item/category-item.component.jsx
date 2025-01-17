import "./category-item.style.scss";

const CategoryItem = ({ category }) => {
  return (
    <div key={category.id} className="category-container">
      {/* <img /> */}
      <div
        className="background-image"
        style={{ background: `url(${category.imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
