const apiKey = 'kZKIUJOLniiX0VNwLzg5-tyKPtbmX22vzp11pCg3KZZHCMp56lxMuw5HunMll_4o5zauA7EOrE4P92slZHI5RpdxQXm4TPxs1NAjzqyiMqkNEitxMPHMb1pIWZGpXnYx';
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers: {Authorization: `Bearer ${apiKey}`}}).then(response => {
            return response.json()
        }).then(jsonResponse => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.adress1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }
        });
    }
}
export default Yelp;