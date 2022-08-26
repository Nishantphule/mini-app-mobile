import './App.css';

const mobiles = [
  {
    model: "OnePlus 9 5G",
    img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
    company: "Oneplus"
  },
  {
    model: "Iphone 13 mini",
    img:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
    company: "Apple"
  },
  {
    model: "Samsung s21 ultra",
    img: "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
    company: "Samsung"
  },
  {
    model: "Xiomi mi 11",
    img: "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
    company: "Xiomi"
  }
];



function App() {
  return (
    <div className="App">
      <Phones />
    </div>
  );
}

function Phones(){
  return (
    <div className='phone-list-container'>
      {mobiles.map((data) => (<Phone
        e={data}
         />))}
    </div>
  )
}

function Phone({e}){
  // const mobile = {
  //   model: "OnePlus 9 5G",
  //   img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
  //   company: "Oneplus"
  // };
  
  return (
      <div className='phone-container'>
          {/* {} => template syntax */}
          <img className='phone-picture' src = {e.img} alt={e.model}/>
          <h2 className='phone-name'>{e.model}</h2>  
          <p className='phone-company'>{e.company}</p>
        </div>
  )
}

export default App;
