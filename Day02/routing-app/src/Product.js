import React,{ useState } from "react";

export class ProdctDetails extends React.Component{

    constructor(props){
        super(props);
        this.state = {isInvoice:false,totalAmount:0,cartList:[],productList:[
            {id:Math.floor(Math.random() * 100),quantity:0,name:"Laptop",price:100.00,isItemAdded:true},
            {id:Math.floor(Math.random() * 100),quantity:0,name:"Tv",price:500.00,isItemAdded:true},
            {id:Math.floor(Math.random() * 100),quantity:0,name:"Washing Machine",price:600.00,isItemAdded:true},
            {id:Math.floor(Math.random() * 100),quantity:0,name:"Mobile",price:100.00,isItemAdded:true},
            {id:Math.floor(Math.random() * 100),quantity:0,name:"Fridge",price:200.00,isItemAdded:true}
    ]} 
    }
    
    addIntoTheCart(item){
        const cartList = this.state.cartList;
        item.isItemAdded=false;
        cartList.push(item);
        this.setState({cartList:cartList});
    }

    buyNow(){
     let cartlist = this.state.cartList;
     let totalAmount = 0;
     cartlist.map((item,index)=>{
        // if quantity is more than 10 then apply 10% discount. 
        if(item.quantity>10){
           let amount= item.price*item.quantity;
            amount = amount - (amount*10/100);
            totalAmount = totalAmount+amount;
        }else {
            let amount = item.price*item.quantity; 
            totalAmount =totalAmount+amount 


        }
     })
     this.setState({totalAmount:totalAmount})
     this.setState({isInvoice:true})
    
    }
    addQauntity(newitem){
     let updatedList =this.state.productList;
     updatedList.map((item,index)=>{
         if(item.id==newitem.id){
             item.quantity = ++(item.quantity);
         }
     });
     this.setState({productList:updatedList});
    }
    removeQauntity(newitem){
        
        let updatedList =this.state.productList;
        updatedList.map((item,index)=>{
            if(item.id==newitem.id){
                item.quantity = (item.quantity==0?item.quantity:--item.quantity);
            }
        });
        this.setState({productList:updatedList})
    }
    removeItemFromCart(removeItem){
        let removeItemFromCart = this.state.cartList;
        if(removeItemFromCart.length==0){

        }
        removeItemFromCart = removeItemFromCart.filter(item=>item.id!=removeItem.id);
        let updatedProductList = this.state.productList;
        updatedProductList.map((item,index)=>{
            if(item.id==removeItem.id){
                item.isItemAdded=true;
                item.quantity =0;
            }
        })
        this.setState({cartList:removeItemFromCart})
        this.setState({productList:updatedProductList})
    }

render(){

    let purshaseItems = this.state.cartList.map((item,index)=>{
        return(
            <>
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price} * {item.quantity}</td>
            </tr>
            </>
        );
    });
    let result = this.state.productList.map((item,index)=>{
        return(
            <tr key={index}>
             <td>{item.id}</td>
             <td>{item.name}</td>
             <td>{item.price}</td>
             <td>{item.quantity}&nbsp;&nbsp;<span><button onClick={()=>this.addQauntity(item)}>Add</button></span><span><button onClick={()=>this.removeQauntity(item)}>Remove</button></span></td>
             <td>{item.isItemAdded && <button onClick={()=>this.addIntoTheCart(item)}>Add To Cart</button>}{!item.isItemAdded && <button style={{color:"green"}}>Added</button>}{!item.isItemAdded && <button onClick={()=>this.removeItemFromCart(item)}>Remove Item</button>}</td>
            </tr>
        );
    })
    return(
         <div>
         <div>
     <table border={{border:3}}>
         <tr>
             <th>Product Id</th>
             <th>Product Name</th>
             <th>Product Amount</th>
             <th>Product Quantity</th>
             <th>Action</th>
        </tr>
         {result}
     </table>
     <button onClick={()=>this.buyNow()}>Buy Now</button>
     </div>
     {this.state.isInvoice && <div >
         <h4>Invoice List:</h4>
         <table>
             
         </table>
         {purshaseItems}
         <tr>-------------------------------------</tr>
            <tr>
                <td>Grand Total:</td>
                <td>{this.state.totalAmount}</td>
            </tr>
     </div>}
     </div>

    );
}

}

export default ProdctDetails;