import React, {useState} from "react";
import {IComments} from "../core/types";

function ContactUs() {
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [mobile, setMobile] = useState<number>(0);
    const [comments, setComments] = useState<string>("");
    const [ClearName, setClearName] = useState("");
    // state boolean

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setClearName("");
        console.log("Full name: " + fullName, "\n", "Mobile number: " + mobile, "\n", "Email: " + email, "\n", "Comments: " + comments )

        const contactUs: IComments = {
            FullName: fullName,
            Email: email,
            Mobile: mobile,
            Comments: comments,
        }

        // set boolean to true

        // store contactUs in state

        console.log(contactUs)
    }

    return (
        <div className="">
            <div className="text-black flex flex-col justify-center items-center min-h-screen w-full">
                <form onSubmit={handleSubmit} className="flex-col w-1/3 rounded-lg bg-gray-100">
                    <div>
                        <h1 className="text-5xl text-green-500 flex justify-center items-center font-bold mb-5">Contact Us</h1>
                    </div>
                    <div className="flex flex-col block text-sm font-medium text-gray-700">
                        <label htmlFor="username">Full name:</label>
                        <input type="text"
                               name="username"
                               className="block w-full mb-1 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                               onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col block text-sm font-medium text-gray-700">
                        <label htmlFor="mobile">Mobile number:</label>
                        <input type="text"
                               name="mobile"
                               className="block w-full mb-1 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                               onChange={(e) => setMobile(parseInt(e.target.value))}
                        />
                    </div>
                    <div className="flex flex-col block text-sm font-medium text-gray-700">
                        <label htmlFor="email">Email address:</label>
                        <input type="email"
                               name="email"
                               className="block w-full mb-1 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                               onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col mt-1 block text-sm font-medium text-gray-700">
                        <label form="text">Comments:</label>
                        <textarea id="comments"
                                  name="comments"
                                  className="block w-full mb-4 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-indigo-500 sm:text-sm h-36"
                                  onChange={(e) => setComments(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="m-1 flex justify-center items-center">
                        <button type="submit"
                                value="Submit"
                                className="flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                                >Submit</button>
                    </div>
                </form>
                {/*{booleanName && (*/}
                {/*    <h1>Full Name {stateName.fullname}</h1>*/}
                {/*)}*/}
            </div>
        </div>
    )
}

export default ContactUs;