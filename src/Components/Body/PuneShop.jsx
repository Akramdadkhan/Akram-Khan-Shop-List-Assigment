import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';

const PuneShop = () => {
    const [shopData,setShopData]=useState([])
    const [name,setName]=useState()
    const [image,setImage]=useState()
    const [area,setArea]=useState()
    const [category,setCategory]=useState()
    const [open,setOpen]=useState()
    const [close,setClose]=useState()

    const finalResult=useSelector((state)=>state.PuneShopReducer.ShopData)
    useEffect(()=>{
        setShopData(finalResult)
    },[finalResult])

    const dispatch=useDispatch()
    const handleAddShop=()=>{
        dispatch({type:"ADD_SHOP", data:{name,area,image,category,open,close}})
    }
    return (
        
        <div style={{float:"right"}} >
            <h1 style={{ marginTop:"20px",textAlign:"center"}}>SHOPS IN PUNE</h1>
                {shopData.map((item) => {
        return (
          <Card style={{ width: "15.8rem", display: "inline-block",marginTop:"25px", }}>
            <Card.Header>{item.name}</Card.Header>
            <Card.Body>
              <img
                src={item.image}
                alt="ShopImage"
                width={"150px"}
                height="150px"
              />
            </Card.Body>
            <Card.Footer>{item.area}</Card.Footer>
            <Card.Footer>Open At{item.open}</Card.Footer>
            <Card.Footer>Close At{item.close}</Card.Footer>
          </Card>
        );
      })}

      <div style={{ margin:"30px", float:"right"}}>
          <input type="text" placeholder='Enter Shop Name' onChange={(e)=>setName(e.target.value)} />
          <input type="text" placeholder='Enter Shop Image Url' onChange={(e)=>setImage(e.target.value)} />
          <input type="text" placeholder='Enter Shop Area' onChange={(e)=>setArea(e.target.value)} />
          <input type="text" placeholder='Enter Shop Category' onChange={(e)=>setCategory(e.target.value)} />
          <input type="text" placeholder='Enter Shop Open Time' onChange={(e)=>setOpen(e.target.value)} />
          <input type="text" placeholder='Enter Shop Close Time' onChange={(e)=>setClose(e.target.value)} />
          <button onClick={handleAddShop}>ADD-SHOP</button>
      </div>
        </div>
    );
};

export default PuneShop;