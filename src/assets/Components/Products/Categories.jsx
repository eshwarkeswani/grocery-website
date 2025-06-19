import './Categories.css';

function Categories(props) {
    return (
        <> 
            <section id="category">
                <div className="category-heading">
                    <h2>Category</h2>
                    <span>All</span>
                </div>

                <div className="category-container">
                    {props.ctg_box.map((category, index) => (
                        <a 
                            key={index} 
                            href="#products" 
                            className="category-box"
                            onClick={() => props.onCategorySelect(category.name)}
                        >
                            <img src={category.image} alt={category.name} />
                            <span>{category.name}</span>
                        </a>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Categories;