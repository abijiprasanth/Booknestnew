
import AdminBookCard from './AdminBookCard';
import React, { useState ,useEffect} from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios';

function AdminBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:8000/allbooks")
        .then(response => {
          setBooks(response.data);
        })
        .catch(error => {
          console.error("Error fetching the books:", error);
        });
    }, []);
      const handleRemove = (orderId) => {
        setOrders(books.filter(item => item._id !== orderId));
      };


  return (
    <>
    <AdminNavbar/>
    <div className='m-20'>
     {books.map((item) => (
            <AdminBookCard key={item._id} item={item} onRemove={handleRemove} />
          ))}
     </div>
    </>
  )
}

export default AdminBooks
