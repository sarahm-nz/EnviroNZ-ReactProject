export default function NavBar() {
    return (
        <nav className="fixed top-0 w-full">
            <div className="flex justify-between bg-gray-600 text-white">
                <img src={'src/assets/environz_logo.jpeg'} />
                <a href="/" className="" ></a>
                <ul className="flex mx-5 p-6 space-x-4 text-xl">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contactus">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
