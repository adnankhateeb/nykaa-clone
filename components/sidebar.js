function sidebar() {
    return ` <div class="accordion" id="accordionExample">
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Sort By
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <ul id="sortBy">
                    <li>Popularity</li>
                    <li>Name</li>

                    <li>Top Rated</li>
                    <li>Price: Low To High</li>
                    <li>Price: High To Low</li>



                </ul>
            </div>
        </div>
    </div>
`
}

export default sidebar;