import React, {Component} from 'react'
import { IoSettingsOutline, IoPrintOutline } from "react-icons/io5";
import { ImSpinner11 } from "react-icons/im";
import { IoMdStopwatch } from "react-icons/io";

import { FaFontAwesome, FaFonticons, FaLocationArrow } from "react-icons/fa"
import { CiSearch , CiImport} from "react-icons/ci";
import Navbar from '../Navbar'
import './index.css'
const items = [
    {id:1, name: "dashboard", font:"GoStopwatch"},
    {id:2, name: "inventory", font:"MdOutlineInventory"},
    {id:3, name: "orders", font:"VscListUnordered"},
    {id:4, name: "shipping" , font:"MdEmojiTransportation"},
    {id:5, name: "channels", font:"IoGitNetworkOutline"}
]

const naviItem = [
    {id:1, name: "pending"},
    {id:2, name: "accept"},
    {id:3, name: "AWB created"},
    {id:4, name: "Ready ship"},
    {id:5, name: "Completed"},
    {id:6, name: "Cancle"}
]

const dummyItems = [
  {id:1,chnnn: "https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/moneybag_dollar.png", cusName: "dashboard",orderNum: "#TKN2088181818",orderDate: 12/12/2023, city: "Mumbai", orderVal: "0.00", status: "pending", operation: "action"}, 
  {id:2, chnnn: "https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/moneybag_dollar.png", cusName: "dashboard",orderNum: "#TKN2088181818",orderDate: 12/12/2023, city: "Mumbai", orderVal: "0.00", status: "pending", operation: "action"} ,
  {id:3,chnnn: "https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/moneybag_dollar.png", cusName: "dashboard",orderNum: "#TKN2088181818",orderDate: 12/12/2023, city: "Mumbai", orderVal: "0.00", status: "pending", operation: "action"},
  {id:4, chnnn: "https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/moneybag_dollar.png", cusName: "dashboard",orderNum: "#TKN2088181818",orderDate: 12/12/2023, city: "Mumbai", orderVal: "0.00", status: "pending", operation: "action"},
  {id:5,chnnn: "https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/moneybag_dollar.png", cusName: "dashboard",orderNum: "#TKN2088181818",orderDate: 12/12/2023, city: "Mumbai", orderVal: "0.00", status: "pending", operation: "action"}
]

class SideBar extends Component{
  constructor(){
    super()
    this.state={
      data: dummyItems,
      currentPage: 1,
      itemPerPage: 3
    }
  }
  
  onPrev=()=>{
    const {currentPage} = this.state
    console.log("hello P")
    this.setState(prevState=>({currentPage: prevState.currentPage-1}))

  }

  onNxt=()=>{
    const {currentPage} = this.state
    console.log("hello N")
    this.setState(prevState=>({currentPage: prevState.currentPage+1}))
  }
  
  render(){
    const {data, currentPage, itemPerPage} = this.state
    const lastIndex = currentPage * itemPerPage
    const firstIndex = lastIndex - itemPerPage
    const rows = data.slice(firstIndex, lastIndex)
    return(
      <>
        <div className='con'>
          <Navbar/>
        <div className='mainCon'>
          <ul className='ulSide'>
            {items.map(e=>(<li className='list'><FaFontAwesome icon={e.font}/>{e.name}</li>))}
          </ul>
          <div className='detailsCon'>
            <div className='navigationBarCon'>
            <div className="setting">
            <button type="button" className="Btn">Orders X</button>
            <IoSettingsOutline />
          </div>
              <div className='naviItem'>
                {naviItem.map(ea=>(
                    <ul className='ulNavi'>
                        <li className='liNavi'>{ea.name}</li>
                    </ul>
                ))}
                
              </div>
              </div>
              <div className="btnCon">
              <button className='Btn'><CiImport />import Order</button>
              <button className='Btn'><FaLocationArrow/>accept</button>
              <button className='Btn'><IoPrintOutline/>Print</button>
              <button className='Btn-ref'><ImSpinner11 className='ref-icon'/>Refresh</button>
              </div>
          <table>
                    <tr>
                        <th><input type='checkBox' className='checkBox'/></th>
                        <th>channel</th>
                        <th>order No.</th>
                        <th>order Date </th>
                        <th> city</th>
                        <th>Customer Name</th>
                        <th>Order Value</th>
                        <th>Status</th>
                        <th>Operation</th>
                    </tr>
                    
                        {rows.map(eacha=>(
                          <tr>
                          <td>+  <input type='checkBox' className='checkBox'/></td>
                          <td>{<img src={eacha.chnnn} className='img'/>}</td>
                          <td>{eacha.orderNum}<CiSearch /></td>
                          <td>{eacha.orderDate}<CiSearch /></td>
                          <td>{eacha.city}</td>
                          <td>{eacha.cusName}<CiSearch /></td>
                          <td>{eacha.orderVal}</td>
                          <td>{eacha.orderDate}</td>
                          <td>{eacha.status}</td>
                          <td><button type="button" className='Btn'>{eacha.operation}</button></td>
                          </tr>
                        ))}
                        
                        <button onClick={this.onPrev} className='Btn'>Prev</button>
                        <button onClick={this.onPrev} className='Btn'>{currentPage}</button>
                        <button onClick={this.onNxt} className='Btn'>Nxt</button>
                        
                </table>
            </div>
          </div>
        
        </div>
      </>
    )
 }
}


export default SideBar