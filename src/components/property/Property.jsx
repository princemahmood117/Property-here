

const Property = ({property}) => {

    const {image,estate_title,description,price,area,location,status} = property;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-full p-2"
            src={image}
            alt="Album" />
        </figure>
        <div className="card-body">
            
        <h1 className="text-3xl font-bold">{estate_title}</h1>
        <p className="py-6">{description}</p>
        <p className="py-2"><strong>Price:</strong> {price}</p>
        <p className="py-2"><strong>Status:</strong> {status}</p>
        <p className="py-2"><strong>Area:</strong> {area}</p>
        <p className="py-2"><strong>Location:</strong> {location}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View details</button>
          </div>
        </div>
      </div>
    );
};

export default Property;