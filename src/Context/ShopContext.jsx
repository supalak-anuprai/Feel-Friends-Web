import React, {createContext, useState} from 'react'
import axios from 'axios'
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}

    for (let index = 0; index < all_product.length + 1; index++) {

        cart[index] = 0;

    }
    return cart;

}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart())
    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))

    }

    const removeFromCart = (itemId) => {

        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))


    }

    const getTotalCartAmount = () => {

        let totalAmount = 0;

        for(const item in cartItems){
            
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((products) => products.id === Number(item))
                totalAmount += (itemInfo.new_price * cartItems[item])
            }

        }
        return totalAmount

    }

    const getTotalCartItems = () => {
        let totalItem = 0

        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItem += cartItems[item]
            }

        }
        return totalItem

    }

    const scrollToTop = () => {
        const scrollToTopAnimation = () => {
          const currentPosition = window.scrollY;
    
          if (currentPosition > 0) {
            window.scrollTo(0, currentPosition - 150);
            requestAnimationFrame(scrollToTopAnimation);

          }

        }
        requestAnimationFrame(scrollToTopAnimation);

    }

    //Register and Login
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: ''
    });

    // ฟังก์ชันเมื่อมีการเปลี่ยนแปลงในฟอร์ม
    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({

            ...prev,
            [name]: type === "checkbox" ? checked : value

        }));
    };

     // ฟังก์ชันเมื่อ Submit ฟอร์ม
    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log(e.target.dataset.type)

        try {
            
            if(e.target.dataset.type === 'register'){

                if(formData.checkbox && formData.fname && formData.lname && formData.email && formData.password){

                    const response = await axios.post(`http://localhost:5174/register`, formData, {
                        withCredentials: true,
                    })
                    console.log(response.data)
                    if(response.data.status == 'OK'){
                        
                        alert('Sig Up Success 😍')
    
                        window.location = '/login'
    
                    }

                    else if(response.data.message.code == "ER_DUP_ENTRY"){
                        alert('Email นี้มีผู้ใช้งานแล้ว กรุณาใช้ Email ใหม่ครับ')
                    }
    
                }

                else if(!formData.checkbox){

                    throw new Error('no checkbox reg')

                }

                else if(!formData.fname|| !formData.lname){

                    throw new Error('no name reg')

                }

                else if(!formData.email || !formData.password){

                    throw new Error('no email,password reg')

                }

            }

            else if(e.target.dataset.type === 'login'){

                if(formData.fname && formData.email && formData.password){

                    const response = await axios.post(`http://localhost:5174/login`,  formData)

                    if(response.data.status == 'OK'){

                        alert('Login Success 😍')
                        // window.location = '/'
    
                    }

                    else if(response.data.message == 'no user'){
                        alert('กรุณาตรวจสอบ ชื่อจริงและ Email ด้วยครับ')
                    }

                    else if(response.data.status == 'ERROR'){
                        alert('กรุณาตรวจสอบ Password ด้วยครับ')
                    }
    
                }

                else if(!formData.fname){

                    throw new Error('no name log')

                }

                else if(!formData.email || !formData.password){

                    throw new Error('no email,password log')

                }

            }

        } 

        catch (err) {

            console.log(err)

            if(err.message === 'no checkbox reg'){
                alert('กรุณาติ๊ก Checkbox ด้วยครับ')
            }

            else if(err.message === 'no name reg'){
                alert('กรุณากรอก ชื่อจริงและนาสกุล ให้ครบถ้วนด้วยครับ')
            }

            else if(err.message === 'no email,password reg'){
                alert('กรุณากรอก email และ Password ให้ครบถ้วนด้วยครับ')
            }

            else if(err.message === 'no name log'){
                alert('กรุณากรอก ชื่อจริง ให้ถูกต้องด้วยครับ')
            }

            else if(err.message === 'no email,password log'){
                alert('กรุณากรอก email และ Password ให้ถูกต้องด้วยครับ ')
            }

            else{
                alert('เกิดข้อผิดพลาดบางอย่างกับ Server')
            }

        }

    }

    
    const contextValue = {formData, handleChange, handleSubmit, scrollToTop, getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider