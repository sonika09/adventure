import React,{useState,useEffect} from 'react'
import '../../App.css'
function Services() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) =>response.json())
            .then((data) =>{
                setPost(data)

            })
              
    }, []);
    return (
        <>
        
    <h3 className='services'>SERVICES
    <table class="table" >  
    <thead class="thead-dark">  
                    <tr>   
                        <th scope="col">name</th>  
                        <th scope="col">username</th>  
                        <th scope="col">email</th>  
                        <th scope="col">website</th>  
                        
                    </tr>  
                </thead> 
                <tbody>  
                    {post.map(item => {  
                        return <tr key={item.Id}>  
                            <td>{item.name}</td>  
                            <td>{item.username}</td>  
                            <td>{item.email}</td>   
                            <td>{item.website}</td>  
                             
                            
                        </tr>  
                    })}  
                </tbody>  
            </table> </h3>

    </>
    )
}

export default Services
