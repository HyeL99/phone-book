import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ContactItem from './ContactItem'
import SearchBox from './SearchBox'

const ContactList = () => {
    const {contactList, searchName} = useSelector((state)=>state);
    //let contactList = useSelector(state=>state.contactList)
    //let searchName = useSelector(state=>state.searchName)
    let [searchList, setSearchList] = useState([]);
    console.log("contactList", contactList)
    console.log("searchName", searchName)
    
    useEffect(()=>{
      if(searchName != ""){
        let list = contactList.filter((item)=>item.name.includes(searchName))
         setSearchList(list)
         console.log("searchList",searchList)
      } else {
         setSearchList(contactList)
         console.log("searchList",searchList)
      }
    },[searchName])
  return (
    <div>
        <SearchBox />
        {searchList?.map((item)=>(<ContactItem item={item}/>))}
      
    </div>
  )
}

export default ContactList