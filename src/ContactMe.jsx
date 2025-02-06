const ContactMe = () => {
    return (
        <div className="bg-slate-200 text-slate-600 w-full flex justify-center py-12">
            <div className="w-full max-w-4xl flex flex-col items-center">
                <div className="text-4xl text-black font-bold">Connect with Harrison</div>
                <div className="flex flex-col w-96">
                    <input type='text' className="bg-white rounded-lg px-4 py-2 text-xl mt-8 mb-2" placeholder="name"/>
                    <input type='text' className="bg-white rounded-lg px-4 py-2 text-xl my-2" placeholder="email"/>
                    <textarea rows="5" placeholder="message" className="bg-white rounded-lg px-4 py-2 text-xl my-2"></textarea>
                    <button className="bg-black text-white px-4 py-2 rounded-md mt-8">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;