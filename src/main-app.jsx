import MainMessages from "./main-messages-list"
import SidechatList from "./side-chat-list"

function Main_App() {
    return (
        <div className="main-wrapper">
            {/* <!-- Side Panel --> */}
            <aside>
                {/* <!-- Side Header --> */}
                <header className="panel">
                    <img className="avatar" width="50" height="50" src="https://robohash.org/2" alt="" />
                    <h3>Tin Man</h3>
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
                            <input
                                type={"text"}
                                placeholder={"Type a message"}
                                // @ts-ignore
                                rows={""}
                                value={""}
                            /><button type="submit">
                                {/* <!-- This is the send button --> */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                >
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

export default Main_App