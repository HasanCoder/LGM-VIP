export default function Card({user}) {
    return (
        <div className="w-full mb-2 md:w-1/2 md:mx-4 border rounded shadow-sm">
            <a href="#" className="mb-4">
                <img className="rounded" src={user.avatar ? user.avatar : ''}>
                </img>
            </a>
            <div className="px-4 py-4">
                <div>
                    <a href="#" className="font-semibold leading-tight text-2xl text-gray-800 hover:text-gray-800">
                        {user.first_name ? user.first_name : 'John'} {user.last_name ? user.last_name : 'Doe'}
                    </a>
                </div>
                <hr className="border-gray-200 my-1 border-bottom-none" style={{borderTopWidth: 0}}></hr>
                <p className="text-gray-900">
                    Email: {user.email ? user.email : 'abc@emaple.com'}
                </p>
            </div>
        </div>
    )
}