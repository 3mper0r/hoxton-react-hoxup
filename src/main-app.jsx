import MainMessages from "./main-messages-list"
import SidechatList from "./side-chat-list"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"

function MainApp({ currentUser, logOut }) {

    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        if (currentUser === null) navigate('/')
    }, [currentUser, navigate])

    // if user is not signed in, redirect to login page
    if (currentUser == null)
        return <h2>Signed out</h2>
    return (
        <div className="main-wrapper">
            {/* <!-- Side Panel --> */}
            <aside>
                {/* <!-- Side Header --> */}
                <header className="panel">
                    <img className="avatar" width="50" height="50" src={currentUser.avatar} alt="" />
                    <h3>{currentUser.firstName}</h3>
                    <button style={{ fontSize: "10px" }}
                        onClick={() => logOut()}>Log out </button>
                </header>

                {/* <!-- Search form --> */}
                <form className="aside__search-container">
                    <input type="search" name="messagesSearch" placeholder="Search chats" value="" />
                </form>

                {/* Side Chat List goes here. Check side-chat-list.html */}
                <SidechatList />

            </aside>

            {/* <!-- Main Chat Section --> */}
            <main className="conversation">
                {/* <!-- Chat header --> */}
                <header className="panel"></header>

                {/* The Messages List will go here. Check main-messages-list.html */}
                <MainMessages />

                <ul className="conversation__messages"></ul>

                {/* <!-- Message Box --> */}
                <footer>
                    <form className="panel conversation__message-box">
                        <div>
                            <input type="text" placeholder="Type a message"
                                // @ts-ignore
                                rows={""} value={""}
                            /><button type="submit">
                                {/* <!-- This is the send button --> */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path
                                        fill="currentColor"
                                        d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </form>
                </footer>
            </main>
        </div>

    )


}

export default MainApp