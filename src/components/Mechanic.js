const Mechanic = ({ mechanic }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={mechanic.image} alt={mechanic.title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{mechanic.name}</h2>
        <p>{mechanic.speciality?.substring(0, 100)}...</p>
        <div className="card-actions">
          <button className="btn btn-secondary">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Mechanic;
