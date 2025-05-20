



export const Card = ({ title, text, imagen }) => {
  return (
    
      
         <div className="card" style={{ width: "18rem" }}>
        <img src={imagen} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">Ver más</a>
        </div>
      
      </div>
     
    

  );
};

