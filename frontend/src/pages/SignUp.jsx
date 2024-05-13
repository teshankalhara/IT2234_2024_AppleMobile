import React, { useState } from 'react'
import loginIcons from '../assets/signin.gif'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import imageTobase64 from '../helpers/imageTobase64'
import SummaryApi from '../api'
import { toast } from 'react-toastify';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
        confirmpassword: "",
        profilePic: ""
    })

    const navigate = useNavigate()

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleUploadPic = async (e) => {
        const file = e.target.files[0]

        const imagePic = await imageTobase64(file)

        // console.log("imagePic ", imagePic)

        setData((prev) => {
            return {
                ...prev,
                profilePic: imagePic
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (data.password === data.confirmpassword) {
            //console.log('backendurl:',SummaryApi.signUP.url);
            const dataResponse = await fetch(SummaryApi.signUP.url,{
                method : SummaryApi.signUP.method,
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify(data)
              })
        
              const dataApi = await dataResponse.json()
    
              if(dataApi.success){
                toast.success(dataApi.message) //get msg for user create ok
                navigate("/login")
              }
    
              if(dataApi.error){
                toast.error(dataApi.message) //get msg for user create not ok
              }
        
          }else{
            toast.error("Please check password and confirm password") //get msg for user check password
          }
    };
    
    console.log("data-log", { data })
    return (
        <section id='signup'>
            <div className='mx-auto container p-4'>
                <div className='bg-white p-5 w-full max-w-sm mx-auto roun'>
                    <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                        <div>
                            <img src={data.profilePic || loginIcons} alt='login icons' />
                        </div>
                        <form>
                            <label>
                                <div className='text-xs bg-opacity-90 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                                    Upload Photo
                                </div>
                                <input type='file' className='hidden' onChange={handleUploadPic} />
                            </label>
                        </form>
                    </div>

                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Name : </label>
                            <div className='bg-slate-200 p-2'>
                                <input
                                    type='text'
                                    placeholder='Enter Your Name'
                                    name='name' value={data.name}
                                    required
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent'
                                />
                            </div>
                        </div>
                        <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-slate-200 p-2'>
                                <input type='email'
                                    placeholder='Enter Email'
                                    name='email' value={data.email}
                                    required
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent'
                                />
                            </div>
                        </div>
                        <div>
                            <label>Password : </label>
                            <div className='bg-slate-200 p-2 flex'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name='password' value={data.password}
                                    required
                                    onChange={handleOnChange} placeholder='Enter Password'
                                    className='w-full h-full outline-none bg-transparent'
                                />

                                <div className='cursor-pointer text-xl' onClick={() => setShowPassword((prev) => !prev)}>
                                    <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash />
                                            )
                                                : (
                                                    <FaEye />
                                                )
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label>Confirm Password : </label>
                            <div className='bg-slate-200 p-2 flex'>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name='confirmpassword' value={data.confirmpassword}
                                    required
                                    onChange={handleOnChange} placeholder='Confirm Password'
                                    className='w-full h-full outline-none bg-transparent'
                                />
                                <div className='cursor-pointer text-xl' onClick={() => setShowConfirmPassword((prev) => !prev)}>
                                    <span>
                                        {
                                            showConfirmPassword ? (
                                                <FaEyeSlash />
                                            )
                                                : (
                                                    <FaEye />
                                                )
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>

                        <button className='bg-red-600 text-white font-bold text-xl px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 hover:bg-red-800'>Sign up</button>
                    </form>

                    <p className='my-2'>Already have account ? <Link to={'/login'} className='text-red-600 hover:text-red-700 hover:underline'>Login</Link></p>
                </div>
            </div>
        </section>
    )
}

export default SignUp